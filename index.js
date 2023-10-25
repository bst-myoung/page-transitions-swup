import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup( {
    timeout: 100,
});


document.addEventListener('DOMContentLoaded', function () {    
    startPage ();    
	//新しいページは読み込み完了になる場合startPage()関数を呼び出す
    swup.hooks.on('content:replace', () => {
      startPage();    
    });  
});  
  

function startPage() {
// 一覧ページのリンク要素を取得
const gridChildren = document.querySelectorAll('.grid > a');
const colorList = ['purple', 'blue', 'yellow', 'white'];
const swupOverlay = document.querySelector('.swup-overlay');

gridChildren.forEach(child => {
	//　リンク要素でオブジェクトを生成
    const transitionLink = {
        element: child,
        classList: child.classList,
    };
    transitionLink.element.addEventListener('click', () => {        
        let bgColor = '';    
		//前の色をtransitionから消す
        colorList.forEach(color => {
            swupOverlay.classList.remove(color);
        });    
		//現在ページの該当色をtransitionに付ける
        colorList.forEach(color => {
            if (transitionLink.classList.contains(color)) {
                bgColor = color;
            }
        });    
        swupOverlay.classList.add(bgColor);
    });
});
}
