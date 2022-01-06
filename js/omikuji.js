// おみくじを引く
function Omikuji() {
    const resultList = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
    //生成した乱数を変数「random」に代入する
    let random = Math.floor(Math.random() * resultList.length);
    document.getElementById("omikuji-result").innerText = resultList[random];
}