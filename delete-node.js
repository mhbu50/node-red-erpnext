
module.exports = function (RED) {
    function ErpnextDeleteNode(config) {
        RED.nodes.createNode(this, config);
        this.host = RED.nodes.getNode(config.host);
        var node = this;
        node.log('this.host '+ JSON.stringify(this.host, null, 4));
        node.on('input', function (msg) {
            const ERPNext = require('erpnext-node');
            const erp = new ERPNext({
            host: this.host.url,
            user: this.host.username,
            password: this.host.password});
            erp.resource(config.doctype).delete(config.record_name).then(res => {
                node.log(res.name)
                msg.payload = config.record_name + " is Deleted";
                node.send(msg);
            })
            node.status({});      
        });
    }
    RED.nodes.registerType("delete-node", ErpnextDeleteNode);
};