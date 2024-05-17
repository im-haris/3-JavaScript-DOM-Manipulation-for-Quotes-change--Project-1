
const text = document.querySelector(".quote");
const person = document.querySelector(".Author");
const btn = document.querySelector("#new_quote");

const quotes = [{
    text:  "“Folks are usually about as happy as they make their minds up to be.”",
    person: "― Abraham Lincoln"
},

{
    text:  "“Whatever you are, be a good one.”",
    person: "― Abraham Lincoln"
},

{
    text:  "“Do I not destroy my enemies when I make them my friends?”",
    person: "― Abraham Lincoln"
},

{
    text:  "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves",
    person: "― Abraham Lincoln"
},

];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);

    text.innerText = quotes[random].text;
    person.innerText = quotes[random].person;
})
