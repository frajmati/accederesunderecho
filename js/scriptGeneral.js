const menuIcon = document.querySelector("#menuIcon");
const navMobile = document.querySelector(".nav__mobile");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMobile.classList.toggle("active");
    document.body.classList.toggle("active");
})




const navMobilelinks = document.querySelectorAll(".nav__li--a--mobile");

navMobilelinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        navMobile.classList.toggle("active");
        document.body.classList.toggle("active");
    })
})




//ANIMACIONES

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
        else {
            entry.target.classList.remove("show");
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


//SCROLL TO TOP

const btn = document.querySelector(".btn__scrollToTop");

document.addEventListener("scroll",() => {
    let scrollY = (window.scrollY);

    if (scrollY > 100) {
        btn.style.opacity = 1;
    }
    else {
        btn.style.opacity = 0;
    }
})

btn.addEventListener("click", () => {
    window.scroll(0,0);
})