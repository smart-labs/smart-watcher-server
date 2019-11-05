import User from "../models/User";

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
    const result = await User.findById(req.query.id);

    res.send(result);
  }

  static async update(req, res) {
    const result = await User.findByIdAndUpdate(req.query.id);

    res.send(result);
  }

  static async destroy(req, res) {
    const result = await User.findByIdAndDelete(req.query.id);

    res.send(result);
  }
}

export default UsersController;
