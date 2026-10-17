/* ===== EXPLORER ===== */
function explorer(f){
 let cur=f||null,H=[cur],hi=0;const box=wrap(),side=E('div','sd'),body=E('div','grid'),ad=E('div','ad'),stt=E('div','stt'),q=E('input');q.placeholder='Tafuta';q.style.width='120px';
 const go=(c,p)=>{cur=c;if(!p){H=H.slice(0,hi+1);H.push(c);hi++}q.value='';draw()};
 const bk=E('button','','←'),fw=E('button','','→'),up=E('button','','↑');bk.onclick=()=>{if(hi>0){hi--;go(H[hi],1)}};fw.onclick=()=>{if(hi<H.length-1){hi++;go(H[hi],1)}};up.onclick=()=>go(null);
 const nav=E('div','bar');nav.append(bk,fw,up,ad,q);const row=E('div');row.style.cssText='display:flex;flex:1;min-height:0';row.append(side,body);body.style.flex=1;body.style.overflow='auto';
 function draw(){ad.textContent='💻 Kompyuta Hii › Diski (C:)'+(cur?' › '+cur:'');side.innerHTML='';
  const si=(t,c)=>{const d=E('div',c===cur?'on':'',t);d.onclick=()=>go(c);side.append(d)};si('💻 Kompyuta Hii',null);Object.keys(FOLDERS).forEach(k=>si('📁 '+k.split(' ')[0],k));
  body.innerHTML='';let n=0;const t=q.value.toLowerCase();
  if(!cur)Object.keys(FOLDERS).filter(k=>k.toLowerCase().includes(t)).forEach(k=>{n++;const i=E('div','it','<b>📁</b>'+esc(k));i.ondblclick=()=>go(k);body.append(i)});
  else FOLDERS[cur].filter(x=>x.toLowerCase().includes(t)).forEach(x=>{n++;const i=E('div','it','<b>'+(ICONS[ext(x)]||'📄')+'</b>'+esc(x));i.ondblclick=()=>openF(cur,x);i.onclick=()=>{body.querySelectorAll('.it').forEach(z=>z.style.background='');i.style.background='#cce4f7'};body.append(i)});
  stt.textContent=n+' vitu'}
 q.oninput=draw;draw();box.append(nav,row,stt);win('Explorer','📁',680,420,box)}
