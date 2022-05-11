const reviews = [{
    id: 1,
    name: 'brook bryan',
    title: 'administrative assistant',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/brook.jpg',
},
{
    id: 2,
    name: 'zac southwell',
    title: 'real estate investor',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/zac.jpg',
},
{
    id: 3,
    name: 'jared bryan',
    title: 'web developer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/jared.jpg',
},
{
    id: 4,
    name: 'Tony Rojas',
    title: 'insurance salesman',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/tony.jpg'
}
]

const image = document.querySelector('img');
const person = document.querySelector('h4.name');
const title = document.querySelector('.title');
const description = document.querySelector('p');

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const surpriseMe = document.querySelector('.random');

let index = 0;

window.addEventListener('DOMContentLoaded', () =>{
    showPerson(index);
});

// right button

rightBtn.addEventListener('click', ()=>{
    index++;
    if(index > reviews.length -1){
        index = 0;
    }
    showPerson(index);
})

// left button

leftBtn.addEventListener('click', ()=>{
    index--;
    if(index < 0){
        index = reviews.length -1;
    }
    showPerson(index);
})

//surprise me button

surpriseMe.addEventListener('click', ()=>{
    index = Math.round(Math.random()*(reviews.length-1));
    showPerson(index);
    console.log(index);
})

function showPerson(number){
    const item = reviews[number];
    person.textContent = item.name;
    image.src = item.image;
    title.textContent = item.title;
    description.textContent = item.content;

}