"use strict";
module.exports = (robot) => {
  // Hubot の API の利用
  // 正規表現で、大文字小文字を問わず hello> という文字にマッチし、 もしマッチしたら次に渡す無名関数を実行せよという形式
  robot.hear(/hello>/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
};
