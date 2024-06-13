gsap.registerPlugin(ScrollTrigger)
const tl=gsap.timeline({repeat:-1,yoyo:true})
const cuadro1=document.getElementsByClassName("cuadro1")
const cuadro2=document.getElementsByClassName("cuadro2")
tl.to(cuadro1,{
    duration: 1,
    rotate:360,
    x:300
})
tl.from(cuadro2,{
    duration: 1,
    rotate:-360, 
    x:-300,
})
gsap.to(".cuadrop2",{
    scrollTrigger:{
        trigger:".panel2",
        start:"top top",
        scrub:true,
        pin: ".panel2",
        toggleAction:"restart pasue resume restart"
    },
    y:"random(-200,200)",
    rotation: 360,
    duration: 3
})
