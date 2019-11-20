import Server from "../models/Server";
import ping from "ping";
import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:${process.env.PORT}/` });

class ServerWatcher {
  async getServersInfo() {
    const servers = await Server.find();

    servers.forEach(server => {
      ping.promise.probe(server.url).then(({ alive, time }) => {
        const data = {
          status: alive ? "online" : "offline",
          responseTime: time
        };

        api
          .put(`/servers/${server._id}`, data)
          .then()
          .catch();
      });
    });
  }

  start() {
    this.interval = setInterval(this.getServersInfo, 30000);
  }

  stop() {
    clearInterval(this.interval);
  }
}

export default ServerWatcher;
