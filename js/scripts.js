// Movies Business Logic
function Movies() {
    this.tickets = {};
    this.currentId = 0;
}

Movies.prototype.addTicket = function (ticket) {
    ticket.id = this.assingId();
    this.tickets[ticket.id] = ticket;
};

Movies.prototype.assingId = function () {
    this.currentId += 1;
    return this.currentId;
};

//Ticket Business logic
function Ticket(name, price) {
    this.name = name;
    this.price = price;
}

Ticket.prototype.agePriceDis = function (userAge) {
    if (userAge >= 65 || userAge <= 12) {
        this.price = this.price * .85;
    }
    return this.price.toFixed(2);
};

Ticket.prototype.timePriceDis = function (matinee) {
    if (matinee === "0") {
        this.price = this.price * 0.85;
    }
    return this.price.toFixed(2);
};

//UI logic

let movieList = new Movies();
let movie1 = new Ticket("superstorm", 40);
let movie2 = new Ticket("salamnewyork", 35);

movieList.addTicket(movie1);
movieList.addTicket(movie2);


function movieFormHandler(e) {
    e.preventDefault();

    const selectedMovie = document.querySelector('input[name="movie"]:checked');
    if (!selectedMovie) {
        console.error("Please select a movie");
        return;
    }


    const movieName = selectedMovie.value;
    const timeofday = document.getElementById("timeofday").value;
    const userAge = parseFloat(document.getElementById("age").value);
    const result = document.getElementById("finalPrice");

    const ticket = Object.values(movieList.tickets).find(ticket => ticket.name === movieName.replace(/\s+/g, '').toLowerCase());

    // console.log("MovieList", movieList)
    // console.log("Ticket", ticket)
    // console.log("Name", movieName.replace(/\s+/g, '').toLowerCase())

    // Check if the ticket object exists
    // if (!ticket) {
    //     console.error("Ticket not found for the selected movie");
    //     result.setAttribute("hidden", true);
    //     return;
    // }

    const isMatinee = timeofday === "10:45" || timeofday === "12:30";

    let finalPrice = parseFloat(ticket.price);
    finalPrice = parseFloat(ticket.timePriceDis(isMatinee ? "0" : "1"));
    finalPrice = parseFloat(ticket.agePriceDis(userAge));

    // console.log("finalPrice", finalPrice)

    //Displaying the results
    result.classList.remove("hidden");
    result.innerHTML = `Movie name: ${movieName}<br>Time: ${timeofday}<br>Age: ${userAge}<br>Discount ${finalPrice}`;
}

window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", movieFormHandler);
});

















































// function Movie(title, price) {
//     this.title = title;
//     this.price = price;
// }

// function Time(time) {
//     this.time = time;
// }

// Time.prototype.discount = function () {
//     if (this.time === "morning") {
//         return 0.9;
//     } else {
//         return 1;
//     }
// };

// function Age(age) {
//     this.age = age;
// }

// Age.prototype.discount = function () {
//     if (this.age >= 7 && this.age <= 12) {
//         return 0.8;
//     } else {
//         return 1;
//     }
// };

// const marvel = new Movie("The Marvels", 12.75);
// const minions = new Movie("The Minions", 10.95);
// const notebook = new Movie("Notebook", 8.50);

// const morning = new Time("9:00", 10);
// const afternoon = new Time("4:30", 0);
// const evening = new Time("8:00", 0);

// const kids = new Age(10);
// const senior = new Age(70);

// function getMovie() {
//     const movies = document.querySelectorAll('input[type="radio"]');
//     let selectedMovie;
//     for (const movie of movies) {
//         if (movie.checked) {
//             selectedMovie = movie.value;
//             break;
//         }
//     }
//     return selectedMovie;
// }

// function getTime() {
//     const times = document.getElementById("time")
//     let selectedOption = times.options[times.selectedIndex];
//     if (selectedOption) {
//         return selectedOption.value;
//     } else {
//         return null;
//     }
// }

// function getAge() {
//     const ages = document.getElementById("age").value;
//     return ages;
// }

// function getNumberOfTicket() {
//     const ticket = document.getElementById("ticket").value;
//     return ticket;
// }

// function Ticket(movie, time, age, num) {
//     this.movie = movie;
//     this.time = time;
//     this.age = age;
//     this.num = num;
// }

// Ticket.prototype.getPrice = function () {
//     const timeDiscount = (100 - this.time.discount) / 100;
//     const ageDiscount = (100 - this.age.discount) / 100;

//     return this.movie.price * timeDiscount * ageDiscount * this.num;
// };

// function getInfo() {
//     const movie = getMovie();
//     const time = getTime();
//     const age = getAge();
//     const num = getNumberOfTicket();

//     const ticketInfo = new Ticket(movie, time, age, num);
//     ticketInfo.getPrice();
// }

// //UI logic
// let movie = new Movie();
// let time = new Time();
// let age = new Age();
// let ticket = new Ticket();

// let result = getInfo(movie, time, age, ticket);



// function listContact() {

// }

// function formHandler() {
//     const form = document.querySelector("form");

