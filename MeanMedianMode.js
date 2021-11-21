// sum


function sum(arr) {

    let sum = 0;

    for (let num of arr) {
        sum += num;
    }
    return sum;
}

const arr = [1, 2, 3];
console.log(sum(arr));















//mean

function mean(arr1) {

    let sum = 0;

    for (let num of arr1) {
        sum += num;
    }
    return sum / arr1.length;
}

const arr1 = [1, 2, 3, 5, 7, 9, 7, 5, 3, 75, 52, 8];
console.log(mean(arr1));















//median

let median = function (Array) {

    var Array = Array.sort((a, b) => a - b);
    if (Array.length % 2 !== 0) {
        return Array[Math.floor(Array.length / 2)];
    } else {

        let num1 = Array[Array.length / 2];
        let num2 = Array[Array.length / 2 - 1];
        return (num1 + num2) / 2;
    }


}

let arr1 = [9, 6, 8, 4, 8, 95]
let arr2 = [1, 2, 3, 5, 3, 2];
const Array = [...arr1, ...arr2];

console.log(median(Array));

//Output>> 4.5 we can floor or ceil if required.


(function () {
    let median = function (Array) {

        var Array = Array.sort((a, b) => a - b);
        if (Array.length % 2 !== 0) {
            return Array[Math.floor(Array.length / 2)];
        } else {

            let num1 = Array[Array.length / 2];
            let num2 = Array[Array.length / 2 - 1];
            return (num1 + num2) / 2;
        }


    }

    let arr1 = [9, 6, 8, 4, 8, 95]
    let arr2 = [1, 2, 3, 5, 3, 2];
    const Array = [...arr1, ...arr2];

    console.log(median(Array));
})();























//Mode



function mode(arr) {

    const arrObj = {};
    arr.forEach((elem) => {
        if (!arrObj[elem]) arrObj[elem] = 0;
        arrObj[elem]++;
    });

    let result = [];
    let max = 0;


    for (let key in arrObj) {
        if (arrObj[key] > max) {
            result = [key];
            max = arrObj[key]
        } else if (arrObj[key] === max) {
            result.push(key)
        }
    }
    if (Object.keys(arrObj).length === result.length) {
        result = [];
    }
    return result;
}

const arr = [1, 1, 1, 2, 3];
console.log(mode(arr));