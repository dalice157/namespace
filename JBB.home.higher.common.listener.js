//事件監聽跟發送
JBB.home.higher.common.listener = function () {
    var notify = {};
    
    var subscript = function (type, callback) { //訂閱事件
        notify[type].push(callback);
    }

    var sendNotify = function (type, args) {//發送事件
        console.log(notify[type])
        for (var i = 0; i < notify[type].length; i++) {
            notify[type][i](args);
        }
    }

    function register(type) {//註冊事件
        notify[type] = [];
    }
    
    this.subscript = subscript
    this.sendNotify = sendNotify
    this.register = register
};