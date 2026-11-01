const $=id=>document.getElementById(id);
const money=n=>new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(Number(n)||0);
const today=()=>new Date().toISOString().slice(0,10);
let month=today().slice(0,7);
const seed={settings:{salary:2200,pension:250,caf:200,openingBalance:0,savingGoal:1200,theme:'cream',density:'compact'},categories:[
{name:'Charges fixes',emoji:'🏠',type:'expense',budget:220,exceptional:false},
{name:'Courses',emoji:'🛒',type:'expense',budget:300,exceptional:false},
{name:'Saxophone',emoji:'🎷',type:'expense',budget:80,exceptional:false},
{name:'Transports',emoji:'🚇',type:'expense',budget:200,exceptional:false},
{name:'Restaurants',emoji:'🍽️',type:'expense',budget:80,exceptional:false},
{name:'Plaisirs / autres',emoji:'✨',type:'expense',budget:350,exceptional:false},
{name:'Salaire',emoji:'💶',type:'income',budget:0,exceptional:false},
{name:'Pension',emoji:'💰',type:'income',budget:0,exceptional:false},
{name:'CAF',emoji:'🧾',type:'income',budget:0,exceptional:false}
],transactions:[],savings:[]};
// Sur mobile, afficher un clavier numérique pour tous les champs de montant.
document.addEventListener('focusin',e=>{
 if(e.target instanceof HTMLInputElement && e.target.type==='number'){
  e.target.setAttribute('inputmode','decimal');
  e.target.setAttribute('pattern','[0-9]*');
 }
});
function clone(x){return JSON.parse(JSON.stringify(x))}
function migrate(old){
 if(old&&old.categories&&old.transactions&&old.settings)return old;
 let d=clone(seed);
 if(old&&old.budgets){d.categories=old.budgets.map(b=>({name:b.name,emoji:'📌',type:'expense',budget:Number(b.amount)||0,exceptional:false}));}
 if(old&&old.expenses)d.transactions=old.expenses.map(x=>({...x,kind:'expense',id:x.id||crypto.randomUUID()}));
 if(old&&old.income){d.settings.salary=Number(old.income.salary)||0;d.settings.pension=Number(old.income.pension)||0;d.settings.caf=Number(old.income.caf)||0;d.settings.savingGoal=Number(old.income.goal)||0;}
 if(old&&old.savings)d.savings=old.savings;
 return d;
}
let data;try{data=migrate(JSON.parse(localStorage.getItem('monBudgetDataV3')||localStorage.getItem('monBudgetData')||'null')||clone(seed))}catch{data=clone(seed)}
function persist(){localStorage.setItem('monBudgetDataV3',JSON.stringify(data));render()}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function list(kind){return data.transactions.filter(t=>t.date?.slice(0,7)===month&&t.kind===kind)}
function total(kind){return list(kind).reduce((s,t)=>s+Number(t.amount||0),0)}
function render(){
 let date=new Date(month+'-02T12:00:00'),title=date.toLocaleDateString('fr-FR',{month:'long',year:'numeric'});title=title[0].toUpperCase()+title.slice(1);
 $('monthTitle').textContent=title;$('monthTitle2').textContent=title;
 let expenses=list('expense'),spent=total('expense'),income=total('income')+(Number(data.settings.salary)+Number(data.settings.pension)+Number(data.settings.caf)),savings=data.savings.filter(x=>x.date?.slice(0,7)===month).reduce((s,x)=>s+Number(x.amount||0),0);
 let budget=data.categories.filter(c=>c.type==='expense').reduce((s,c)=>s+Number(c.budget||0),0);
 let exceptional=expenses.filter(t=>data.categories.find(c=>c.name===t.category)?.exceptional).reduce((s,t)=>s+t.amount,0);
 $('totalSpent').textContent=money(spent);$('totalNote').textContent=`sur ${money(budget)} de budget (hors épargne)`;$('openingBalance').textContent=money(data.settings.openingBalance);
 $('incomeMetric').textContent=money(income);$('savingMetric').textContent=money(savings);$('exceptionMetric').textContent=money(exceptional);$('remainingMetric').textContent=money(Number(data.settings.openingBalance)+income-spent-savings);
 let active=data.categories.filter(c=>c.type==='expense'&&expenses.some(t=>t.category===c.name&&Number(t.amount)!==0));
 $('categoryCards').innerHTML=active.map(c=>{let v=expenses.filter(t=>t.category===c.name).reduce((s,t)=>s+t.amount,0),p=c.budget?Math.round(v/c.budget*100):0;return `<div class="card category"><div class="cat-head"><div class="cat-name"><span class="emoji">${esc(c.emoji)}</span><span>${esc(c.name)}</span></div><span class="pct">${p}%</span></div><div class="bar"><i style="width:${Math.min(100,Math.max(0,p))}%"></i></div><div class="cat-foot"><b class="cat-spent">${money(v)}</b><span class="cat-budget">budget <u>${money(c.budget)}</u></span></div></div>`}).join('');
 $('noCategories').hidden=active.length>0;
 let groups=data.categories.filter(c=>c.type==='expense').map(c=>({c,items:expenses.filter(t=>t.category===c.name)})).filter(g=>g.items.length);
 $('expenseDetails').innerHTML=groups.length?groups.map(g=>`<div class="detail-group"><div class="detail-head"><span>${esc(g.c.emoji)} ${esc(g.c.name)}</span><span>${money(g.items.reduce((s,t)=>s+t.amount,0))}</span></div><div class="transactions">${g.items.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(t=>`<div class="tx"><div><div class="tx-label">${esc(t.label||g.c.name)}</div><div class="tx-date">${new Date(t.date+'T12:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div></div><div class="tx-right">${money(t.amount)}<button class="icon-btn" onclick="removeTx('${t.id}')">×</button></div></div>`).join('')}</div></div>`).join(''):'<div class="empty">Aucune dépense pour ce mois.</div>';
 $('salary').value=data.settings.salary;$('pension').value=data.settings.pension;$('caf').value=data.settings.caf;$('opening').value=data.settings.openingBalance;$('savingGoal').value=data.settings.savingGoal;$('density').value=data.settings.density;
 $('categoryManager').innerHTML=data.categories.map(c=>`<div class="category-manage"><span>${esc(c.emoji)}</span><div class="grow"><b>${esc(c.name)}</b><small>${c.type==='expense'?'Dépense · budget '+money(c.budget):'Ajout / revenu'}</small></div><button class="icon-btn" onclick="editCategory('${esc(c.name)}')">✎</button><button class="icon-btn" onclick="deleteCategory('${esc(c.name)}')">×</button></div>`).join('');
 document.querySelectorAll('.theme-dot').forEach(b=>b.classList.toggle('active',b.dataset.theme===data.settings.theme));
 applyAppearance();
}
function applyAppearance(){
 const themes={cream:['#f7f3e9','#fffefa','#1c2a22','#68746c','#37664e','#d4875d','#ded9cc','#eee7d6'],dark:['#171b19','#232a26','#f3f1e9','#b8c0ba','#497b5e','#cf855d','#39443e','#303a34'],pink:['#fbf0f2','#fffafb','#34252d','#806d77','#a85d79','#c98769','#e8d5dd','#f2e1e7'],blue:['#eef4f8','#ffffff','#1d2d3c','#647687','#356789','#c47f55','#d3e0e9','#e1ebf2']};
 let v=themes[data.settings.theme]||themes.cream,root=document.documentElement;['--bg','--card','--ink','--muted','--primary','--accent','--line','--soft'].forEach((k,i)=>root.style.setProperty(k,v[i]));
 root.style.setProperty('--scale',data.settings.density==='large'?1.08:data.settings.density==='normal'?1:0.94);
 document.querySelector('meta[name="theme-color"]').content=v[0];
}
function shiftMonth(n){let d=new Date(month+'-02T12:00:00');d.setMonth(d.getMonth()+n);month=d.toISOString().slice(0,7);render()}
function showModal(title,html,fn){$('modalTitle').textContent=title;$('modalBody').innerHTML=html;$('modalSave').onclick=fn;$('modal').classList.add('open')}
function closeModal(){$('modal').classList.remove('open')}
function openTransaction(){
 let kind='expense';
 const form=()=>{let cats=data.categories.filter(c=>c.type===kind);$('txCategory').innerHTML=cats.map(c=>`<option value="${esc(c.name)}">${esc(c.emoji)} ${esc(c.name)}</option>`).join('')||'<option value="">Aucune catégorie</option>'};
 showModal('Ajouter une opération',`<div class="switch"><button id="txExp" class="active" type="button">Dépense</button><button id="txInc" type="button">Ajout / revenu</button></div><div class="field"><label>Montant (€)</label><input id="txAmount" type="number" min="0" step=".01" placeholder="0,00"></div><div class="field"><label>Catégorie</label><select id="txCategory"></select></div><div class="field"><label>Description</label><input id="txLabel" placeholder="Ex. Courses Carrefour"></div><div class="field"><label>Date</label><input id="txDate" type="date" value="${today()}"></div><button type="button" class="btn secondary" onclick="openCategory(true)">＋ Créer une catégorie</button>`,()=>{let a=Number($('txAmount').value),cat=$('txCategory').value;if(!(a>0)||!cat)return alert('Indique un montant et une catégorie.');data.transactions.push({id:crypto.randomUUID(),amount:a,category:cat,label:$('txLabel').value,date:$('txDate').value,kind});closeModal();persist()});
 $('txExp').onclick=()=>{kind='expense';$('txExp').classList.add('active');$('txInc').classList.remove('active');form()};
 $('txInc').onclick=()=>{kind='income';$('txInc').classList.add('active');$('txExp').classList.remove('active');form()};form();
}
function openCategory(fromTx=false,name=null){
 let existing=data.categories.find(c=>c.name===name),kind=existing?.type||'expense';
 showModal(existing?'Modifier la catégorie':'Nouvelle catégorie',`<div class="field"><label>Type</label><div class="switch"><button id="cExp" class="${kind==='expense'?'active':''}" type="button">Dépense</button><button id="cInc" class="${kind==='income'?'active':''}" type="button">Ajout / revenu</button></div></div><div class="field"><label>Nom</label><input id="cName" value="${esc(existing?.name||'')}" placeholder="Ex. Santé"></div><div class="field"><label>Emoji associé</label><input id="cEmoji" maxlength="8" value="${esc(existing?.emoji||'')}" placeholder="🩺"></div><div class="field" id="cBudgetField"><label>Budget mensuel (€)</label><input id="cBudget" type="number" min="0" step=".01" value="${existing?.budget||0}"></div><label><input id="cExceptional" type="checkbox" ${existing?.exceptional?'checked':''}> Dépense exceptionnelle</label>`,()=>{let n=$('cName').value.trim();if(!n)return alert('Donne un nom à la catégorie.');let duplicate=data.categories.some(c=>c.name.toLowerCase()===n.toLowerCase()&&c.name!==name);if(duplicate)return alert('Cette catégorie existe déjà.');if(existing){existing.name=n;existing.emoji=$('cEmoji').value||'📌';existing.type=kind;existing.budget=kind==='expense'?Number($('cBudget').value)||0:0;existing.exceptional=kind==='expense'&&$('cExceptional').checked;data.transactions.forEach(t=>{if(t.category===name)t.category=n})}else data.categories.push({name:n,emoji:$('cEmoji').value||'📌',type:kind,budget:kind==='expense'?Number($('cBudget').value)||0:0,exceptional:kind==='expense'&&$('cExceptional').checked});closeModal();persist();if(fromTx)openTransaction()});
 const set=k=>{kind=k;$('cExp').classList.toggle('active',k==='expense');$('cInc').classList.toggle('active',k==='income');$('cBudgetField').style.display=k==='expense'?'grid':'none';$('cExceptional').disabled=k==='income'};
 $('cExp').onclick=()=>set('expense');$('cInc').onclick=()=>set('income');set(kind);
}
function editCategory(name){openCategory(false,name)}
function deleteCategory(name){if(!confirm(`Supprimer la catégorie « ${name} » ? Les opérations existantes seront conservées mais ne seront plus classées.`))return;data.categories=data.categories.filter(c=>c.name!==name);persist()}
function saveSettings(){data.settings.salary=Number($('salary').value)||0;data.settings.pension=Number($('pension').value)||0;data.settings.caf=Number($('caf').value)||0;data.settings.openingBalance=Number($('opening').value)||0;data.settings.savingGoal=Number($('savingGoal').value)||0;persist();alert('Paramètres enregistrés.')}
function saveAppearance(){data.settings.theme=document.querySelector('.theme-dot.active')?.dataset.theme||'cream';data.settings.density=$('density').value;persist();alert('Apparence mise à jour.')}
document.querySelectorAll('.theme-dot').forEach(b=>b.onclick=()=>{document.querySelectorAll('.theme-dot').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
function exportJSON(){let blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='mon-budget-sauvegarde-'+today()+'.json';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)}
$('importJSON').addEventListener('change',async e=>{let f=e.target.files[0];if(!f)return;try{let obj=JSON.parse(await f.text());if(!obj.categories||!obj.transactions||!obj.settings)throw Error('format');if(!confirm('Importer cette sauvegarde remplacera les données actuelles. Continuer ?'))return;data=obj;persist();alert('Sauvegarde importée avec succès.')}catch{alert('Fichier JSON invalide ou incompatible.')}e.target.value=''});
function resetAll(){if(!confirm('Effacer toutes les données et revenir aux paramètres initiaux ? Exporte d’abord une sauvegarde JSON.'))return;data=clone(seed);persist()}
function removeTx(id){if(confirm('Supprimer cette opération ?')){data.transactions=data.transactions.filter(t=>t.id!==id);persist()}}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$(b.dataset.page).classList.add('active')});
render();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));