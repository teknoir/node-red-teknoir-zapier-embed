module.exports = function(RED) {
  function ZapierTemplateNode(config) {
      RED.nodes.createNode(this, config);
      var node = this;
      node.selectedTemplate = config.selectedTemplate;
      node.on('input', function(msg) {
          msg.payload = { selectedTemplate: node.selectedTemplate };
          node.send(msg);

          var triggerNodeUrl = msg.payload;

          this.triggerNodeUrl = triggerNodeUrl;
      });
  }
  RED.nodes.registerType("zapier-template", ZapierTemplateNode);
};
