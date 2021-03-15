//  からコマンドラインの引数で与えられた数までを合計するプログラムの作成

// JavaScript を Strict モードで利用するための記述
"use strict";

// process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列。

// 添字として 2 番を使っているかというと、0 番には node コマンドのファイルのパスが入り、1 番には実行しているプログラムのファイルのパスが入るため2番目を使用。

// このコードが実行されると、process.argv[2] が 0 や null や undefined などの Falsy な値である場合、number には 0 が代入される。
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
