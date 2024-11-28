const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました。';
  }, 2000);
});

// ボタンをクリックしたら2秒後に文章を書き換える