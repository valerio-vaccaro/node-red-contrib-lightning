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

module.exports = function(RED) {
  // Node for stamp a Buffer content
  function lightning_newaddr(n) {
    RED.nodes.createNode(this, n);
    this.status({
      fill: "grey",
      shape: "dot",
      text: "Waiting ..."
    });
    var msg = {};
    var node = this;
    this.on("input", function(msg) {
      const client = new LightningClient('/home/bitcoind/.lightning');
      
      client.newaddr()
        .then(addr => { 
          this.status({
            fill: "green",
            shape: "dot",
            text: "Done"
          });
          msg.payload = addr; 
          node.send(msg);
        });


      // import the file content like Buffer
      /*const stampResultPromise = OpenTimestamps.stamp(msg.fileArray);
      stampResultPromise.then(stampResult => {
        // convert the stampResult in a Buffer
        var ots = new Buffer(stampResult);
        msg.otsArray = ots;
        this.status({
          fill: "green",
          shape: "dot",
          text: "Done"
        });
        node.send(msg);
      });*/
    });
  }

  // Register the node by name. This must be called before overriding any of the
  // Node functions.
  RED.nodes.registerType("lightning_newaddr", lightning_newaddr);

}
