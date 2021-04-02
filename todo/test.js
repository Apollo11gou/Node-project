"use strict";
const todo = require("./index.js");
// Node.js でテストをするための assert モジュールの呼び出し
const assert = require("assert");

//addと のテスト
todo.add("ノートを買う");
todo.add("鉛筆を買う");
assert.deepStrictEqual(todo.list(), ["ノートを買う", "鉛筆を買う"]);

console.log("テストが正常に完了しました");
