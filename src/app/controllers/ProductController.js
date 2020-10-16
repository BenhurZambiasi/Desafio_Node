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
        return res.status(400).json({ error: "Id não encontrado" })
      }
      return res.json([product])

    } catch (error) {
      return res.status(401).json({ error: "Requizição não encontrada" })
    }
  }
  //criando o produto
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        descricao: Yup.string().required(),
        logo: Yup.string().required,
        manual: Yup.string()
      })
      // if (!(await schema.isValid(req.body))) {
      //   return res.json({ erro: 'Erro de validação' })
      // }
      const productExist = await Product.findOne({ where: { name: req.body.name } });
      if (productExist) {
        return res.status(400).json({ error: 'Produto já cadastrado' })
      }
      const product = await Product.create(req.body);

      return res.json(product);
    } catch (err) {
      return res.status(401).json({ error: "Produto já castrado" })
    }
  }


  // Atualizano o produto
  async update(req, res) {
    try {
      const product = await Product.findByPk(req.params.id)
      await product.update(req.body)

      return res.json(product)
    } catch (err) {
      return res.status(401).json({ error: "ID não encontrado" })
    }

  }
  // deletando o produto
  async delete(req, res) {
    try {
      const id = req.params.id
      const productExist = await Product.findOne({ where: { id } })

      if (productExist) {
        if (id == null) {
          await Product.destroy({ where: { id } })
          return res.json({ message: 'Produto excluído com sucesso!!' });
        }
        await Product.destroy({ where: { id } })
        return res.json({ message: 'Produto excluído com sucesso!!' })
      }
      return res.status(400).json({ error: "Id não encontrado" })
    } catch (error) {
      return res.status(401).json({ error: "Falha na exclusão" })
    }

  }
}

export default new ProductController();