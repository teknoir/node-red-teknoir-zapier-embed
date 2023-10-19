module.exports = function(RED) {
    function ZapierEmbedNode(config) {
      RED.nodes.createNode(this, config);
      var node = this;
      node.selectedTemplate = config.selectedTemplate;
      node.on('input', function(msg) {
        msg.payload = { selectedTemplate: node.selectedTemplate };
        
        node.send(msg);
      });
    }
    RED.nodes.registerType("zapier-embed", ZapierEmbedNode);
  };
  