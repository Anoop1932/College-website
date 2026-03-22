let index = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;
const nav = document.querySelector(".banner");
const h1 = document.querySelector(".banner h2");
const li = document.querySelectorAll("li");
gsap.registerPlugin(ScrollTrigger);

setInterval(() => {
  index++;

  if (index >= totalSlides) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 100}%)`;
  gsap.fromTo(slider.children[index],{


    opacity:0.2,
    scale:1.2 


    },
    {

      opacity:1,
      scale:1,
      duration:1.2,
      ease:"power4.out"

  })

}, 3000); 


gsap.from(".banner",{
  opacity:0,
  delay:0.2,
  duration:1
  

})
gsap.from(".section-1",{
  opacity:0,
  duration:1,
  delay:0.2
  

})

gsap.from("#text-cont h1",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.1,
  delay:0.7,
  scrub:2
  

})
gsap.from("#text-cont p",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.1,
  delay:0.7,
  scrub:2
  

})

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    gsap.to(nav, {
  backgroundColor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(10px)",
  duration: 0.3
});
    gsap.to(h1 , {
      color:"blue",
      duration:0.3,
      stagger:0.2,
      ease:"power2.out"
    })

    li.forEach(element => {
      gsap.to(li , {
        color:"blue",
        duration:0.1,
        stagger:0.1
      })
    });

  } else {
    gsap.to(nav, {
      backgroundColor: "transparent",
      backdropFilter: "blur(0px)",
      duration: 0.3
    });

    gsap.to(h1, {
      color: "white",
      duration: 0.3
    });

    gsap.to(li, {
      color: "white",
      duration: 0.1,
      stagger: 0.1
    });
  }
});

const animations = ()=>{
    gsap.from("#left-card", {
  x: -120,
  opacity: 0,
  duration:0.8,
  scrollTrigger: {
    trigger: "#page2 #left-card",
    scrub:0.1,
    start: "top 80%",
    end: "top 80%"
  }
});
gsap.from("#center-card,#right-card1, #right-card2 ", {
  x: 120,
  opacity: 0,
  duration:0.8,
  scrollTrigger: {
    trigger: "#page2",
    scrub:0.1,
    start: "top 50%",
    end: "top 90%"
  }
});



gsap.from("#page2 h1, #page2 h2", {
  y: 120,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page2",
    scrub:2,
    start: "top 50%",
    end:"top 90%"
  }
});

gsap.from("#page2 p", {
  y: 120,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#page2",
    scrub:2,
    start: "top 50%",
    end:"top 90%",
  }
});

gsap.from("#page3 img", {
  x: -120,
  duration:0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 img",
    scrub:2,
    start: "top 50%",
    end: "top 70%"
  }
});

gsap.from("#page3 h2, #page3 p", {
  y: 100,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page3",
    scrub:2,
    start: "top 60%",
    end:"top 80%"
  }
});
gsap.from("#page3 h1", {
  scale: 3,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page3",
    scrub:2,
    start: "top 30%",
    end:"top 90%"
  }
});

}

animations();


