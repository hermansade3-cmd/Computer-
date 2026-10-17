/* ===== KUFUNGUA FAILI (loader) =====
   openF('Nyaraka (Documents)','notes.txt') hutafuta:
   faili/Nyaraka/notes.txt.html  ← eneo kuu
   kisha njia mbadala (faili/, root, Sade-Computer/) */
async function openF(f,n){const s=f.split(' ')[0],e=encodeURIComponent(n)+'.html',P=['faili/'+s+'/'+e,'faili/'+e,e,'Sade-Computer/faili/'+s+'/'+e,'Sade-Computer/'+e];
 const fr=E('iframe');fr.style.cssText='flex:1;border:0;width:100%;background:#fff';win(n,ICONS[ext(n)]||'📄',640,430,fr);
 let ok=null;if(location.protocol==='file:')ok=P[0];else for(const p of P.concat(P.map(x=>x.toLowerCase()))){try{const r=await fetch(p,{cache:'no-store'});if(r.ok&&/html/.test(r.headers.get('content-type')||'')){ok=p;break}}catch(_){}}
 if(ok)fr.src=ok;else fr.srcdoc='<body style="font:14px sans-serif;padding:20px"><h3>⚠ Faili halijapatikana</h3><p><b>'+esc(n)+'.html</b> halipo. Nimejaribu:</p><pre>'+P.join('\n')+'</pre><p>Tengeneza faili hilo kwenye folda la faili/ (angalia faili/_kiolezo.html).</p>'}
addEventListener('message',e=>{if(e.data&&e.data.close)wins.slice().forEach(w=>{const r=w.el.querySelector('iframe');if(r&&r.contentWindow===e.source)w.close()})});
const TAP=matchMedia('(pointer:coarse)').matches;
document.addEventListener('click',e=>{if(!TAP)return;const t=e.target.closest('.it,.ic');if(t&&t.ondblclick)t.ondblclick(e)});
