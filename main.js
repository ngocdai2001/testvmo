/*
Kiểu dữ liệu trong js

1. Dữ liệu nguyên thủy - Primitive Data
    -Number
    -String
    -Boolean
    -Undefined
    -null
    -Symbol

2. Dữ liệu phức tạp - Complex Data
    -Function
    -Object
*/

//Number type
var a = 1;
var b = 2;
console.log(typeof a); //Ktra kiểu dữ liệu

//String type
var fullName = 'Ngoc Dai';

//Boolean type 
var isSuccess = true;

//Undefined
var age;

//null
var isNull = null;

//Symbol
var id = Symbol('id');
var id2 = Symbol('id'); //unique

//Function
var myFunction = function() {
    alert('Hello world');
}
myFunction ();

//Object
var myObject = {
    name: 'Ngoc Dai',
    age: 22,
    myFunction: function(

    )
}

console.log('myObject', myObject);

var myArray = [
    'JS',
    'HTML',
    'CSS'
];
console.log(myArray);

//Toán tử so sánh-P2: ===, !==
var a = 1;
var b = '1';
console.log( a === b );

//Hiểu câu lệnh điều kiện và phép so sánh 
var a = 1;
var b = 2;

var result = 'A' && 'B';
console.log(result); //KQ trả về sẽ lấy giá trị cuối nếu găp: 0, '', null, undefined, NaN, false thì nó sẽ lấy luôn 

var result = 'A' || 'B'; ////KQ trả về sẽ lấy giá trị đầu nếu gặp 6 TH trên sẽ bỏ qua 

/* 
Hàm (function) trong javascript

1. Hàm ?
    -Một khối mã 
    -Làm 1 việc cụ thể

2. Loại hàm 
    -Built-in
    -Tự định nghĩa

3. Tính chất
    -Không thực thi khi định nghĩa
    -Sẽ thực thi khi được gọi
    -Có thể nhận tham số
    -Có thể trả về 1 giá trị 

4. Tạo hàm đầu tiên
*/ 

function showDialog() {
    alert('Xin chào các bạn');
}
showDialog();

/*
Tham số hàm - JS cơ bản 

1. Tham số?
    -Định nghĩa?
    -Kiểu dữ liệu?
    -Tính private?
    -1 tham số
    -Nhiều tham số

2. Truyền tham số?
    -1 tham số
    -Nhiều tham số

3. Arguments?
    -Đối tượng arguments
    -Giới thiệu vòng for of
*/

function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} -` 
    }
    console.log(myString)
}
writeLog('log 1', 'log 2', 'log 3');

//Return trong hàm - JS cơ bản
function sum(a, b) {
    return a + b
}

var result = sum(1, 2)
console.log(result)

/* 
Một số điều cần thiết về function

    1. Khi function đặt trùng tên?
    2. Khai báo biến trong hàm?
    3. Định nghĩa hàm trong hàm?
*/

/* 
Các loại function 
1. Declaration function
2. Expression function
3. Arrow function
*/

function showMessage() {
    console.log('Declaration function');
}

var showMessage2 = function() {
    console.log('Expression function');
}

// Chuỗi trong javascript

// 1. Tạo chuỗi 
//     - Các cách tạo chuỗi
//     - Nên dùng cách nào? Lý do?
//     - Kiểm tra data type
// 2. Một số case sử dụng backlash (\)
// 3. Xem độ dài chuỗi
// 4. Chú ý dộ dài khi viết Code
// 5. Template string ES6

//  Làm việc với Array
//  1. To String
//  2. Join
//  3. Pop
//  4. Push
//  5. Shift
//  6. Unshift
//  7. Splicing 
//  8. Concat
//  9. Slicing

var languages = [
    'Javascript',
    'Php',
    'Ruby'
];

console.log(languages.pop()) //Xóa element cuối của mảng và trả về giá trị đã xóa

console.log(languages.push('Dart', '')) //Thêm 1 hoặc nhiều element vào cuối mảng và trả về số lượng phần tử trong mảng 

console.log(languages.shift()) //Xóa element đầu của mảng và trả về giá trị đã xóa

console.log(languages.unshift('Dart')) //Thêm 1 hoặc nhiều element vào đầu mảng và trả về số lượng phần tử trong mảng 

console.log(languages.splice(1, 1, 'Dart')) //Vị trí đặt con trỏ - số lượng element muốn xóa - chèn element vào vị trí con trỏ

var languages2 = [
    'Dart',
    'Java'
]
console.log(languages.concat(languages2)) //Hợp nhất code

console.log(languages.slice(1,2)) //vị trí đầu - vị trí cuối cần cắt

// Object trong javascript
var myInfo = {
    name: 'Ngoc Dai',
    age: 21,
}
myInfo.email = 'hoangngocdai2001@gmail.com' // Chèn thêm 1 key
console.log(myInfo);

delete myInfo.age; //Xóa 1 key 

console.log(myInfo.name) //Lấy ra 1 key


// Object constructor 
function Animal(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}

var parrot = new.Animal('parrot', '2', '12km/h');
console.log(parrot);

// Opject Prototype - Basic
//     1. Prototype là gì 
//     2. Sử dụng khi nào
function Animal(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}

Animal.prototype.age = '12'

var parrot = new.Animal('parrot', '2', '12km/h');
console.log(parrot.age);


// Đối tượng Date
var date = new Date() ;
var year = date.getFullYear;
var month = date.getMonth + 1;
var day = date.getDay;

console.log(`${day}/${month}`/${year});


/* Math object
-Math PI
-Math round(): làm trong số thập phân 
-Math.abs(): số tuyệt đối
-Math.ceil(): làm tròn trên
-Math.floor(): làm tròn dưới 
-Math.random(): tạo số ngẫu nhiên
-Math.min(): lấy ra số nhỏ nhất 
-Math.max(): lấy ra số lớn nhất 
 */

// Switch case
function run(fruits) {
    var result;

    switch(fruits) {
        case "banana":
            result = "Day la qua chuoi";
            break;
        case "origin":
            result = "Day la qua cam";
            break;
    }
    return result;
}

// Toán tử 3 ngôi 
var course = {
    name: 'Javascript',
    coin: 250
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coin`);
// } else {
//     console.log('Miễn phí');
// }


var result = course.coin > 0 ? `${course.coin} Coin` : 'Miễn phí';
console.log(result);


/* Vòng lặp - Loop
1. for - Lặp với đkiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng 
4. while - lặp khi đkiện đúng 
5. do/while - lặp ít nhất 1 lần, sau đó lặp khi đkiện đúng 
*/
for(var i = 1; i < 1000; i++){
    console.log(i);
}

var myArray = [
    'js',
    'php',
    'css',
    'html',
    'java',
    'nodejs'
]

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

// For/in loop
var myString = 'javascript';
var languages = 'java'

for (var key in languages) {
    console.log(languages[key])
}

//Lọc phần tử trùng nhau của mảng 
var array = [a,b,c,a,b,c,a,b,c];
console.log([...(new Set(array))]);

var 