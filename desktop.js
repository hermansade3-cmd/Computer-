/* ===== DESKTOP / START MENU / LOCK / SAA ===== */
const ACT={explorer:a=>()=>explorer(a),file:(fo,n)=>()=>openF(fo,n),alert:m=>()=>alert(m)};
const DI=DESKTOP.map(([i,n,kind,...a])=>[i,n,ACT[kind](...a)]);
DI.forEach(([i,n,f])=>{const d=E('div','ic','<b>'+i+'</b>'+n);d.ondblclick=f;d.onclick=()=>{document.querySelectorAll('.ic').forEach(x=>x.classList.remove('s'));d.classList.add('s')};$('#desk').append(d)});
PINNED.forEach(nm=>{const x=DI.find(z=>z[1]===nm);if(!x)return;const b=E('button','',x[0]);b.title=x[1];b.onclick=x[2];$('#pins').append(b)});
const M=$('#menu');
function buildMenu(){M.innerHTML='';const q=E('input');q.placeholder='Tafuta programu, mafaili…';const sc=E('div','sc'),close=()=>M.style.display='none';
 const home=()=>{sc.innerHTML='<h4>Zilizobandikwa</h4>';const g=E('div','pg6');DI.forEach(([i,n,f])=>{const d=E('div','sa','<b>'+i+'</b>'+n);d.onclick=()=>{close();f()};g.append(d)});sc.append(g);
  sc.append(E('h4','','Zinazopendekezwa'));const r=E('div','rg');REC.forEach(([fo,n])=>{const d=E('div','rc','<b>'+(ICONS[ext(n)]||'📄')+'</b><span>'+n+'<br><small style="color:#666">'+fo.split(' ')[0]+'</small></span>');d.onclick=()=>{close();openF(fo,n)};r.append(d)});sc.append(r)};
 q.oninput=()=>{const t=q.value.toLowerCase();if(!t)return home();sc.innerHTML='<h4>Matokeo</h4>';const L=[];DI.forEach(x=>x[1].toLowerCase().includes(t)&&L.push([x[0],x[1],x[2]]));Object.keys(FOLDERS).forEach(k=>FOLDERS[k].forEach(n=>n.toLowerCase().includes(t)&&L.push([ICONS[ext(n)]||'📄',n,()=>openF(k,n)])));
  L.slice(0,9).forEach(([i,n,f])=>{const d=E('div','rc','<b>'+i+'</b><span>'+n+'</span>');d.onclick=()=>{close();f()};sc.append(d)});if(!L.length)sc.append('Hakuna kilichopatikana')};
 const ft=E('div','ft','<span>🧑‍💻 Lightness</span>');const pw=E('span','','⏻ Funga');pw.onclick=()=>{close();lock()};const rs=E('span','','🧹 Reset');rs.onclick=()=>{localStorage.removeItem('sadepc');location.reload()};const r2=E('div');r2.append(rs,pw);ft.append(r2);
 home();M.append(q,sc,ft);setTimeout(()=>q.focus(),50)}
const toggle=e=>{e.stopPropagation();if(M.style.display==='flex')M.style.display='none';else{buildMenu();M.style.display='flex'}};
$('#st').onclick=toggle;$('#sr').onclick=toggle;M.onclick=e=>e.stopPropagation();document.addEventListener('click',()=>M.style.display='none');
const L=$('#lock');function lock(){L.classList.remove('up')}L.onclick=()=>L.classList.add('up');addEventListener('keydown',()=>L.classList.add('up'));
const tick=()=>{const n=new Date();$('#clk').innerHTML=n.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+'<br>'+n.toLocaleDateString();$('#lt').textContent=n.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});$('#ld').textContent=n.toLocaleDateString('sw-TZ',{weekday:'long',day:'numeric',month:'long'})};tick();setInterval(tick,1000);
