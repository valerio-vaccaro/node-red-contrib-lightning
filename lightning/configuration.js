module.exports = function(RED) {
  function RemoteServerNode(n) {
    RED.nodes.createNode(this, n);
    this.path = n.path;
  }
  RED.nodes.registerType("lightning-server", RemoteServerNode);
}
