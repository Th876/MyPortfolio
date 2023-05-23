// Linked Icon text appear
let iconLinkedIn = document.querySelector(".icon-linkedin");
let hoverLinkedIn = document.createElement('div');
hoverLinkedIn.textContent = "LinkedIn";
hoverLinkedIn.classList.add("textLinkedIn");
hoverLinkedIn.style.backgroundColor = "var(--lavender)";
hoverLinkedIn.style.color = "var(--white)";
hoverLinkedIn.style.padding = "5px 15px";
hoverLinkedIn.style.borderRadius = "25px";
hoverLinkedIn.style.boxShadow = " 0 10px 10px rgba(0,0,0,0.1)";
hoverLinkedIn.style.marginTop= "-110px";
hoverLinkedIn.style.marginLeft= "-20px";
hoverLinkedIn.style.opacity = "0";
hoverLinkedIn.style.cursor = "pointer";
iconLinkedIn.appendChild(hoverLinkedIn);

iconLinkedIn.addEventListener("mouseover", (e) => {
    hoverLinkedIn.style.opacity = "1";
})

iconLinkedIn.addEventListener("mouseleave", (e) => {
    hoverLinkedIn.style.opacity = "0";
})

// console.log(hoverLinkedIn);

// Email Icon text appear
let iconEmail = document.querySelector(".icon-email");
let hoverEmail = document.createElement('div');
hoverEmail.textContent = "Email";
hoverEmail.classList.add("textEmail");
hoverEmail.style.backgroundColor = "var(--lavender)";
hoverEmail.style.color = "var(--white)";
hoverEmail.style.padding = "5px 15px";
hoverEmail.style.borderRadius = "25px";
hoverEmail.style.boxShadow = " 0 10px 10px rgba(0,0,0,0.1)";
hoverEmail.style.marginTop= "-100px";
// hoverEmail.style.paddingLeft= "-30px";
hoverEmail.style.opacity = "0";
hoverEmail.style.cursor = "pointer";
iconEmail.appendChild(hoverEmail);


iconEmail.addEventListener("mouseover", (e) => {
    hoverEmail.style.opacity = "1";
})

iconEmail.addEventListener("mouseleave", (e) => {
    hoverEmail.style.opacity = "0";
})

// console.log(hoverEmail);


// GitHub Icon text appear
let iconGitHub = document.querySelector(".icon-github");
let hoverGitHub = document.createElement('div');
hoverGitHub.textContent = "GitHub";
hoverGitHub.classList.add("textGitHub");
hoverGitHub.style.backgroundColor = "var(--lavender)";
hoverGitHub.style.color = "var(--white)";
hoverGitHub.style.padding = "5px 15px";
hoverGitHub.style.borderRadius = "25px";
hoverGitHub.style.boxShadow = " 0 10px 10px rgba(0,0,0,0.1)";
hoverGitHub.style.marginTop= "-100px";
hoverGitHub.style.marginLeft= "-12px";
hoverGitHub.style.opacity = "0";
hoverGitHub.style.cursor = "pointer";
iconGitHub.appendChild(hoverGitHub);


iconGitHub.addEventListener("mouseover", (e) => {
    hoverGitHub.style.opacity = "1";
})

iconGitHub.addEventListener("mouseleave", (e) => {
    hoverGitHub.style.opacity = "0";
})

// console.log(hoverGitHub);
