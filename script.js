const cb = document.getElementById('c-box');
function g() {
  cb.innerHTML = '';
  fetch('https://yesno.wtf/api')
  .then(res => res.json())
  .then(d => {
    const answer = document.createElement('h1');
    answer.style.fontSize = '48px';
    const img = document.createElement('img');

    answer.innerHTML = d.answer.toUpperCase();
    img.src = d.image;

    cb.append(answer, img)
  })
  
}