import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//const name = "taji";
// //const age = "31";

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// //アロー関数
// //従来
// function func1(str) {
//   return str;
// }
// console.log(func1("funk1です"));
// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("funk2です"));
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("funk3です"));
// const func4 = (str) => str;
// console.log(func4("funk4です"));

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func5(10, 20));

// //分割代入
// const myProfile = {
//   name: "taji",
//   age: 31
// };

// //const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// //console.log(message3);

// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const myProfile = ["taji", 31];

// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//デフォルト値

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん。`);
// sayHello("taji");

//周防レッド構文...
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
//配列のコピーは参照渡し

// //mapやfilterを使った配列の処理;

// const nameArr = ["田中", "山田", "taji"];
// // // for (let index = 0; index < nameArr.length; index++) {
// // //   console.log(nameArr[index]);
// // // }

// // // const nameArr2 = nameArr.map((name) => {
// // //   return name;
// // // });
// // // console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // })
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "taji") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/*三項演算子*/

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;

// console.log(num.toLocaleString());
// //数値を三桁区切り

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です。";
// };
// console.log(checkSum(50, 30));

/*論理演算子の本当の意味を知ろう*/

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

//左側がfalseの時右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

//左側がtrueの時右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
