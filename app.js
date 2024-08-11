const reviews = [
    {
        id : 1,
        name : "susan smith",
        job : "web developer",
        img : "person-2.jpg",
        text : "어쩌구 저쩌구",
    },
    {
        id : 2,
        name : "anna johnson",
        job : "web designer",
        img : "person-3.jpg",
        text : "어쩌구 저쩌구",
    },
    {
        id : 3,
        name : "peter jones",
        job : "intern",
        img : "person-4.jpg",
        text : "어쩌구 저쩌구",
    },
    {
        id : 4,
        name  : "bill anderson",
        job : "the boss",
        image : "person-5.jpg",
        text : "어쩌구 저쩌구"
    }

];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info  = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//set startimg item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson()
});

//show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        current = 0;
    }
    showPerson();
});

//show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});

