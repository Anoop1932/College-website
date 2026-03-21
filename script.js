let index = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;

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

}, 4000); 