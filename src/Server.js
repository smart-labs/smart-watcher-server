import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import ServerWatcher from "./services/ServerWatcher";
import io from "socket.io";
import http from "http";

class Server {
  constructor({ database, port }) {
    this.app = express();
    this.server = http.Server(this.app);
    this.port = port;

    this.database(database);
    this.middlewares();
    this.routes();
  }

  database(url) {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  }

  middlewares() {
    this.app.use((req, res, next) => {
      req.io = io(this.server);
      return next();
    });
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Server in running on port ${this.port}`);
    });

    new ServerWatcher().start();
  }
}

export default Server;
