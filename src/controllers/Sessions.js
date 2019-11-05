import User from "../models/User";

class SessionsController {
  static async create(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).send({ error: "Invalid password" });
    }

    return res.send({
      user,
      token: user.generateToken()
    });
  }
}

export default SessionsController;
