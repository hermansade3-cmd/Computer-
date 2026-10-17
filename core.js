const $=s=>document.querySelector(s),E=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const ext=n=>n.split('.').pop().toLowerCase();
/* ===== WINDOWS ===== */
let Z=10,wins=[];
function win(title,icon,w,h,body,onclose){
 const el=E('div','w'),hd=E('div','h','<span>'+icon+' &nbsp;'+esc(title)+'</span><i>─</i><i>☐</i><i class="x">✕</i>'),b=E('div','b');
 b.append(body);el.append(hd,b);
 const n=wins.length%8*26;el.style.cssText=`left:${40+n}px;top:${30+n}px;width:${Math.min(w,innerWidth-10)}px;height:${Math.min(h,innerHeight-60)}px;z-index:${++Z}`;
 $('#desk').append(el);if(innerWidth<760)el.classList.add('mx');
 const tk=E('button','',icon);tk.title=title;$('#tasks').append(tk);
 const o={el,close(){onclose&&onclose();el.remove();tk.remove();wins=wins.filter(x=>x!==o)},foc(){el.style.zIndex=++Z;el.style.display='flex';wins.forEach(x=>x.tk.classList.remove('on'));tk.classList.add('on')},tk};
 wins.push(o);o.foc();
 el.addEventListener('pointerdown',()=>o.foc());
 const [mn,mx,cl]=hd.querySelectorAll('i');cl.onclick=o.close;mx.onclick=()=>el.classList.toggle('mx');mn.onclick=()=>{el.style.display='none';tk.classList.remove('on')};
 hd.ondblclick=()=>el.classList.toggle('mx');
 tk.onclick=()=>el.style.display==='none'||!tk.classList.contains('on')?o.foc():mn.onclick();
 let d=null;hd.onpointerdown=e=>{if(e.target.tagName==='I'||el.classList.contains('mx'))return;d=[e.clientX-el.offsetLeft,e.clientY-el.offsetTop];hd.setPointerCapture(e.pointerId)};
 hd.onpointermove=e=>{if(d){el.style.left=e.clientX-d[0]+'px';el.style.top=Math.max(0,e.clientY-d[1])+'px'}};hd.onpointerup=()=>d=null;
 return o}
function bar(...a){const d=E('div','bar');a.forEach(x=>{if(typeof x==='string')d.append(E('span','',x));else{const bt=E('button','',x[0]);bt.onclick=x[1];d.append(bt)}});return d}
const wrap=(...c)=>{const d=E('div');d.style.cssText='display:flex;flex-direction:column;flex:1;min-height:0';d.append(...c);return d};
