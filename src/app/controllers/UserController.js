import User from '../models/User';
import * as Yup from 'yup';

class UserController {
  async store(req, res) {

    //validando se o usuário está preenchendo os campos requeridos
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })
    if (!(await schema.isValid(req.body))) {
      return res.json({ erro: 'Erro de validação' })
    }
    //verificando se email já não existe
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }
  //alterando o cadastro
  async update(req, res) {

    const user = await User.findByPk(req.userId);
    const { id, name, email } = await user.update(req.body)

    return res.json({ id, name, email });
  }

}

export default new UserController();