// غيّر الرقم هنا (صيغة دولية بدون +)
const CONFIG={whatsapp:"201000000000",cur:"ج.م",name:"Nonna's Trattoria"};
const PZ=[["صغير (٢٠ سم)",-25],["وسط (٢٨ سم)",0],["كبير (٣٥ سم)",40]],PS=[["عادي",0],["كبير",30]];
const MENU=[
{id:"p1",c:"pizza",e:"🍕",bg:"#f8d7cf",n:"مارجريتا",en:"Margherita",p:120,t:15,k:780,tag:"الأكثر طلبًا",d:"الكلاسيكية الإيطالية: صوص طماطم سان مارزانو وموتزاريلا طازجة وريحان، على عجينة رقيقة مقرمشة الأطراف.",ing:["طماطم سان مارزانو","موتزاريلا","ريحان طازة","زيت زيتون"]},
{id:"p2",c:"pizza",e:"🌶️",bg:"#f9cfc4",n:"ديافولا",en:"Diavola",p:155,t:15,k:920,tag:"حارة",d:"للي بيحب الحرارة: سلامي حار وفلفل أحمر وزيت زيتون بالشطة فوق موتزاريلا ذايبة.",ing:["سلامي حار","موتزاريلا","فلفل أحمر","زيت حار"]},
{id:"p3",c:"pizza",e:"🍄",bg:"#e9dccb",n:"مشروم تارتوفو",en:"Funghi",p:150,t:16,k:830,d:"مشروم مشكّل مسوّى بالثوم والبقدونس، مع لمسة زيت الكمأة الفاخر.",ing:["مشروم مشكّل","موتزاريلا","ثوم","زيت الكمأة"]},
{id:"p4",c:"pizza",e:"🧀",bg:"#f6e7b4",n:"كواترو فورماجي",en:"Quattro Formaggi",p:175,t:17,k:980,tag:"للجبن",d:"أربع جبن إيطالية في بيتزا واحدة: غنية وكريمية ونكهتها عميقة.",ing:["موتزاريلا","جورجونزولا","بارميزان","بيكورينو"]},
{id:"p5",c:"pizza",e:"🍖",bg:"#f4c9c1",n:"بيبروني",en:"Pepperoni",p:165,t:15,k:900,d:"شرائح بيبروني مقرمشة الأطراف فوق صوص طماطم وموتزاريلا وأوريجانو.",ing:["بيبروني","موتزاريلا","صوص طماطم","أوريجانو"]},
{id:"p6",c:"pizza",e:"🥓",bg:"#e3ead3",n:"بروشوتو إي روكولا",en:"Prosciutto & Rocket",p:185,t:16,k:850,tag:"جديد",d:"بيتزا بتتقدّم طازة: لحم بروشوتو رفيع وجرجير وبارميزان بعد الفرن مباشرة.",ing:["بروشوتو","جرجير","بارميزان","طماطم كرزية"]},
{id:"s1",c:"pasta",e:"🍝",bg:"#f8d7cf",n:"سباجيتي بولونيز",en:"Spaghetti Bolognese",p:130,t:18,k:720,tag:"الأكثر طلبًا",d:"لحم مفروم بيتسوّى ببطء ساعتين في صوص طماطم وجزر وكرفس.",ing:["لحم مفروم","طماطم","جزر وكرفس","بارميزان"]},
{id:"s2",c:"pasta",e:"🥚",bg:"#f6e7b4",n:"سباجيتي كاربونارا",en:"Carbonara",p:145,t:15,k:810,d:"الوصفة الرومانية الأصلية: صفار بيض وبيكورينو ولحم مقدد وفلفل أسود، بدون كريمة.",ing:["بيض","بيكورينو","لحم مقدد","فلفل أسود"]},
{id:"s3",c:"pasta",e:"🍅",bg:"#f9cfc4",n:"بيني أرابياتا",en:"Penne Arrabbiata",p:115,t:14,k:610,tag:"حارة",d:"بيني بصوص طماطم حار بالثوم والفلفل، بسيط وقوي النكهة. نباتي.",ing:["بيني","طماطم","ثوم","فلفل حار"]},
{id:"s4",c:"pasta",e:"🌿",bg:"#d9e8cf",n:"تالياتيلي بيستو",en:"Tagliatelle al Pesto",p:140,t:14,k:690,d:"شرائط باستا طرية مع بيستو ريحان طازة وصنوبر وبارميزان. نباتي.",ing:["تالياتيلي","ريحان","صنوبر","بارميزان"]},
{id:"s5",c:"pasta",e:"🍤",bg:"#d5e6ee",n:"لينجويني جمبري",en:"Linguine ai Gamberi",p:195,t:18,k:640,tag:"سي فود",d:"جمبري سوتيه بالثوم والنبيذ الأبيض والطماطم الكرزية فوق لينجويني.",ing:["جمبري","ثوم","طماطم كرزية","بقدونس"]},
{id:"s6",c:"pasta",e:"🧈",bg:"#f1e4c8",n:"فيتوتشيني ألفريدو",en:"Fettuccine Alfredo",p:150,t:15,k:850,d:"صوص كريمة وبارميزان ناعم مع صدور فراخ مشوية.",ing:["فيتوتشيني","كريمة","بارميزان","صدور فراخ"]}
];
const $=s=>document.querySelector(s),sizes=m=>m.c==="pizza"?PZ:PS,fmt=n=>n.toLocaleString("ar-EG")+" "+CONFIG.cur;
let cat="pizza",cart={},sel={size:1,qty:1};
try{cart=JSON.parse(localStorage.getItem("cart2")||"{}")}catch(e){}
const price=(m,s)=>m.p+sizes(m)[s][1];
function parse(k){const[a,b]=k.split("|"),m=MENU.find(x=>x.id===a);return m?{m,s:+b}:null}

