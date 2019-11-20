import User from "../models/User";
import generatePassword from "../utils/password";
import Mail from "../lib/Mail";
class UsersController {
  static async index(req, res) {
    const result = await User.find();

    res.send(result);
  }

  static async create(req, res) {
    const result = await User.create(req.body);

    res.send(result);
  }

  static async show(req, res) {
    const result = await User.findById(req.params.id);

    res.send(result);
  }

  static async update(req, res) {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.send(result);
  }

  static async destroy(req, res) {
    const result = await User.findByIdAndDelete(req.params.id);

    res.send(result);
  }
  static async resetPassword(req, res) {
    const user = await User.findOne({ email: req.params.email });
    user.password = generatePassword();
    user.save();
    await Mail.sendMail({
      to: `${user.name} <${req.query.email}>`,
      subject: "Recuperação de senha - Smart labs watcher",
      text: `${user.name} sua nova senha é - ${user.password}`
    });
    return res.send("Email enviado para sua caixa de entrada!");
  }
}

export default UsersController;
