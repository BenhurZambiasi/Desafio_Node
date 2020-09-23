import * as Yup from 'yup';
import Product from '../models/Product';

class ProductController {
  async index(req, res) {

    const product = await Product.findAll({
      attributes: ['id', 'name', 'descricao', 'logo', 'manual'],
      order: ['id']
    })
    return res.json(product)
  }



  async store(req, res) {
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
  }

  async update(req, res) {

    const product = await Product.findByPk(req.params.id)

    const { id, name, descricao, logo, manual } = await product.update(req.body)

    return res.json(product)

  }

  async delete(req, res) {
    const id = req.body.id

    await Product.destroy({
      where: {
        id: id
      }
    })

    return res.json({ message: 'Produto excluído com sucesso!!' });
  }

}

export default new ProductController();