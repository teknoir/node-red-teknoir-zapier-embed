module.exports = function(RED) {
    function ZapierEmbedNode(config) {
        RED.nodes.createNode(this, config);
        
        var node = this;

        // Handle incoming messages
        this.on('input', function(msg) {
            // For now, just pass the message through.
            // You can add more logic here if needed.
            node.send(msg);
        });
    }

    RED.nodes.registerType("zapier-embed", ZapierEmbedNode);
}