// 読み込み時
var isPen;


// header

// 背景画像
var selectFile = document.getElementById('selectFile'); // 画像の選択
var cvs = document.getElementById('canvas'), textarea = null; // canvas
var ctx = cvs.getContext('2d'); // 描写宣言
selectFile.addEventListener("change", function(evt){
    var file = evt.target.files;
    var reader = new FileReader();
    
    //dataURL形式でファイルを読み込む
    reader.readAsDataURL(file[0]);
    
    //ファイルの読込が終了した時の処理
    reader.onload = function(){
      var dataUrl = reader.result;
      var img = new Image();
      img.src = dataUrl;
      img.onload = function(){
        ctx.drawImage(img, 0, 0);
      }

    }
},false);

// タイトルを入れる
var title = document.getElementById('title-text'); // タイトル要素の取得
var title_btn = document.getElementById('title-btn'); // タイトルボタン要素の取得
// ボタンがクリックされた時に呼び出される
title_btn.addEventListener('click', function(e){
    // テキストエリアに文字がない場合処理を終了する
    if(!title){
       return; 
    }

    if(!text){
        // textareaの生成
        var text = document.createElement('text');

        // textにtitleを設定する

        // textをcanvasに描画する
    }

});


// タイトル

// 描画する




// main

