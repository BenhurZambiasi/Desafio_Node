import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';


class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    //verefica se o email é o mesmo cadastrado
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' })
    }
    //verefica se a senha é o mesmo cadastrado
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' })
    }

    const { id, name } = user;

    return res.json({
      user: { id, name, email },
      // token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expiresIn })
    })
  }
}

export default new SessionController();