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

// Download button
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var downloadBtn = document.querySelector('.main-btn');
    
    // Add click event listener to the button
    downloadBtn.addEventListener('click', function() {
        // Path to your resume file
        var resumePath = 'MichalResume.pdf';
        
        // Create an anchor element
        var link = document.createElement('a');
        link.href = resumePath;
        link.download = 'MichalResume.pdf'; // specify the filename for the download
        
        // Append the anchor element to the document body
        document.body.appendChild(link);
        
        // Trigger the click event on the anchor element
        link.click();
        
        // Clean up: remove the anchor element from the document body
        document.body.removeChild(link);
    });
});

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