function menu(){
  $("#hero").hidden=false;$("#tabs").hidden=false;
  $("#main").innerHTML=`<div class="grid">${MENU.filter(m=>m.c===cat).map(m=>`<button class="card" data-id="${m.id}">
  <div class="pic" style="background:${m.bg}">${m.e}${m.tag?`<i>${m.tag}</i>`:""}</div>
  <div class="cb"><h3>${m.n}</h3><div class="en">${m.en}</div><p>${m.d}</p><div class="pr"><span>${fmt(m.p)}</span><span>التفاصيل ‹</span></div></div></button>`).join("")}</div>`;
}
function detail(m){
  $("#hero").hidden=true;$("#tabs").hidden=true;window.scrollTo(0,0);
  const S=sizes(m);
  $("#main").innerHTML=`<button class="back" id="back">› رجوع للمنيو</button>
  <div class="det"><div class="dpic" style="background:${m.bg}">${m.e}</div><div class="dinfo">
  <h2>${m.n}</h2><div class="en">${m.en}</div>
  <div class="meta"><span>⏱ ${m.t} دقيقة</span><span>🔥 ${m.k} سعر حراري</span>${m.tag?`<span>${m.tag}</span>`:""}</div>
  <p class="d">${m.d}</p>
  <h4>المكونات</h4><div class="chips ing">${m.ing.map(i=>`<span>${i}</span>`).join("")}</div>
  <h4>الحجم</h4><div class="chips">${S.map((s,i)=>`<button class="chip sz" data-s="${i}" aria-pressed="${i===sel.size}">${s[0]}</button>`).join("")}</div>
  <div class="buy"><div class="q"><button id="mi" aria-label="تقليل">−</button><b id="qv">${sel.qty}</b><button id="pl" aria-label="زيادة">+</button></div>
  <button class="add" id="addd"></button></div></div></div>`;
  upd(m);
}
function upd(m){$("#qv").textContent=sel.qty;$("#addd").textContent=`أضف للسلة · ${fmt(price(m,sel.size)*sel.qty)}`;
  document.querySelectorAll(".sz").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.s===sel.size))}
