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
  y:10,
  opacity:0,
  duration:1,
  stagger:0.2,
  delay:0.5
  

})
gsap.from("#text-cont p",{
  y:10,
  opacity:0,
  duration:1,
  stagger:0.2,
  delay:0.5
  

})