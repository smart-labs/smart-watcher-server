import Server from "../models/Server";
import ping from "ping";

class ServerWatcher {
  async getServersInfo() {
    const servers = await Server.find();

    servers.forEach(server => {
      ping.promise
        .probe(server.url)
        .then(({ alive, time }) => console.log(alive, time));
    });
  }

  start() {
    this.interval = setInterval(this.getServersInfo, 3000);
  }

  stop() {
    clearInterval(this.interval);
  }
}

export default ServerWatcher;