function route(){
  const m=MENU.find(x=>x.id===location.hash.slice(1));
  if(m){sel={size:m.c==="pizza"?1:0,qty:1};detail(m)}else{menu()}
}
function renderCart(){
  const ks=Object.keys(cart).filter(k=>cart[k]>0&&parse(k));let t=0,c=0;
  $("#items").innerHTML=ks.length?ks.map(k=>{const{m,s}=parse(k),q=cart[k],p=price(m,s);t+=p*q;c+=q;
    return `<div class="it"><span class="e">${m.e}</span><div class="m"><b>${m.n}</b><span>${sizes(m)[s][0]} · ${fmt(p)} × ${q}</span></div>
    <div class="qs"><button data-a="i" data-k="${k}" aria-label="زيادة">+</button><b>${q}</b><button data-a="d" data-k="${k}" aria-label="تقليل">−</button><button class="del" data-a="x" data-k="${k}" aria-label="حذف">🗑</button></div></div>`}).join("")
    :`<div class="empty">السلة فاضية. اختار صنف من المنيو.</div>`;
  $("#total").textContent=fmt(t);$("#cnt").textContent=c;$("#send").disabled=!ks.length;
  try{localStorage.setItem("cart2",JSON.stringify(cart))}catch(e){}
}
const openCart=o=>{$("#cart").classList.toggle("on",o);$("#shade").classList.toggle("on",o);$("#cart").setAttribute("aria-hidden",!o)};

document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{cat=t.dataset.c;document.querySelectorAll(".tab").forEach(x=>x.setAttribute("aria-selected",x===t));menu()});
$("#main").onclick=e=>{
  const card=e.target.closest(".card"),m=MENU.find(x=>x.id===location.hash.slice(1));
  if(card){location.hash=card.dataset.id;return}
  if(e.target.closest("#back")){location.hash="";return}
  if(!m)return;
  const sz=e.target.closest(".sz");
  if(sz){sel.size=+sz.dataset.s}
  else if(e.target.closest("#pl"))sel.qty++;
  else if(e.target.closest("#mi"))sel.qty=Math.max(1,sel.qty-1);
  else if(e.target.closest("#addd")){const k=m.id+"|"+sel.size;cart[k]=(cart[k]||0)+sel.qty;renderCart();openCart(true);return}
  upd(m);
};
$("#home").onclick=()=>{location.hash="";window.scrollTo(0,0)};
$("#items").onclick=e=>{const b=e.target.closest("button");if(!b)return;const k=b.dataset.k,a=b.dataset.a;
  if(a==="i")cart[k]++;else if(a==="d")cart[k]--;else delete cart[k];
  if(cart[k]<=0)delete cart[k];renderCart()};
$("#open").onclick=()=>openCart(true);$("#close").onclick=$("#shade").onclick=()=>openCart(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape")openCart(false)});
window.addEventListener("hashchange",route);

$("#send").onclick=()=>{
  const nm=$("#nm").value.trim(),ph=$("#ph").value.trim(),ad=$("#ad").value.trim();
  if(!nm||!ph||!ad){$("#err").textContent="من فضلك اكتب الاسم ورقم الموبايل والعنوان.";return}
  $("#err").textContent="";let t=0;
  const L=Object.keys(cart).map(k=>{const o=parse(k);if(!o)return"";const p=price(o.m,o.s)*cart[k];t+=p;return `• ${o.m.n} (${sizes(o.m)[o.s][0]}) × ${cart[k]} = ${p} ${CONFIG.cur}`}).filter(Boolean);
  const msg=`طلب جديد من ${CONFIG.name}\n\n${L.join("\n")}\n\nالإجمالي: ${t} ${CONFIG.cur}\n\nالاسم: ${nm}\nالموبايل: ${ph}\nالعنوان: ${ad}`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
};
renderCart();route();
