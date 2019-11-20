import express from "express";

import ServersController from "./controllers/Servers";
import SessionsController from "./controllers/Sessions";
import UsersController from "./controllers/Users";

const router = express.Router();

router.get("/", (_, res) =>
  res.send({
    Company: "Smart Labs",
    Github: "https://github.com/smart-labs",
    Project: "Smart Watcher",
    Version: "0.0.1",
    Status: "Online"
  })
);

router.post("/sessions", SessionsController.create);

router.get("/servers", ServersController.index);
router.post("/servers", ServersController.create);
router.get("/servers/:id", ServersController.show);
router.put("/servers/:id", ServersController.update);
router.delete("/servers/:id", ServersController.destroy);

router.post("/users", UsersController.create);
router.get("/users", UsersController.index);
router.get("/users/:id", UsersController.show);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);

router.get("/recoveries/passwords", UsersController.resetPassword);
export default router;
