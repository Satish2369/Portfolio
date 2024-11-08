let name = document.querySelector("#Sm");
let light = document.querySelector("#follower");
let skillHeading = document.querySelector("#skill-heading");
let h1 = document.querySelector("#linkContainer h1");
let audio = document.querySelector(" #audio audio");
let toggle = document.querySelector("#Sound .music");

function loader() {
  tl = gsap.timeline();

  tl.from("#loader .box , #downer", {
    y: 180 + "%",
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
  });
  tl.to("#loader .box , #downer", {
    y: -180 + "%",
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
  });

  tl.to("#loader", {
    y: "-100%",
    display: "none",
    duration: 0.4,
    onComplete: function () {
      gsap.from(".Front", {
        x: "-120%",
        duration: 2,
        delay: 0.5,
        ease: "power1.out",
      });

      gsap.from(".Dev", {
        x: "120%",
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
      });
    },
  });
}

function smoothScrolling() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: "vertical",
    gestureDirection: "vertical",
    infinite: false,
    smoothTouch: false,
  });

  // Update the scroll position with each animation frame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function page1() {
  document.addEventListener("mousemove", function (event) {
    gsap.to(light, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.8,
      ease: "back.out",
    });
  });

  document.querySelector(".overlay").addEventListener("mousemove", function () {
    gsap.to(light, {
      backgroundColor: "#E85C0D",
      boxShadow: "0px 0px 0px #E85C0D",
      scale: 8,
      ease: "bounce.out",
    });
  });

  document
    .querySelector(".overlay")
    .addEventListener("mouseleave", function () {
      gsap.to(light, {
        backgroundColor: "#E85C0D",
        boxShadow: "0 0 15px #E85C0D,0 0 50px #E85C0D,",
        scale: 1,
        ease: "power1.out",
      });
    });

  document
    .querySelector(".overlay1")
    .addEventListener("mousemove", function () {
      gsap.to(light, {
        backgroundColor: "white",

        scale: 8,
        ease: "power1.out",
      });
    });

  document
    .querySelector(".overlay2")
    .addEventListener("mousemove", function () {
      gsap.to(light, {
        backgroundColor: "white",

        scale: 8,
        ease: "elastic.out",
      });
    });

  document
    .querySelector(".overlay1")
    .addEventListener("mouseleave", function () {
      gsap.to(light, {
        backgroundColor: "#E85C0D",
        boxShadow: "0px 0px 0px #E85C0D",
        scale: 1,
        ease: "power3.out",
      });
    });

  document
    .querySelector(".overlay2")
    .addEventListener("mouseleave", function () {
      gsap.to(light, {
        backgroundColor: "#E85C0D",
        boxShadow: "0px 0px 0px #E85C0D",
        scale: 1,
        ease: "power2.out",
      });
    });

 
}

function page2() {
  document.querySelectorAll(".intro").forEach(function (para) {
    let spannedText = para.textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");
    para.innerHTML = spannedText;
  });

  // Animate the letters on scroll
  gsap.to(".intro span", {
    scrollTrigger: {
      trigger: "#page2", // Section to trigger the animation
      start: "top 20%", // When to start the animation (80% from the top of the viewport)
      end: "center 40%", // When to end the animation
      scrub: true, // Smooth scrubbing effect
    },
    color: "white", // Start 50px below its final position
    stagger: 0.09, // Animate letters one after another with a small delay
    duration: 9,
    opacity: 1,
    delay: 3, // Animation duration for each letter
    ease: "power4.out", // Smooth easing
  });
}

function marquee() {
  document.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marquee", {
        transform: "translateX(-200%)",

        duration: 4,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marquee img", {
        rotate: "180",
      });
    } else {
      gsap.to(".marquee", {
        transform: "translateX(0%)",

        duration: 4,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marquee img", {
        rotate: "0",
      });
    }
  });
}

