"use strict";
// {name: タスクの文字列, state: 完了しているかどうかの真偽値}
const tasks = [];

/**
 * TODOを追加する
 * @param {string} task
 */
function add(task) {
  tasks.push({ name: task, state: false });
}

/**
 * TODOの一覧の配列を取得する
 * @return {array}
 */
function list() {
  return tasks.filter((task) => !task.state).map((t) => t.name);
}

// add という関数をパッケージの関数として外部に公開する実装
module.exports = { add, list };
