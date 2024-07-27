


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
    delay:5,
})
tl.from("#page1",{
    y:1600,
    opacity:0,
    dealy:0.2,
    power:4,
    duration:0.5
})
tl.to("#loader",{
    dispaly:"none"
})