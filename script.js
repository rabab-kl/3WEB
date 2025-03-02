document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome To MoviesOcean!");

    document.querySelector("[data-bs-target='#registerModal']").addEventListener("click", function() {
        var loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        if (loginModal) loginModal.hide();
    });

    document.querySelector("[data-bs-target='#loginModal']").addEventListener("click", function() {
        var registerModal = bootstrap.Modal.getInstance(document.getElementById("registerModal"));
        if (registerModal) registerModal.hide();
    });

    const movieCards = document.querySelectorAll(".movie-card");
    movieCards.forEach(card => {
        card.addEventListener("click", function() {
            this.classList.toggle("flipped");
        });
    });

    const socialBar = document.querySelector(".social-bar");


    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            socialBar.classList.add("visible");
        } else {
            socialBar.classList.remove("visible");
        }
    });
});


const seeMoreBtn = document.getElementById("see-more-btn");
const extraMovies = document.querySelector(".extra-movies");

if (seeMoreBtn && extraMovies) {
    seeMoreBtn.addEventListener("click", function() {
        if (extraMovies.style.display === "none") {
            extraMovies.style.display = "flex";
            seeMoreBtn.textContent = "See Less";
        } else {
            extraMovies.style.display = "none";
            seeMoreBtn.textContent = "See More";
        }
    });
}
let age = prompt("Please enter your age to access the site :");

/* l'age et acces */

if (age === null || age.trim() === "" || isNaN(age)) {
    alert("Veuillez entrer un âge valide.");
    location.reload();
} else {
    age = parseInt(age);

    if (age >= 18) {
        alert("WELCOME TO MOVIESOCEAN");
    } else {
        alert("Sorry, you must be at least 18 years old to access this site. You will be redirected to IMDB.");
        window.location.href = "https://www.imdb.com/";
    }
}

/* genre de film */

const filterButtons = document.querySelectorAll(".filter-btn");
const movies = document.querySelectorAll(".movie-item");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        const genre = this.getAttribute("data-genre");

        movies.forEach(movie => {
            if (genre === "all" || movie.getAttribute("data-genre") === genre) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
    });
});

/* le footer */

const footer = document.querySelector("footer");


const footerButton = document.createElement("button");
const buttonText = document.createTextNode("Back to Top");
footerButton.appendChild(buttonText);

footerButton.classList.add("footer-btn");
footerButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

footer.appendChild(footerButton);

window.addEventListener("scroll", function() {
    const footerButton = document.querySelector(".footer-btn");

    if (window.scrollY > 200) {
        footerButton.style.display = "block";
    } else {
        footerButton.style.display = "none";
    }
});

/* slide de shop movies */

const slider = document.querySelector(".movie-slider");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const scrollAmount = 220;

leftBtn.addEventListener("click", function() {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

rightBtn.addEventListener("click", function() {
    slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});