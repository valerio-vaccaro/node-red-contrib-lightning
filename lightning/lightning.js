/**
 *   Copyright 2018 Valerio Vaccaro - www.valeriovaccaro.it

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

 */

//import the requirements
const LightningClient = require('lightning-client');


module.exports = function (RED) {

  // server configuration
  function RemoteServerNode(n) {
    RED.nodes.createNode(this, n);
    this.path = n.path;
  }

  // function: newaddress
  function newaddr(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.newaddr()
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: listinvoices
  function listinvoices(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.listinvoices()
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: waitanyinvoice
  function waitanyinvoice(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.waitanyinvoice(msg.id)
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: invoice
  function invoice(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.invoice(msg.msatoshi, msg.label, msg.description, msg.expiry)
        .then(result => {
          console.log(result);
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: dev-blockheight
  function devBlockheight(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.devBlockheight()
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: dev-setfees
  function devSetfees(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.devSetfees(msg.immediate,msg.normal,msg.slow)
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: listnodes
  function listnodes(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.listnodes()
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: getroute
  function getroute(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.getroute(msg.id,msg.msatoshi,msg.riskfactor,msg.cltv)
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: listchannels
  function listchannels(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.listchannels()
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: delinvoice
  function delinvoice(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.delinvoice(msg.label,msg.status)
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: waitinvoice
  function waitinvoice(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.waitinvoice(msg.label)
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // function: decodepay
  function decodepay(n) {
    RED.nodes.createNode(this, n);
    var lightning_dir = "";
    var server = RED.nodes.getNode(n.server);
    if (server) {
      lightning_dir = server.path;
    } else {
      lightning_dir = "";
    }
    var node = this;
    this.on("input", function (msg) {
      const client = new LightningClient(lightning_dir);
      client.decodepay(msg.bolt11,msg.description)
        .then(result => {
          msg.payload = result;
          node.send(msg);
        })
        .catch(error => {
          console.log(error);
          msg.payload = error;
          node.send(msg);
        });
    });
  };

  // Register the node by name. This must be called before overriding any of the
  // Node functions.
  RED.nodes.registerType("lightning-server", RemoteServerNode);
  RED.nodes.registerType("newaddr", newaddr);
  RED.nodes.registerType("listinvoices", listinvoices);
  RED.nodes.registerType("waitanyinvoice", waitanyinvoice);
  RED.nodes.registerType("invoice", invoice);
  RED.nodes.registerType("dev-blockheight", devBlockheight);
  RED.nodes.registerType("dev-setfees", devSetfees);
  RED.nodes.registerType("listnodes", listnodes);
  RED.nodes.registerType("getroute", getroute);
  RED.nodes.registerType("listchannels", listchannels);
  RED.nodes.registerType("delinvoice", delinvoice);
  RED.nodes.registerType("waitinvoice", waitinvoice);
  RED.nodes.registerType("decodepay", decodepay);
  
  
  
  /*
TODO

RED.nodes.registerType("help", help);
RED.nodes.registerType("stop", stop);
RED.nodes.registerType("getlog", getlog);
RED.nodes.registerType("dev-rhash", dev-rhash);
RED.nodes.registerType("dev-crash", dev-crash);
RED.nodes.registerType("getinfo", getinfo);
RED.nodes.registerType("listconfigs", listconfigs);
RED.nodes.registerType("sendpay", sendpay);
RED.nodes.registerType("pay", pay);
RED.nodes.registerType("listpayments", listpayments);
RED.nodes.registerType("connect", connect);
RED.nodes.registerType("listpeers", listpeers);
RED.nodes.registerType("fundchannel", fundchannel);
RED.nodes.registerType("close", close);
RED.nodes.registerType("dev-sign-last-tx", dev-sign-last-tx);
RED.nodes.registerType("dev-fail", dev-fail);
RED.nodes.registerType("dev-reenable-commit", dev-reenable-commit);
RED.nodes.registerType("dev-ping", dev-ping);
RED.nodes.registerType("dev-memdump", dev-memdump);
RED.nodes.registerType("dev-memleak", dev-memleak);
RED.nodes.registerType("withdraw", withdraw);
RED.nodes.registerType("listfunds", listfunds);
RED.nodes.registerType("dev-rescan-outputs", dev-rescan-outputs);
  */
}