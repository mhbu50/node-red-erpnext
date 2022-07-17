
module.exports = function (RED) {
    function ErpnextCallNode(config) {
        RED.nodes.createNode(this, config);
        this.host = RED.nodes.getNode(config.host);
        var node = this;      
        node.on('input', function (msg) {
            const ERPNext = require('erpnext-node');
            const erp = new ERPNext({
            host: this.host.url,
            user: this.host.username,
            password: this.host.password});
            erp.call(config.function,msg.data).then(res => {
                node.log(res)
                msg.payload = res;
                node.send(msg);
            })
            node.status({});      
        });
    }
    RED.nodes.registerType("call-node", ErpnextCallNode);
};