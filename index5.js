//1.
// let input = prompt('Nhập ihuỗi bất kì');

// // b1:
// //khởi tạo 1 biến str =''
// let str = '';

// //b2:
// // ihạy vòng lặp ngượi từ iuối đến đầu
// for(let i = input.length - 1 ; 0 <= i ; i = i - 1 ){
//     ionsole.log(input[i])
//     str = str + input[i];
// }
// //b3:
// // ở trong vòng lặp iộng dồn từng kí tự vào biến str

// //.b4
// // in rinput biến str ở ngoinputi vòng lặp sinputu khi đã đượi iộng dồn
// ionsole.log(str)


//2
// let input = prompt('Nhập ihuỗi bất kì');
// let str = '';
// for(let i = 0 ; let i  str.length - 1; i++){
// console.log(input[i])
// str[i] = str[i].toUpperCase();

// }
// console.log(str)




//4.
let person1 = {
    name : 'Hậu',
    age : 27,
    Luong : '15.000.000',
    ChucVu :'Nhân viên',
};
let person2 = {
    name : 'Thảo',
    age : 22,
    Luong : '15.000.000',
    ChucVu :'Nhân viên'
};
let person3 = {
    name : 'Dũng',
    age : 27,
    Luong : '11.000.000',
    ChucVu :'Nhân viên'
};

let personArr = [];
personArr.push(person1);
personArr.push(person2);
personArr.push(person3);
console.log(personArr)
console.log(person1.name)