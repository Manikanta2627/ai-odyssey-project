// Loading Screen
window.addEventListener("load", ()=>{
document.getElementById("loader").style.display="none";
});

// Scroll Progress Bar
window.addEventListener("scroll", ()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=
progress+"%";

});

// Scroll Reveal Animation
const sections=document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

gsap.to(section,{
opacity:1,
y:0,
duration:1
});

}

});

});

// Theme Switcher
const themes=[

{bg:"#020617",card:"#1e293b",button:"#3b82f6"},
{bg:"#1e1b4b",card:"#312e81",button:"#6366f1"},
{bg:"#022c22",card:"#064e3b",button:"#10b981"},
{bg:"#3f1d1d",card:"#7c2d12",button:"#f97316"},
{bg:"#0f172a",card:"#334155",button:"#8b5cf6"}

];

function changeTheme(){

const theme=themes[Math.floor(Math.random()*themes.length)];

document.body.style.background=theme.bg;

document.querySelectorAll(".card").forEach(card=>{
card.style.background=theme.card;
});

document.querySelectorAll("button").forEach(btn=>{
btn.style.background=theme.button;
});

}

// Hero Animation
gsap.timeline()
.from(".hero-title",{y:-80,opacity:0,duration:1})
.from(".hero-subtitle",{opacity:0,duration:1})
.from(".btn",{opacity:0,duration:1});

// AI Neural Network Background
const canvas=document.getElementById("ai-bg");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<60;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

particles.forEach(p2=>{

let dx=p.x-p2.x;
let dy=p.y-p2.y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);
ctx.strokeStyle="rgba(255,255,255,0.1)";
ctx.stroke();

}

});

});

requestAnimationFrame(animate);

}

animate();
