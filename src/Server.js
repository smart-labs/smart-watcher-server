import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import ServerWatcher from "./services/ServerWatcher";

class Server {
  constructor({ database, port }) {
    this.server = express();
    this.port = port;

    this.database(database);
    this.middlewares();
    this.routes();
  }

  database(url) {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes);
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Server in running on port ${this.port}`);
    });

    new ServerWatcher().start();
  }
}

export default Server;
