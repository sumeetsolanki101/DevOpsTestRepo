/* =========================================
ÉLITE MOTORS
Main JavaScript
========================================= */

/* =========================================
CAR DATA
========================================= */

const cars = [

```
{
    name: "Aurelia GT",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85",
    description:
        "A pure expression of performance and handcrafted Italian-inspired luxury. Designed for drivers who demand an extraordinary connection with the road.",
    power: "620",
    acceleration: "3.1s",
    speed: "325",
    features: [
        "4.0L V8 Twin-Turbo Engine",
        "Carbon Fibre Performance Package",
        "Adaptive Air Suspension",
        "Bespoke Nappa Leather Interior",
        "360° Performance Camera",
        "Premium 3D Surround Sound"
    ]
},

{
    name: "Velaris X",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    description:
        "Commanding presence meets effortless performance in our flagship luxury SUV. Created for those who want versatility without sacrificing prestige.",
    power: "550",
    acceleration: "4.2s",
    speed: "285",
    features: [
        "4.4L V8 Twin-Turbo Engine",
        "Intelligent All-Wheel Drive",
        "Executive Rear Seating",
        "Panoramic Glass Roof",
        "Adaptive Terrain Management",
        "Hands-Free Driver Assistance"
    ]
},

{
    name: "Monarch S",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    description:
        "Sophisticated executive luxury engineered for effortless long-distance performance. Every detail has been designed around absolute comfort.",
    power: "510",
    acceleration: "4.5s",
    speed: "275",
    features: [
        "3.8L Twin-Turbo V6",
        "Executive Rear Lounge",
        "Active Noise Cancellation",
        "Massage Front & Rear Seats",
        "Intelligent Highway Assist",
        "Bowers & Wilkins Audio"
    ]
},

{
    name: "Eon E",
    category: "Electric",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85",
    description:
        "Silent power, intelligent technology and a new definition of sustainable luxury. Performance has never felt this effortless.",
    power: "680",
    acceleration: "2.9s",
    speed: "620",
    features: [
        "Dual Motor Electric Powertrain",
        "620 KM Estimated Range",
        "Ultra-Fast Charging",
        "AI Driving Assistant",
        "Minimalist Executive Interior",
        "Immersive Digital Cockpit"
    ]
}
```

];

/* =========================================
NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

```
if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
} else {
    navbar.classList.remove("scrolled");
}
```

});

/* =========================================
CAR FILTER
========================================= */

const filters = document.querySelectorAll(".filter");
const carCards = document.querySelectorAll(".car-card");

filters.forEach(filter => {

```
filter.addEventListener("click", () => {

    filters.forEach(btn => btn.classList.remove("active"));

    filter.classList.add("active");

    const selectedCategory = filter.dataset.filter;

    carCards.forEach(card => {

        const cardCategory = card.dataset.category;

        if (
            selectedCategory === "all" ||
            cardCategory === selectedCategory
        ) {

            card.style.display = "block";

            card.style.animation = "none";

            requestAnimationFrame(() => {
                card.style.animation = "cardIn 0.5s ease";
            });

        } else {

            card.style.display = "none";

        }

    });

});
```

});

/* =========================================
CAR DETAILS MODAL
========================================= */

const carModal = document.getElementById("carModal");

function showCar(index) {

```
const car = cars[index];

document.getElementById("modalCarImage").src = car.image;
document.getElementById("modalCarImage").alt = car.name;

document.getElementById("modalCategory").textContent =
    car.category.toUpperCase();

document.getElementById("modalCarName").textContent =
    car.name;

document.getElementById("modalDescription").textContent =
    car.description;

document.getElementById("modalPower").textContent =
    car.power;

document.getElementById("modalAcceleration").textContent =
    car.acceleration;

document.getElementById("modalSpeed").textContent =
    car.speed;

const featuresList =
    document.getElementById("modalFeatures");

featuresList.innerHTML = "";

car.features.forEach(feature => {

    const li = document.createElement("li");

    li.textContent = feature;

    featuresList.appendChild(li);

});

carModal.classList.add("active");

document.body.classList.add("modal-open");
```

}

