module.exports = function (RED) {
    function ErpnextConfigNode(n) {
        RED.nodes.createNode(this, n);
        this.url = n.url;
        this.username = n.username;
        this.password = n.password;
    }
    RED.nodes.registerType("erpnext-config", ErpnextConfigNode);
}