function page3() {
  gsap.from(".skill-heading h1", {
    y: "150",
    duration: 2,
    delay: 0.4,
    ease: "power1.out",

    scrollTrigger: {
      trigger: "#page3",
      start: "top 50%",
      end: "70% 60%",
      scrub: true,
      scroller: "body",
      // markers: true,
    },
  });

  document.querySelectorAll(".elem").forEach(function (elem) {
    let rotate = 0;
    let difference = 0;

    elem.addEventListener("mousemove", function (dets) {
      let diff = dets.clientY - elem.getBoundingClientRect().top;
      difference = dets.clientX - rotate;
      rotate = dets.clientX;

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, difference * 0.5),
      });

      gsap.to(elem.querySelector("h1"), {
        opacity: 1,
        color: "#E85C0D",
        filter: "blur(0px)",
        ease: Power3,
      });

      gsap.to(elem, {
        backgroundColor: "#161748",
        ease: Power3,
      });

      gsap.to(elem.querySelector(".orange"), {
        opacity: 1,
      });
    });

    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
      });
      gsap.to(elem.querySelector("h1"), {
        opacity: 1,
        color: "white",

        filter: "blur(5px)",
        ease: Power3,
      });

      gsap.to(elem, {
        backgroundColor: "#000",
        ease: Power1,
      });

      gsap.to(elem.querySelector(".orange"), {
        opacity: 0,
      });
    });
  });
}
function page4() {
  gsap.to("#page4", {
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#page4",
      start: "top top",
      end: "40% 50%",
      scrub: true,
      scroller: "body",
      // markers: true,
    },
  });

  // Animating projects heading
  gsap.from("#projects-heading", {
    x: "80%",
    duration: 3,
    delay: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4",
      start: "top top",
      end: "40% 50%",
      scrub: true,
      scroller: "body",
      // markers: true,
      pin: true,
    },
  });

  // Animating Food Mania project image
  gsap.from("#food-mania .project-image", {
    x: "-120%",
    duration: 3,
    delay: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4",
      start: "top top",
      end: "40% 50%",
      scrub: true,
      scroller: "body",
      // markers: true,
    },
  });

  // Animating Food Mania project details
  gsap.from("#food-mania .project-buttons,#food-mania .project-title", {
    x: "140%",
    duration: 3,
    delay: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4",
      start: "top top",
      end: "40% 50%",
      scrub: true,
      scroller: "body",
      // markers: true,
    },
  });

  // Animating Filmax project image
  gsap.from("#filmax .project-image", {
    x: "140%",
    duration: 4,
    delay: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#page4",
      start: "center center",
      end: "50% 30%",
      scrub: true,
      scroller: "body",
      // markers: true,
    },
  });

  // Animating Filmax project details
  gsap.from("#filmax .project-buttons ,#filmax .project-title ", {
    x: "-140%",
    duration: 3,
    delay: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4",
      start: "center center",
      end: "50% 30%",
      scrub: true,
      scroller: "body",
      // markers: true,
    },
  });
}


function page5() {
  gsap.to("#page4", {
    backgroundColor: "black",
    ease: "power1.out",

    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "top 30%",
      end: "center 60%",
      scrub: true,
      markers: false,
    },
  });
}

function sound() {
  let playing = false;
  toggle.addEventListener("click", function () {
    if (playing) {
      audio.pause();
      toggle.textContent = "Sound Off";
    } else {
      audio.play();
      toggle.textContent = "Sound On";
    }

    playing = !playing;
  });
  audio.addEventListener("ended", () => {
    playing = false;
    toggle.textContent = "Sound Off";
  });
}

function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}



// Function to initialize animations based on screen size
function initializeAnimations() {
  if (window.innerWidth > 400) {
   
  
    smoothScrolling();
    page1();
    page2();
 
    page3();
    page4();
    page5();
  } else {

    killAllScrollTriggers();
  }
}
loader();
sound();
marquee();

initializeAnimations();

// Add event listener to monitor screen resize
window.addEventListener("resize", () => {
  initializeAnimations();
});
