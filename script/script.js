 /* =====================  toggle icon navbar  ====================== */

 let menuIcon = document.querySelector("#menu-icon");
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }

/* =====================  scroll sections active link  ====================== */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = ()=> {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height ) {
            navLinks.forEach(link => {
                link.classList.remove("active")
                document.querySelector("header nav a[href*=" +id+"]").classList.add("active");
            });
        }
    });

    /* =====================  sticky navbar  ====================== */

    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

     /* ================  remove toggle icon navbar  and when click nav link (scroll) ================= */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* ===============  scroll reveal ================ */

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay: 200
})

ScrollReveal().reveal(".home-content, .heading",{ origin : 'top'})
ScrollReveal().reveal(".home-img, .services-container , .project-box, .contact form ",{ origin : 'bottom'})
ScrollReveal().reveal(".home-content h1, .about-img",{ origin : 'left'})
ScrollReveal().reveal(".home-content p, .about-content",{ origin : 'right'})


/* ===============  typed js  ================ */

const typed = new Typed (".multiple-text", {
    strings : ["Full Stack Developer","Blogger", "Tech Enthusiast"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

/* ===============  typed js  ================ */

function SendMail(){
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let body = name+", "+number+", "+email+" -->  "+message;

    window.location.href = "mailto:sanjeetkumar@engineer.com?subject="+subject+"&body="+body;
}
