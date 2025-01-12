/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// var変数は上書き可能
// val1 = "var変数val1を上書き";
// console.log(val1);

// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// ↓をコメントアウト解除すると、エラーが出る
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// ↓をコメントアウト解除すると、エラーが出る
// val3 = "const変数を上書き";

// constは再宣言不可能
// ↓をコメントアウト解除すると、エラーが出る
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 31
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// react開発ではconstを多く使う。
// constでもプロパティの変更は可能だし、動的に値が変わるものはstateを使う

/**
 * テンプレート文字列 ``
 */
// const name = "じゃけぇ";
// const age = 31;
// 「私の名前はじゃけぇです。年齢は31歳です。」

// // 従来の方法（+で結合）
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法（可読性高い、簡潔）
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// 関数名　= (引数) => {}
// 引数が一つだけなら()を省略してもいい（が、自動で()が補完されることもある）
// 関数名　= 引数 => {}
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));
// // {}が単一式なら、{}とreturnが省略できる
// const func2alter = (str) => str;

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// {}内が単一行なので、下記のように書き換えられる
// const func3 = (num1, num2) => num1 + num2;
// オブジェクトを返すだけの処理も{}とreturnを省略できる。オブジェクトの定義自体は複数行にわたるが、()で囲んで単一行扱いにしてreturnを書かない省略記法を適用させられる
// const func3append= (num1, num2) => ({
//   hoge: num1,
//   huga: num2,
// });

