import Server from "../models/Server";

class ServersController {
  static async index(_, res) {
    const result = await Server.find();

    res.send(result);
  }

  static async create(req, res) {
    const result = await Server.create(req.body);

    req.io.emit("servers/create", result);

    res.send(result);
  }

  static async show(req, res) {
    console.log(req.params);
    const result = await Server.findById(req.params.id);

    res.send(result);
  }

  static async update(req, res) {
    const result = await Server.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    req.io.emit("servers/update", result);

    res.send(result);
  }

  static async destroy(req, res) {
    const result = await Server.findByIdAndDelete(req.params.id);

    res.send(result);
  }
}

export default ServersController;
