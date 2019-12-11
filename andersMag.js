let hart = document.getElementById("hart");
let buiten = document.getElementById("_buiten_");
let g = document.getElementById("_g_");
let mRechthoek = document.getElementById("_maRechthoek_");
let m = document.getElementById("_m");
let a = document.getElementById("_aMa_");
gsap.fromTo(g, {y: "-1458"}, {ease:Bounce.easeOut, delay:0.5, duration: 2, y: "-400"});

buiten.addEventListener('mouseenter', () => {
    console.log('hover');
    gsap.to(hart, {duration:1, rotation: "+=360", repeat: false});
});

mRechthoek.addEventListener('click', () => {
    console.log("click");
    gsap.fromTo(g, {y: "-1500"}, {duration: 1.5, y: "-400"});
});

gsap.fromTo(mRechthoek, {x: "-1500"}, {duration: 1, x: "0"});
gsap.fromTo(m, {x: "-1500"}, {duration: 2.5, x: "-340"});
gsap.fromTo(a, {x: "-1500"}, {duration: 2.5, x: "-340"});

