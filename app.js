(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();      



//animation

var tl = gsap.timeline();
tl.from(".letter", { duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.15 });
tl.to(".letter", { duration: 1, rotation: 360, stagger: 0.15 }, "-=3.5");

$(".letter").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
    $(this).removeClass("rubberBand");
});

$(".letter").hover(function () {
    $(this).addClass("rubberBand");
});


if (!window.matchMedia("(max-width: 1500px)").matches) {
    gsap.from(".sal", {
        scrollTrigger: {
            trigger: ".sal",
            start: "top bottom"
        },
        opacity: 0,
        x: -200,
        duration: 1,
        ease: "power3",
        stagger: 0.25
    });

    gsap.from(".sar", {
        scrollTrigger: {
            trigger: ".sar",
            start: "top bottom"
        },
        opacity: 0,
        x: 200,
        duration: 1,
        ease: "power3",
        stagger: 0.25
    });
}

gsap.from(".skill-box", {
    scrollTrigger: {
        trigger: ".skill-box",
        start: "top bottom"
    },
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power3",
    stagger: 0.25
});