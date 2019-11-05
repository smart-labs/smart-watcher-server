import "localenv";
import Server from "./Server";

const port = process.env.PORT;
const database = process.env.DATABASEURI;

const server = new Server({ port, database });

server.start();