// console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
    name: "じゃけぇ",
    age: 31
  };
  
  // オブジェクトの中身について、オブジェクト名.プロパティ名でアクセスできる
  // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
  // console.log(message1);
  
  // ↑はオブジェクト名あるいはプロパティ名が長いと煩雑になる。
  // そこで分割代入を使う
  // {プロパティ名} = オブジェクト名
  // プロパティ名でないといけない。name,ageはプロパティ名と一致させるように書いている
  const { name, age } = myProfile;
  const message2 = `名前は${name}です。年齢は${age}です。`;
  console.log(message2);
  
  // ふつうは文字列と数値が混ざった配列はあまり作らないが、解説用に作成
  // const myProfile = ["じゃけぇ", 31];
  // 配列の値の受け取り方。分割代入を使わない場合
  // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
  // console.log(message3);
  
  // 配列の値の受け取り方。分割代入を使う場合。配列の値はプロパティ名がついていないから、順番に代入
  // const [name, age] = myProfile;
  // const message4 = `名前は${name}です。年齢は${age}です。`;
  // console.log(message4);
  
  /**
   * デフォルト値（引数、分割代入）
   */
  // デフォルト引数を使っていない場合をまず説明
  // const sayHello = (name) => console.log(`こんちには!${name}さん!`);
  // sayHello("じゃけぇ"); //正常に「こんにちは！じゃけぇさん！」と表示される
  // sayHello();//「こんにちは！undefinedさん！」と表示される。
  // JSでは変数は何も設定されていない場合はundefinedだから
  // 値がわたってこないときはデフォルトの値を使いたい
  // const sayHello = (name = "ゲスト") => console.log(`こんちには!${name}さん!`);
  // sayHello("じゃけぇ"); //「こんにちは！じゃけぇさん！」と表示される
  // sayHello(); //「こんにちは！ゲストさん！」と表示される。
  
  
  // const myProfile = {
  //   age: 31
  // };
  // const { age, name = "ゲスト" } = myProfile;
  // console.log(age);//31
  // console.log(name);//"ゲスト"
  
  /**
   * オブジェクトの省略記法
   */
  // const name = "じゃけぇ";
  // const age = 31;
  // const myProfile = {
  //   name: name,
  //   age: age
  // };
  // プロパティ名とそのプロパティに設定する変数名が同じ場合↑、省略できる↓
  // const name = "じゃけぇ";
  // const age = 31;
  // const myProfile = {
  //   name,
  //   age
  // };
  // console.log(myProfile);
  
  /**
   * スプレッド構文 ...
   */
  // 配列の展開
  // const arr1 = [1, 2];
  // console.log(arr1);　// [1,2]
  // ...はスプレッド構文。配列の中身を出す
  // console.log(...arr1); // 1 2
  
  // const sumFunc = (num1, num2) => console.log(num1 + num2);
  // arrの中身を引数として渡したい
  // sumFunc(arr1[0], arr1[1]);　//配列の要素を指定
  // sumFunc(...arr1); //スプレッド構文を使用
  
  // まとめる
  // const arr2 = [1, 2, 3, 4, 5];
  // const [num1, num2, ...arr3] = arr2;//最初の値がnum1、次の値はnum2に一つずつ代入、それ以降は全部arr3にまとめる
  // console.log(num1);
  // console.log(num2);
  // console.log(arr3);
  
  // 配列のコピー、結合
  const arr4 = [10, 20];
  const arr5 = [30, 40];
  
  const arr6 = [...arr4];
  console.log(arr6); //[10, 20]
  
  // const arr7 = [...arr4, ...arr5];
  // console.log(arr7);//[10, 20, 30, 40]
  
  const arr8 = arr4;//これは配列の参照のコピーになる
  arr8[0] = 100;
  console.log(arr8);//[100,20]
  console.log(arr4);//[100,20] arr4を更新してしまう
  
  /**
   * mapやfilterを使った配列の処理
   */
  const nameArr = ['田中', '山田', 'じゃけぇ'];
  // for (let index = 0; index < nameArr.length; index++) {
  //   console.log(nameArr[index]);
  // }
  // for文をmapで書き換えると
  // nameArr.map((name) => console.log(name));
  
  // mapの処理を経て一つずつ値をreturnし、新しい配列nameArr2を作ることもできる
  // const nameArr2 = nameArr.map((name) => {
  //   return name;
  // })
  // console.log(nameArr2);
  
  // for (let index = 0; index < nameArr.length; index++) {
  //   console.log(`${index + 1}番目は${nameArr[index]}です`);//0-indexedなので+1することで1番目は～という表示から始まる
  // }
  // mapで書き換え。何番目かというインデックスは第二引数としてもつ
  // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
  
  // const numArr = [1, 2, 3, 4, 5];
  // const newNumArr = numArr.filter((num) => {
  //   return num % 2 === 1;//奇数だけフィルター
  // })
  // console.log(newNameArr);//[1,3,5]
  
  // じゃけぇ以外には語尾に「さん」を付けた新しい配列newNameArrを作る
  // const newNameArr = nameArr.map((name) => {
  //   if (name === "じゃけぇ") {
  //     return name;
  //   } else {
  //     return `${name}さん`;
  //   }
  // });
  // console.log(newNameArr);
  
  /**
   * 三項演算子
   */
  // ある条件 ? 条件がtrueの時 : 条件がfalseの時
  // const val1 = 1 > 0 ? "trueです" : "falseです";
  // console.log(val1); // trueです
  
  const num = 1300;
  //toLocaleString 数値を3桁区切りで表示
  console.log(num.toLocaleString()); //1,300
  // "1300"のような文字列には使えない
  
  // numが数値(number)ならtoLocaleStringを適用し、それ以外なら数値入力を促す
  // const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
  // console.log(formattedNum);
  
  // const checkSum = (num1, num2) => {
  //   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
  // };
  // console.log(checkSum(50, 40));
  
  /**
   * 論理演算子の本当の意味を知ろう && ||
   */
  // truthy、falsyについて
  // "ABC" 0 10 undefined null false NaN "" [] {}
  // const val = "ABC";
  // const val = 0;
  // const val = 10;
  // const val = undefined;
  // const val = null;
  // const val = true;
  const val = false;
  
  if (val) {
    console.log("valはtruthyです");
  } else {
    console.log("valはfalsyです");
  }
  // JavaScriptでは、真偽値でなくてもifの対象にできる。
  // 条件を満たすとされる値をtruthy,満たさないとされる値をfalsy。truth,falseに「のような」のニュアンスの接尾語yをつけたもの
  // 文字列はtruthy
  // 0はfalsy
  // 10はtruthy
  // undefinedはfalsy
  // nullはfalsy
  // trueはtruthy
  // falseはfalsy
  // https://typescriptbook.jp/reference/values-types-variables/truthy-falsy-values
  
  // const flag1 = true;
  // const flag2 = false;
  
  // if (flag1 || flag2) {
  //   console.log("1か2はtrueになります");
  // }
  // if (flag1 && flag2) {
  //   console.log("1も2もtrueになります");
  // }
  
  // 短絡評価
  // || は左側がtruthyの時その時点で返却する
  // const num = null;
  // const fee = num || "金額未設定です";
  // console.log(fee);　//"金額未設定です"
  // const num = 100;
  // const fee = num || "金額未設定です";
  // console.log(fee);　// 100
  
  // && は左側がfalsyの時その時点で返却する
  // const num2 = null;
  // const fee2 = num2 && "何か設定されました";
  // console.log(fee2); //null
  // const num2 = 100;
  // const fee2 = num2 && "何か設定されました";
  // console.log(fee2); //"何か設定されました" 左がtrue→右を評価して、右が設定される
  