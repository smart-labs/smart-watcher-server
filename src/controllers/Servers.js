import Server from "../models/Server";

class ServersController {
  static async index(_, res) {
    const result = await Server.find();

    res.send(result);
  }

  static async create(req, res) {
    const result = await Server.create(req.body);

    res.send(result);
  }

  static async show(req, res) {
    const result = await Server.findById(req.query.id);

    res.send(result);
  }

  static async update(req, res) {
    const result = await Server.findByIdAndUpdate(req.query.id);

    res.send(result);
  }

  static async destroy(req, res) {
    const result = await Server.findByIdAndDelete(req.query.id);

    res.send(result);
  }
}

export default ServersController;
