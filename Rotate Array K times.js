
//rotate an array k times

var rotate = function (arrs, k) {
    var arrs = [10, 12, 14, 35, 89, 11];
    var k = 10;
    for (let i = 0; i < k; i++) {
        arrs.unshift(arrs.pop());
    }

    console.log(arrs);
}
rotate();

//outputArray(6) [ 14, 35, 89, 11, 10, 12 ]










(function () {
    var rotate = function (arrs, k) {
        var arrs = [10, 12, 14, 35, 89, 11];
        var k = 12;
        for (let i = 0; i < k; i++) {
            arrs.unshift(arrs.pop());
        }

        console.log(arrs);
    }
    rotate();

})();
// Array(6) [ 10, 12, 14, 35, 89, 11 ]
