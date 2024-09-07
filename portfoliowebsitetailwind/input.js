window.addEventListener("DOMContentLoaded",()=>{
    const navbar = document.querySelector(".responsive")
const closenavbar = document.querySelector(".closenav")
const navbarbox = document.querySelector(".navbar")
const navlink = document.querySelectorAll(".navbar ul li a")

navbar.addEventListener("click",()=>{
    navbarbox.classList.remove("right-[-100%]");
    navbarbox.classList.add("right-0");


})
closenavbar.addEventListener("click",()=>{
    
    
    navbarbox.classList.add("right-[-100%]");
    
    // navbarbox.classList.add("right-0");
    
})

let gsaptimeline = gsap.timeline()

gsaptimeline.from(".hero-name:nth-child(1)",{
    y:-200,
    duration:1,
    opcity:0
},"samir")
gsaptimeline.from(".hero-name:nth-child(2)",{
    y:200,
    duration:1,
    opcity:0
},"samir")

gsaptimeline.from(".myimage",{
    scale:0,
    duration:.3,
})






gsap.to(".move", {
    transform:"translate(-200%)",      // Move the element 200% of its own width to the right
    duration: 4,    
    ease:"none",    // Duration of one animation cycle
    repeat: -1,         // Repeat indefinitely
       // Make the animation reverse direction on each cycle
    
  });
  




  

})