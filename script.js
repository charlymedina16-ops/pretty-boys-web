const gate=document.getElementById("ageGate"),enter=document.getElementById("enter"),exit=document.getElementById("exit"),nav=document.getElementById("nav"),hamb=document.getElementById("hamburger"),light=document.getElementById("lightbox"),lightImg=document.getElementById("lightboxImg");

if(localStorage.getItem("prettyBoys18")==="yes")gate.style.display="none";else document.body.classList.add("lock");
enter.onclick=()=>{localStorage.setItem("prettyBoys18","yes");gate.style.display="none";document.body.classList.remove("lock")};
exit.onclick=()=>location.href="https://www.google.com/";
hamb.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

document.querySelectorAll(".gallery-item").forEach(b=>b.onclick=()=>{lightImg.src=b.dataset.src;light.classList.add("open");document.body.classList.add("lock")});
document.getElementById("closeLightbox").onclick=()=>{light.classList.remove("open");document.body.classList.remove("lock")};
light.onclick=e=>{if(e.target===light){light.classList.remove("open");document.body.classList.remove("lock")}};

const form=document.getElementById("form");
form.onsubmit=e=>{
  e.preventDefault();
  const fields=form.querySelectorAll("input, select, textarea");
  const nombre=fields[0].value.trim();
  const zona=fields[1].value.trim();
  const evento=fields[2].value;
  const fecha=fields[3].value;
  const show=fields[4].value;
  const detalles=fields[5].value.trim();
  const fechaFormateada=fecha?new Date(`${fecha}T12:00:00`).toLocaleDateString("es-MX",{day:"2-digit",month:"2-digit",year:"numeric"}):"";
  const mensaje=`🔥 NUEVA SOLICITUD DE RESERVACIÓN — PRETTY BOYS\n\n👤 Cliente: ${nombre}\n📍 Ciudad / zona: ${zona}\n🎉 Tipo de evento: ${evento}\n📅 Fecha: ${fechaFormateada}\n🎭 Show solicitado: ${show}${detalles?`\n\n📝 Detalles del evento:\n${detalles}`:""}\n\n━━━━━━━━━━━━━━━━━━\nSolicitud enviada desde la página oficial de Pretty Boys.`;
  const whatsapp=`https://wa.me/524761454354?text=${encodeURIComponent(mensaje)}`;
  window.open(whatsapp,"_blank","noopener,noreferrer");
};
