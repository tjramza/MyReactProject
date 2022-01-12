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

const myProfile = ["taji", 31];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);
