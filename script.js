console.log("Hello");

const buttonTest = document.getElementById("helloBtn");
const helloText = document.getElementById("helloText");
const counterElement = document.getElementById("counter");
const testProfileElement = document.getElementById("testProfileElement");
const displayprofilButton = document.getElementById("displayprofilButton");
const skillBadges = document.querySelectorAll(".badges");
const infoBox = document.querySelector(".info-box");
const selectedSkill = document.getElementById("selectedSkill");

let count = 0;
    
function addOne(nbr) {
  count = count + nbr;
  counterElement.textContent = count;
}

buttonTest.addEventListener("click", function () {
  console.log("You clicked me !!");
  helloText.textContent = "Hello, World!";

    counterElement.textContent = count;

    addOne(2);
});

if (displayprofilButton) {
    displayprofilButton.addEventListener("click", function() {
        testProfileElement.innerHTML = `
        <img src="images/skinner.jpeg" width="200">
        <p>White House</p>
    `;
    });
}

skillBadges.forEach(function (badge) {
    badge.addEventListener("click", function() {
        console.log(`You clicked on ${badge.textContent}`);
    });
});


skillBadges.forEach((badgeBlabla) => {
    badgeBlabla.addEventListener("click", function() {;
        selectedSkill.textContent = "Selected skill: " + badgeBlabla.textContent;      
    });
});

skillBadges.forEach(function (badgesBlaBla) {
    badgesBlaBla.addEventListener("click", function() {
            badgesBlaBla.classList.toggle("bdg-selected");
            selectedSkill.textContent = "Selected skill: " + badgesBlaBla.textContent;
        });
    });


skillBadges.forEach(function (badgesBlaBla) {
    badgesBlaBla.addEventListener("click", function() {
            const isSelected = badgesBlaBla.classList.contains("bdg-selected"); 

            skillBadges.forEach(function (totobadge) {
                console.log("Removing bdg-selected from", totobadge.textContent);
                totobadge.classList.remove("bdg-selected");
            });

            if (!isSelected) {
                selectedSkill.textContent = "Selected skill: None";
            } else {
                badgesBlaBla.classList.toggle("bdg-selected");
                selectedSkill.textContent = "Selected skill: " + badgesBlaBla.textContent;
            }

        });
});

const profiles = [
    {
        name: "Sous-Chef",
        description: "Apprenti cuisinier devenu patron et serveur de restaurant.",
        image: "images/skinner.jpeg"
    },
    {
        name: "Chef",
        description: "Chef cuisinier renommé, connu pour sa cuisine innovante.",
        image: "images/Auguste_Gusteau.webp"
    },
];

const profilButton = document.getElementById("profilButton");
const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");
const profilElement = document.getElementById("heroProfileImage");

let currentProfileIndex = -1;

profilButton.addEventListener("click", function() {
 
    currentProfileIndex = currentProfileIndex + 1;

    if (currentProfileIndex >= profiles.length) {
        currentProfileIndex = 0;
    }

    heroTitle.textContent = profiles[currentProfileIndex].name;
    heroDescription.textContent = profiles[currentProfileIndex].description;
    profilElement.src = profiles[currentProfileIndex].image;
});


const sendEmailButton = document.getElementById("sendEmailButton");
const subjectInput = document.getElementById("subjectInputId");
const messageInput = document.getElementById("messageInputId");
const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

sendEmailButton.addEventListener("click", function() {
    const subject = subjectInput.value;
    const message = messageInput.value;
    console.log("Subject:", subject);
    console.log("Message:", message);

    const myEmail = "your-email@example.com";
    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
});