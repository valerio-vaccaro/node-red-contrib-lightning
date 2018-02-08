/**
 * lightning.js
 *
 *
 * Copyright 2018 Valerio Vaccaro - www.valeriovaccaro.it
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

//import the requirements
const LightningClient = require('lightning-client');
const lightning_dir = "/home/satoshi/.lightning";

module.exports = function(RED) {
  // Node for stamp a Buffer content
  function newaddr(n) {
    RED.nodes.createNode(this, n);
    var node = this;
    this.on("input", function(msg) {
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

  function listinvoices(n) {
    RED.nodes.createNode(this, n);
    var node = this;
    this.on("input", function(msg) {
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

 function waitanyinvoice(n) {
    RED.nodes.createNode(this, n);
    var node = this;
    this.on("input", function(msg) {
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

 function invoice(n) {
    RED.nodes.createNode(this, n);
    var node = this;
    this.on("input", function(msg) {
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

  // Register the node by name. This must be called before overriding any of the
  // Node functions.
  RED.nodes.registerType("newaddr", newaddr);
  RED.nodes.registerType("listinvoices", listinvoices);
  RED.nodes.registerType("waitanyinvoice", waitanyinvoice);
  RED.nodes.registerType("invoice", invoice);
}
