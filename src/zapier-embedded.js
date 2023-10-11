module.exports = function(RED) {
    function ZapierEmbedNode(config) {
      RED.nodes.createNode(this, config);
      var node = this;
      node.on('input', function(msg) {
        // Custom logic here
        node.send(msg);
      });
    }
    RED.nodes.registerType("zapier-embed", ZapierEmbedNode);
  };
  