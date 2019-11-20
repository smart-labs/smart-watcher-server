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
}

export default UsersController;
