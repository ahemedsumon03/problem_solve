const parent = document.getElementById('parentDiv');
const innerform = document.getElementById('formInner');
const eventbutton = document.querySelector('button');

parent.addEventListener('click', eventPropagation);
innerform.addEventListener('click', eventPropagation,true);
eventbutton.addEventListener('click', eventPropagation);


function eventPropagation(event) {
    event.preventDefault();
    console.log(this.tagName);
}