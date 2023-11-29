function Movie(title, price) {
    this.title = title;
    this.price = price;
}

function Time(time) {
    this.time = time;
}

Time.prototype.discount = function () {
    if (this.time === "morning") {
        return 0.9;
    } else {
        return 1;
    }
};

function Age(age) {
    this.age = age;
}

Age.prototype.discount = function () {
    if (this.age >= 7 && this.age <= 12) {
        return 0.8;
    } else {
        return 1;
    }
};

const marvel = new Movie("The Marvels", 12.75);
const minions = new Movie("The Minions", 10.95);
const notebook = new Movie("Notebook", 8.50);

const morning = new Time("9:00", 10);
const afternoon = new Time("4:30", 0);
const evening = new Time("8:00", 0);

const kids = new Age(10);
const senior = new Age(70);

function getMovie() {
    const movies = document.querySelectorAll('input[type="radio"]');
    let selectedMovie;
    for (const movie of movies) {
        if (movie.checked) {
            selectedMovie = movie.value;
            break;
        }
    }
    return selectedMovie;
}

function getTime() {
    const times = document.getElementById("time")
    let selectedOption = times.options[times.selectedIndex];
    if (selectedOption) {
        return selectedOption.value;
    } else {
        return null;
    }
}

function getAge() {
    const ages = document.getElementById("age").value;
    return ages;
}

function getNumberOfTicket() {
    const ticket = document.getElementById("ticket").value;
    return ticket;
}

function Ticket(movie, time, age, num) {
    this.movie = movie;
    this.time = time;
    this.age = age;
    this.num = num;
}

Ticket.prototype.getPrice = function () {
    const timeDiscount = (100 - this.time.discount) / 100;
    const ageDiscount = (100 - this.age.discount) / 100;

    return this.movie.price * timeDiscount * ageDiscount * this.num;
};

function getInfo() {
    const movie = getMovie();
    const time = getTime();
    const age = getAge();
    const num = getNumberOfTicket();

    const ticketInfo = new Ticket(movie, time, age, num);
    ticketInfo.getPrice();
}