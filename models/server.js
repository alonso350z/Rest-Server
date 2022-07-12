const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRouthPath = '/api/users';
    //middlewares
    this.middlewares()
    //Application Routes
    this.routes();
  }

  routes() {
    this.app.use(this.usersRouthPath, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server runnning in port: ' + this.port);
    });
  }

  middlewares() {
    this.app.use(cors());
    //Parse to body
    this.app.use(express.json());
    //Directory Public
    this.app.use(express.static('public'));
  }

}

module.exports = Server;