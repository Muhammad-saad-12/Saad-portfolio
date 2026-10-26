/* ===== EDIT YOUR CONTENT HERE ===== */
const EMAIL="saad.work006@gmail.com";
const expertise=[
{i:"🌐",t:"Web Development",d:"Building responsive, interactive web applications with modern frontend technologies and reusable UI components.",g:["JavaScript","React.js","HTML5","CSS3","Bootstrap","Tailwind CSS"]},
{i:"🗄️",t:"Backend Development & APIs",d:"Developing backend functionality, RESTful APIs, authentication, and database-driven application workflows.",g:["PHP","Laravel","Node.js","Express.js","RESTful APIs","MySQL","MongoDB"]},
{i:"🧠",t:"AI-Powered Applications",d:"Exploring practical AI applications and integrating intelligent features into web development projects.",g:["AI Chatbot Integration","Prompt Engineering","AI-Assisted Development","Python","NLP"]}];
const stack=[
["Programming Languages",["JavaScript","TypeScript","PHP","Python"]],
["Frontend",["React.js","HTML5","CSS3","Bootstrap","Tailwind CSS","jQuery"]],
["Backend & Frameworks",["Node.js","Express.js","Laravel","RESTful APIs"]],
["Databases",["MySQL","MongoDB","Relational Database Design"]],
["Software Engineering",["Object-Oriented Programming","MVC","CRUD Operations","Authentication and Authorization","API Integration","Data Integrity"]],
["Tools & Platforms",["Git","GitHub","Postman","Composer","AWS","Linux"]],
["AI Development Tools",["Claude","Claude Code","Cursor","GitHub Copilot","ChatGPT"]]];
const jobs=[{role:"Software Development Intern",co:"TNV Solutions",loc:"Gujrat, Punjab, Pakistan",date:"Jun 2026 – Oct 2026",
d:["Developed an authenticated single-page CRUD application using PHP, JavaScript, jQuery, Bootstrap, and MySQL.","Built and integrated RESTful APIs for application data exchange and database operations.","Implemented authentication and dynamic user-interface updates.","Used AI-assisted development tools for code understanding, debugging, refactoring, and feature implementation."],
g:["PHP","JavaScript","jQuery","Bootstrap","MySQL","REST APIs"]}];
/* Add real URLs later: repo:"https://github.com/..." and/or demo:"https://..." — buttons appear only when a URL is set. */
const projects=[
{n:"DineFlow — Restaurant Management System",d:"A full-stack restaurant management application featuring interactive menus, online ordering, and order management. Includes role-based access for administrators, staff, and customers, an AI-powered chatbot for customer assistance and dish recommendations, and WhatsApp order notifications.",g:["React.js","Node.js","Express.js","MongoDB","Tailwind CSS"],b:"Full-Stack",c:"#3b82f6",bg:"linear-gradient(135deg,#1e3a5f,#0f172a)",e:"🍽️",repo:"",demo:""},
{n:"Flight Booking & Ticket Management System",d:"A flight-management application supporting ticket-availability checks, booking-record management, and backend maintenance of ticket records and pricing information. Includes a staff/agent portal for viewing availability and managing booking-related information.",g:["PHP","Laravel","Livewire","MySQL"],b:"Full-Stack",c:"#3b82f6",bg:"linear-gradient(135deg,#1e293b,#14352a)",e:"✈️",repo:"",demo:""},
{n:"AI Resume Analyzer & Job Matching System",d:"An AI-focused project designed to analyze resumes, extract relevant skills and qualifications, compare candidate profiles with job descriptions, and identify missing skills for targeted roles.",g:["Python","NLP","AI","REST APIs"],b:"AI",c:"#8b5cf6",bg:"linear-gradient(135deg,#2a1f4d,#0f172a)",e:"📄",repo:"",demo:""},
{n:"Library Management System",d:"A university project focused on managing library books and maintaining library records using an MVC-based application structure.",g:["C#","ASP.NET Core MVC",".NET","SQL"],b:"University",c:"#22c55e",bg:"linear-gradient(135deg,#14352a,#0f172a)",e:"📚",repo:"",demo:""}];
const certs=[["🎓","Google AI Fundamentals","Coursera","#3b82f6"],["🏅","Google Antigravity National Hackathon — Regional Qualifiers","Google for Developers","#eab308"]];
/* ===== END OF CONTENT ===== */

const $=s=>document.querySelector(s);
const tags=a=>a.map(x=>`<span class="tag">${x}</span>`).join("");
$("#expGrid").innerHTML=expertise.map(e=>`<div class="card exp rv"><div class="ico">${e.i}</div><h3>${e.t}</h3><p>${e.d}</p><div class="tags">${tags(e.g)}</div></div>`).join("");
$("#stack").innerHTML=stack.map(g=>`<div class="card sg rv"><h3>${g[0]}</h3><div>${tags(g[1])}</div></div>`).join("");
$("#tl").innerHTML=jobs.map(j=>`<div class="job rv"><div class="card"><h3>${j.role}</h3><div class="co">${j.co} <span>· ${j.loc}</span></div><ul>${j.d.map(x=>`<li>${x}</li>`).join("")}</ul>${tags(j.g)}</div><div class="dot">💼</div><div class="date">${j.date}</div></div>`).join("");
$("#projGrid").innerHTML=projects.map(p=>{const l=(p.repo?`<a class="btn sm" href="${p.repo}" target="_blank" rel="noopener">GitHub ↗</a>`:"")+(p.demo?`<a class="btn sm pri" href="${p.demo}" target="_blank" rel="noopener">Live Demo ↗</a>`:"");return `<div class="card proj rv"><div class="thumb" style="background:${p.bg}">${p.e}<span class="badge" style="background:${p.c}">${p.b}</span></div><div class="body"><h3>${p.n}</h3><p>${p.d}</p><div class="tags">${tags(p.g)}</div>${l?`<div class="plinks">${l}</div>`:""}</div></div>`}).join("");
$("#certGrid").innerHTML=certs.map(c=>`<div class="card cert rv" style="--c:${c[3]}"><div class="top"><span>${c[0]}</span></div><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join("");

// scroll reveal + skill bars
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");const f=e.target.querySelector(".fill");if(f)f.style.width=f.dataset.w+"%";io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));

// mobile menu
$("#menu").onclick=()=>$("#links").classList.toggle("open");
$("#links").onclick=()=>$("#links").classList.remove("open");

// contact form -> opens the visitor's email app
$("#form").onsubmit=e=>{e.preventDefault();const f=e.target;
location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from "+f.n.value)}&body=${encodeURIComponent(f.m.value+"\n\nContact: "+f.e.value)}`};

// hero network animation
(()=>{const c=$("#net"),x=c.getContext("2d");let w,h,P=[];
const size=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;P=Array.from({length:Math.min(60,w/20)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))};
size();addEventListener("resize",size);
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
(function loop(){x.clearRect(0,0,w,h);
P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
x.fillStyle="rgba(180,190,220,.5)";x.fillRect(p.x,p.y,2,2);
for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);
if(d<130){x.strokeStyle=`rgba(150,160,200,${.15*(1-d/130)})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
requestAnimationFrame(loop)})()})();