function closeCarModal() {

```
carModal.classList.remove("active");

document.body.classList.remove("modal-open");
```

}

/* =========================================
TEST DRIVE MODAL
========================================= */

const driveModal = document.getElementById("driveModal");

function openTestDrive() {

```
driveModal.classList.add("active");

document.body.classList.add("modal-open");
```

}

function closeTestDrive() {

```
driveModal.classList.remove("active");

document.body.classList.remove("modal-open");
```

}

/* =========================================
TEST DRIVE FORM
========================================= */

const driveForm = document.getElementById("driveForm");
const successMessage = document.getElementById("successMessage");

driveForm.addEventListener("submit", function(event) {

```
event.preventDefault();

driveForm.style.display = "none";

successMessage.classList.add("active");
```

});

/* =========================================
VIDEO MODAL
========================================= */

const videoModal = document.getElementById("videoModal");

function openVideo() {

```
videoModal.classList.add("active");

document.body.classList.add("modal-open");
```

}

function closeVideo() {

```
videoModal.classList.remove("active");

document.body.classList.remove("modal-open");
```

}

/* =========================================
CLOSE MODALS WITH ESCAPE
========================================= */

document.addEventListener("keydown", event => {

```
if (event.key === "Escape") {

    closeCarModal();
    closeTestDrive();
    closeVideo();

}
```

});

/* =========================================
MOBILE NAVIGATION
========================================= */

const mobileMenu = document.getElementById("mobileMenu");

let mobileNavOpen = false;

mobileMenu.addEventListener("click", () => {

```
mobileNavOpen = !mobileNavOpen;

let mobileNav =
    document.querySelector(".mobile-nav");

if (!mobileNav) {

    mobileNav = document.createElement("div");

    mobileNav.className = "mobile-nav";

    mobileNav.innerHTML = `
        <a href="#home">Home</a>
        <a href="#collection">Collection</a>
        <a href="#features">Features</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
    `;

    document.body.appendChild(mobileNav);

}

mobileNav.style.display =
    mobileNavOpen ? "block" : "none";
```

});

/* =========================================
MOBILE NAV CLOSE AFTER CLICK
========================================= */

document.addEventListener("click", event => {

```
if (
    event.target.closest(".mobile-nav a")
) {

    const mobileNav =
        document.querySelector(".mobile-nav");

    if (mobileNav) {
        mobileNav.style.display = "none";
    }

    mobileNavOpen = false;

}
```

});

/* =========================================
SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
".feature-item, .tech-card, .car-card"
);

const revealObserver =
new IntersectionObserver(
entries => {

```
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);
```

revealElements.forEach(element => {

```
element.style.opacity = "0";
element.style.transform = "translateY(25px)";
element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

revealObserver.observe(element);
```

});

/* =========================================
IMAGE PARALLAX
========================================= */

const heroCar = document.querySelector(".hero-car");

window.addEventListener("scroll", () => {

```
if (!heroCar) return;

const scrollPosition = window.scrollY;

if (scrollPosition < window.innerHeight) {

    heroCar.style.transform =
        `translateY(${scrollPosition * 0.12}px)`;

}
```

});

/* =========================================
SET MINIMUM DATE FOR TEST DRIVE
========================================= */

const dateInput =
document.querySelector('input[type="date"]');

if (dateInput) {

```
const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;
```

}

/* =========================================
RESET FORM WHEN MODAL REOPENS
========================================= */

const originalOpenTestDrive = openTestDrive;

window.openTestDrive = function() {

```
driveForm.reset();

driveForm.style.display = "block";

successMessage.classList.remove("active");

originalOpenTestDrive();
```

};

/* =========================================
BUTTON MICRO INTERACTION
========================================= */

document.querySelectorAll(".btn").forEach(button => {

```
button.addEventListener("mousedown", () => {

    button.style.transform = "scale(0.98)";

});

button.addEventListener("mouseup", () => {

    button.style.transform = "";

});
```

});

/* =========================================
CONSOLE BRAND MESSAGE
========================================= */

console.log(
"%cÉLITE MOTORS",
"font-size: 24px; font-weight: bold;"
);

console.log(
"Luxury. Performance. Distinction."
);
