function hi(){
    const div  = document.createElement('h1')
    div.innerHTML = 'Hello, it is great to see you';
   const el = document.querySelector('.app');
   el.appendChild(div)
}
document.querySelector('button').addEventListener('submit', hi())
