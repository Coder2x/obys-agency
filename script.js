

function loadinganimation(){
var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    // opactiy:0,
    stagger:0.2,
    duration:0.6,
    delay:0.5,
})
tl.from("#line1-paert1",{
opacity:0,
onStart:function(){
    var h5=document.querySelector('#line1-part1 h5')
var grow=0
setInterval(function(){
if(grow<100){

h5.innerHTML=grow++
}else{
    h5.innerHTML=grow
}

},45)

}
})
    
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})

tl.to("#loader",{
    opacity:0,
    duration:0.5,
    delay:3,
})
tl.from("#page1",{
    y:1600,
    opacity:0,
    dealy:0.2,
    power:4,
    duration:0.5
})
tl.to("#loader",{
    dispaly:"none",
    zIndex: 0
})
tl.from("#nav",{
    opacity:0
})

tl.from("#hero1 h1,#hero2 h1, #hero3 h2, #hero4 h1",{
    y:120,
    stagger:0.2
})

}
loadinganimation()

function cursoranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
        })
        Shery.makeMagnet(" h4", {});
}
cursoranimation()