let listelelemt = document.getElementById('list');
listelelemt.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.matches('li')) {
        if (e.target.innerText === 'Java') {
            e.target.style.backgroundColor = 'red';
        } else {
          e.target.style.backgroundColor = 'yellow';
        }
    }
})

function addLang() {
    let newElement = document.createElement('li');
    newElement.textContent = 'Ruby';
    listelelemt.appendChild(newElement);
}