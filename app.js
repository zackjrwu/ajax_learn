//  call back function 使用(確保執行順序)
//  無論 A 要執行多久都會等他執行完才執行 B

var funcA = function (callback) {
    var i = Math.random() + 1;

    setTimeout(function () {
        console.log('function A');
        if (typeof callback === 'function') {
            callback();
        }
    }, i * 1000);

};


var funcB = function () {
    var i = Math.random() + 1;

    setTimeout(function () {
        console.log('function B');
    }, i * 1000);
};

funcA(funcB);