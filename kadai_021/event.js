// DOM要素とDOM操作

const jsBtn = document.getElementById('btn');
jsBtn.addEventListener('click', () => {
    const jsText = document.getElementById('text');
    
// 2秒後に切り替わり
    setTimeout(() => {
        jsText.textContent = 'ボタンをクリックしました'
    },2000);
});



