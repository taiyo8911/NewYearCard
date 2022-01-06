// 今年を取得
function thisYear() {
    let today = new Date();
    let thisYear = today.getFullYear();
    return thisYear;
}

// 画像取得用のキーワード（干支）を取得
function getEto() {
    const etoList = ["ねずみ", "牛", "虎", "うさぎ", "タツノオトシゴ", "へび", "馬", "羊", "猿", "鶏", "犬", "猪"];
    index = (thisYear() + 8) % 12;
    return etoList[index];
}

// 1-20のランダムな値を作成
function createRandom() {
    let random = Math.floor(Math.random() * 20);
    return random;
}


// 画像API検索用のURLを作成
function createURL(value) {
    const API_KEY = '25115828-bd0d7190dcba39444db66a4f6';
    const baseUrl = 'https://pixabay.com/api/?key=' + API_KEY;
    let keyword = '&q=' + encodeURIComponent(value);
    const option = '&orientation=horizontal&per_page=20&image_type=photo&previewWidth=150';
    let URL = baseUrl + keyword + option;

    return URL;
}

// 画像作成のスクリプト
function createImage(json) {
    let result = document.getElementById('eto-image');

    // 検索結果が0以上の時
    if (json.totalHits > 0) {

        // ランダムな画像を出力
        let random = createRandom();
        let value = json.hits[random];

        let img = document.createElement('img');
        let a = document.createElement('a');

        a.href = value.pageURL;  //ダウンロード用のURL
        a.target = '_blank';
        img.src = value.previewURL;  //プレビュー用のURL

        a.appendChild(img);
        result.appendChild(a);  //divタグ内に画像を配置
    }

    else {
        alert('該当する写真がありません');
    }
}


// 今年の干支からJSONデータを取得
let eto = getEto();

fetch(createURL(eto))
    .then(function (data) {
        return data.json();
    })

    .then(function (json) {
        createImage(json);
    })