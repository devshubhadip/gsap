// sceleton

gsap.to(".loading1",{
    top : 0,
    delay : 0.5,
    duration : 0.5,
    ease: "expo.out",
})
gsap.to(".loading2",{
    top : 0,
    delay : 0.6,
    duration : 1,
    ease: "expo.out",
})
gsap.to(".loading3",{
    top : 0,
    delay : 0.7,
    duration : 1.5,
    ease: "expo.out",
})


// navbar click effect

var navi = document.querySelector(".inner")
var openNav = document.querySelector(".fa-bars")
var closeNav = document.querySelector(".fa-xmark")

openNav.addEventListener("click", function(){
    navi.style.top = "25%";
    openNav.style.display = "none";
    closeNav.style.display ="initial"


})


closeNav.addEventListener("click", function(){
    navi.style.top = "-80%";
    openNav.style.display = "initial";
    closeNav.style.display ="none"

})

