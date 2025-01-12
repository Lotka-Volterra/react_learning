import './style.css';

// 最初は関数が動くことの確認のため、下記のような簡単な関数を記載
// const onClickAdd = () => {
//   alert();
// }
// document.getElementById("add-button").addEventListener("click",onClickAdd);
// 追加ボタンを押したときにフォームに入力された内容を未完了のTODOに移動させる処理
// 追加ボタンが押された時の処理
const onClickAdd = () => {
  // フォームに入力した内容をinputTextに代入
  const inputText = document.getElementById("add-text").value;
  // alert(inputText);
  // TODOがフォームに残っていると不便なので、初期化する
  document.getElementById("add-text").value="";
  
  // 未完了リストに追加
  createIncompleteTodo(inputText);
}

// 渡された引数をもとに未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
  // liタグを生成
  const li =document.createElement("li");
  // console.log(li);
  // divタグを生成
  const div =document.createElement("div");
  div.className="list-row";
  // console.log(div);
  // pタグを生成
  const p =document.createElement("p");
  p.className="todo-item";
  p.innerText=todo;
  // console.log(p);

  // buttonタグ（完了ボタン）生成
  const completeButton = document.createElement("button");
  completeButton.innerText="完了";
  completeButton.addEventListener("click",()=>{
    // alert("完了");
    // 押された完了ボタンの親にあるliタグの配下の完了ボタンと削除ボタンを削除
    // 押された完了ボタンの親にあるliタグを取得
    const moveTarget = completeButton.closest("li");
    // 完了ボタンの隣の要素である削除ボタンを削除
    completeButton.nextElementSibling.remove();
    // 完了ボタン自身を削除
    completeButton.remove();
    // 戻すボタンを生成してdivタグ配下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click",()=>{
      // TODOの内容を取得し、未完了リストに追加
      // 戻すボタンの前の要素であるpタグの中身を取得
      const todoText=backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText); //関数化したことにより、自分自身を呼ぶことができるようになる（「タスクの戻す機能」参照）
    // 押された戻すボタンの親にあるliタグを削除
    backButton.closest("li").remove();

    })
    moveTarget.firstElementChild.appendChild(backButton);
    // 完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  })
  // buttonタグ（削除ボタン）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText="削除";
  deleteButton.addEventListener("click",()=>{
    // alert("削除");
    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    // 押された削除ボタンの親にあるliタグを探す
    const deleteTarget = deleteButton.closest("li");
    // console.log(deleteTarget);
    // li要素を削除
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

div.appendChild(p);
// console.log(div);
div.appendChild(completeButton);
div.appendChild(deleteButton);
li.appendChild(div);
// console.log(li);
// 未完了リストに追加
document.getElementById("incomplete-list").appendChild(li);
}
// 追加ボタンがクリックされたときにonClickAddを呼ぶ
document.getElementById("add-button").addEventListener("click",onClickAdd);

