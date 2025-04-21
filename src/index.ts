import { H3Transport } from "@colyseus/h3-transport";
import { Server } from "colyseus";
import express from "express";
import { createServer } from "http";

const port = 3001;
const app = express();
const server = createServer(app);

app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        hello: 'world!'
    })
})

const transport = new H3Transport({ server, app });
const gameServer = new Server({ transport });
gameServer.listen(port)
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

