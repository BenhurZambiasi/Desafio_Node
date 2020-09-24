import * as Yup from 'yup';
import Product from '../models/Product';

class ProductController {

  //listando todos os produtos ou apenas passando o ID
  async index(req, res) {
    try {
      const id = req.params.id;
      if (id == null) {
        const product = await Product.findAll({
          attributes: ['id', 'name', 'descricao', 'logo', 'manual'],
          order: ['id']
        })
        return res.json(product)
      }
      const product = await Product.findByPk(id,
        {
          attributes: ['id', 'name', 'descricao', 'logo', 'manual'],
          order: ['id']
        })
      if (product == null) {
        return res.status(401).json({ error: "Id não encontrado" })
      }
      return res.json(product)

    } catch (error) {
      return res.status(401).json({ error: "Id não encontrado" })
    }
  }
  //criando o produto
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        descricao: Yup.string().required(),
        logo: Yup.string().required(),
        manual: Yup.string(),
      })
      if (!(await schema.isValid(req.body))) {
        return res.json({ erro: 'Erro de validação' })
      }
      const product = await Product.create(req.body);

      return res.json(product);
    } catch (err) {
      return res.status(401).json({ error: "Falha no cadastro" })
    }
  }
  // atualizano o produto
  async update(req, res) {
    try {
      const product = await Product.findByPk(req.params.id)
      const { id, name, descricao, logo, manual } = await product.update(req.body)

      return res.json(product)
    } catch (err) {
      return res.status(401).json({ error: "Falha na atualização" })
    }

  }
  // deletando o produto
  async delete(req, res) {
    try {
      await Product.destroy({ where: { id: req.body.id } })
      return res.json({ message: 'Produto excluído com sucesso!!' });
    } catch (error) {
      return res.status(401).json({ error: "falha na exclusão" })
    }

  }

}

export default new ProductController();