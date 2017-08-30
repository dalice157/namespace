//事件監聽跟發送
JBB.home.higher.common.listener = function () {

    var notify = {};

    //訂閱事件
    var subscript = function (type, callback) {
        notify[type].push(callback);
    }

    //發送事件
    var sendNotify = function (type, args) {
        console.log(notify[type])
        for (var i = 0; i < notify[type].length; i++) {
            notify[type][i](args);
        }
    }

    //註冊事件
    function register(type) {
        notify[type] = [];
    }

    this.subscript = subscript
    this.sendNotify = sendNotify
    this.register = register
};
