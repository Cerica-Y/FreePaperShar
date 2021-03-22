$(document).ready(function() {
  $('#jmap').jmap({
    // map図中のテキストエリア
    showInfobox: true,
    // サイズ
    width: '450px',
    height: '450px',
    // 図の装飾
    lineColor: '#bfbfbf',
    lineWidth: 1,
    backgroundRadius: '0.3rem',
    backgroundPadding: '1rem',
    prefectureLineColor: '#ffffff',
    prefectureBackgroundHoverColor: '#8adbe6',
    areas: [
      {code : 1, name: "北海道", color: "#2fcc49"},
      {code : 2, name: "青森", color: "#2fcc49"},
      {code : 3, name: "岩手", color: "#2fcc49"},
      {code : 4, name: "宮城", color: "#2fcc49"},
      {code : 5, name: "秋田", color: "#2fcc49"},
      {code : 6, name: "山形", color: "#2fcc49"},
      {code : 7, name: "福島", color: "#2fcc49"},
      {code : 8, name: "茨城", color: "#2f63cc"},
      {code : 9, name: "栃木", color: "#2f63cc"},
      {code : 10, name: "群馬", color: "#2f63cc"},
      {code : 11, name: "埼玉", color: "#2f63cc"},
      {code : 12, name: "千葉", color: "#2f63cc"},
      {code : 13, name: "東京", color: "#2f63cc"},
      {code : 14, name: "神奈川", color: "#2f63cc"},
      {code : 15, name: "新潟", color: "#982fcc"},
      {code : 16, name: "富山", color: "#982fcc"},
      {code : 17, name: "石川", color: "#982fcc"},
      {code : 18, name: "福井", color: "#982fcc"},
      {code : 19, name: "山梨", color: "#982fcc"},
      {code : 20, name: "長野", color: "#982fcc"},
      {code : 21, name: "岐阜", color: "#982fcc"},
      {code : 22, name: "静岡", color: "#982fcc"},
      {code : 23, name: "愛知", color: "#982fcc"},
      {code : 24, name: "三重", color: "#ccb22f"},
      {code : 25, name: "滋賀", color: "#ccb22f"},
      {code : 26, name: "京都", color: "#ccb22f"},
      {code : 27, name: "大阪", color: "#ccb22f"},
      {code : 28, name: "兵庫", color: "#ccb22f"},
      {code : 29, name: "奈良", color: "#ccb22f"},
      {code : 30, name: "和歌山", color: "#ccb22f"},
      {code : 31, name: "鳥取", color: "#cc2f98"},
      {code : 32, name: "島根", color: "#cc2f98"},
      {code : 33, name: "岡山", color: "#cc2f98"},
      {code : 34, name: "広島", color: "#cc2f98"},
      {code : 35, name: "山口", color: "#cc2f98"},
      {code : 36, name: "徳島", color: "#cc2f98"},
      {code : 37, name: "香川", color: "#cc2f98"},
      {code : 38, name: "愛媛", color: "#cc2f98"},
      {code : 39, name: "高知", color: "#cc2f98"},
      {code : 40, name: "福岡", color: "#cc492f"},
      {code : 41, name: "佐賀", color: "#cc492f"},
      {code : 42, name: "長崎", color: "#cc492f"},
      {code : 43, name: "熊本", color: "#cc492f"},
      {code : 44, name: "大分", color: "#cc492f"},
      {code : 45, name: "宮崎", color: "#cc492f"},
      {code : 46, name: "鹿児島", color: "#cc492f"},
      {code : 47, name: "沖縄", color: "#cc492f"}
      ],

      // 選択時に呼び出す
      onSelect: function(e, data) {
 
        //セレクト作成
        let op = document.createElement("option");
        // エリア８に対応する都道府県のみ表示
        var result = $.grep(data.area8, function (e) {
          return e[data.area8] == value;
         });
        console.log(result) ;

        document.getElementById("select-pref").appendChild(op);
      

          // 表示
          $('[name="select-pref"]').val(data.name);


        console.log(data.code+'(地図データ)');
        
        // 都道府県のフォーム生成

        $.getJSON('pref_city.json', function(json) {
          
          // const data = json[0]; 
          // console.log(data[0].pref);　//北海道が表示される
          

        });

        // 市区町村のフォーム生成
     
      }
    
  });

});
