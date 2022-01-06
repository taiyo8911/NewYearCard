// 今年を取得
function thisYear() {
    let today = new Date();
    let thisYear = today.getFullYear();
    return thisYear;
}

// 干支を取得
function yearToEto() {
    const etoList = ["🐭 子", "🐮 丑", "🐯 寅", "🐰 卯", "🐲 辰", "🐍 巳", "🐴 午", "🐏 未", "🐵 申", "🐔 酉", "🐶 戌", "🐗 亥"];
    index = (thisYear() + 8) % 12;
    return etoList[index];
}


// 年、干支の表示プログラム
document.getElementById("this-year").innerText = thisYear();
document.getElementById("eto").innerText = yearToEto();