/**
 * Получаем репозитории с наибольшим кол-м ошибок
 */

const buildsData = require('../data/testdata.json');

const data = buildsData.data;
// module.exports = function (data) {
//     const errorOnlyRows = data.filter(function (row) {
//         return row.status === 'error';
//     })
//
//     return errorOnlyRows.length;
// };

//let allRepo = new Array();

//console.log(allRepo.length);
//data.forEach()
//allRepo = allRepo.concat({'name': 'test', 'error_cnt': 1});

/*function unique(arr, key) {
    let res = [];

    for (let key of arr) {
        if (!res.includes(key)) {
            res.push(obj);
        }
    }
    return res;
}*/
console.log("всего объектов в data", data.length);
let key = 'name';
//let allRepo = new Set(data.key);

//console.log(allRepo.size);

//console.log(unique(data, "name"));

//let allRepo = data.map(function(obj){

//})
let arr = [];
for (let i = 0; i < data.length; i++) {
    arr = arr.concat(data[i].name);
}

//console.log(arr.length);

let uniqName = new Set(arr);
uniqName = Array.from(uniqName);
console.log(uniqName.length);

let arrKeys = ['name', 'nbError'];

let getResArr = (arrKeys, arrData) => {
    return arrData.map(val => ({[arrKeys[0]] : val, [arrKeys[1]] : 0}));
}

let resArr = getResArr(arrKeys, uniqName);

//console.log(resArr);

let countErrors = (resArr, data) => {
    for (let i = 0; i < resArr.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((resArr[i].name === data[j].name) && (data[j].status === 'error')) {
                resArr[i].nbError++;
            }
        }
    }
    return resArr;
}

resArr = countErrors(resArr, data);

resArr.sort((a, b) => (b.nbError - a.nbError));

console.log(resArr[0], resArr[1], resArr[2]);

//new line
