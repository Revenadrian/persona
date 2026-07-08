// =======================================
// WEBSITE TITLE
// =======================================

document.title = portfolio.pageTitle;

// =======================================
// HERO
// =======================================

document.getElementById("logoName").textContent = portfolio.name;

document.getElementById("name").textContent = portfolio.name;

document.getElementById("title").textContent = portfolio.title;

document.getElementById("school").textContent = portfolio.school;

document.getElementById("motto").textContent = portfolio.motto;

document.getElementById("description").textContent = portfolio.description;

// =======================================
// PROFILE IMAGE
// =======================================

document.getElementById("profileImage").src = portfolio.profileImage;

document.getElementById("profileImage").alt = portfolio.name;

// =======================================
// HERO BACKGROUND
// =======================================

const hero = document.getElementById("hero");

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
url(${portfolio.heroImage})`;

hero.style.backgroundSize = "cover";

hero.style.backgroundPosition = "center";

// =======================================
// FOOTER
// =======================================

document.getElementById("footerName").innerHTML =
`© ${new Date().getFullYear()} ${portfolio.name}. All Rights Reserved.`;

// =======================================
// SOCIAL MEDIA
// =======================================

const social = portfolio.social;

document.getElementById("instagram").href = social.instagram;

document.getElementById("github").href = social.github;

document.getElementById("linkedin").href = social.linkedin;

document.getElementById("tiktok").href = social.tiktok;

document.getElementById("youtube").href = social.youtube;

document.getElementById("email").href = social.email;

// =======================================
// OPEN SOCIAL IN NEW TAB
// =======================================

[
"instagram",
"github",
"linkedin",
"tiktok",
"youtube"

].forEach(id=>{

document.getElementById(id).target="_blank";

});

// =======================================
// SCROLL ANIMATION
// =======================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

// =======================================
// SMOOTH BUTTON EFFECT
// =======================================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});
