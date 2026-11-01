const $=id=>document.getElementById(id);
const fmt=n=>new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(Number(n)||0);
const today=()=>new Date().toISOString().slice(0,10);
let month=today().slice(0,7);
const initial={openingBalance:0,income:[],categories:[
{name:'Courses',emoji:'🛒',type:'expense',budget:300,exceptional:false},
{name:'Transports',emoji:'🚇',type:'expense',budget:200,exceptional:false},
{name:'Restaurants',emoji:'🍽️',type:'expense',budget:80,exceptional:false},
{name:'Saxophone',emoji:'🎷',type:'expense',budget:80,exceptional:false},
{name:'Plaisirs / autres',emoji:'✨',type:'expense',budget:350,exceptional:false},
{name:'Charges fixes',emoji:'🏠',type:'expense',budget:220,exceptional:false}
],transactions:[],savings:[]};
let data;
try{data=JSON.parse(localStorage.getItem('monBudgetDataV2'));if(!data){let old=JSON.parse(localStorage.getItem('monBudgetData')||'null');data=structuredClone(initial);if(old){data.categories=(old.budgets||initial.categories.map(c=>({...c}))).map(b=>({name:b.name,emoji:'📌',type:'expense',budget:Number(b.amount)||0,exceptional:false}));data.transactions=(old.expenses||[]).map(x=>({...x,kind:'expense'}));data.income=[{label:'Salaire',amount:2200,date:today()},{label:'Pension',amount:250,date:today()},{label:'CAF',amount:200,date:today()}];data.savings=(old.savings||[]).map(x=>({...x,kind:'saving'}));}}}catch{data=structuredClone(initial)}
function save(){localStorage.setItem('monBudgetDataV2',JSON.stringify(data));render()}
function monthTransactions(kind){return data.transactions.filter(t=>t.date?.slice(0,7)===month&&(!kind||t.kind===kind))}
function monthIncome(){return data.income.filter(x=>x.date?.slice(0,7)===month).reduce((s,x)=>s+Number(x.amount),0)}
function monthSavings(){return data.savings.filter(x=>x.date?.slice(0,7)===month).reduce((s,x)=>s+Number(x.amount),0)}
function monthExpenses(){return monthTransactions('expense')}
function totalExpenses(){return monthExpenses().reduce((s,x)=>s+Number(x.amount),0)}
function render(){
 const date=new Date(month+'-02T12:00:00');let title=date.toLocaleDateString('fr-FR',{month:'long',year:'numeric'});title=title.charAt(0).toUpperCase()+title.slice(1);
 $('monthTitle').textContent=title;$('monthTitle2').textContent=title;
 const ex=monthExpenses(),spent=totalExpenses(),budget=data.categories.filter(c=>c.type==='expense').reduce((s,c)=>s+Number(c.budget||0),0),income=monthIncome(),saving=monthSavings(),exception=ex.filter(t=>data.categories.find(c=>c.name===t.category)?.exceptional).reduce((s,t)=>s+t.amount,0);
 $('totalSpent').textContent=fmt(spent);$('totalNote').textContent=`sur ${fmt(budget)} de budget (hors épargne)`;$('openingBalance').textContent=fmt(data.openingBalance);
 $('incomeMetric').textContent=fmt(income);$('savingMetric').textContent=fmt(saving);$('exceptionMetric').textContent=fmt(exception);$('remainingMetric').textContent=fmt(data.openingBalance+income-spent-saving);
 const cards=data.categories.filter(c=>c.type==='expense'&&ex.some(t=>t.category===c.name&&Number(t.amount)!==0));
 $('categoryCards').innerHTML=cards.length?cards.map(c=>{let amount=ex.filter(t=>t.category===c.name).reduce((s,t)=>s+t.amount,0),pct=c.budget?Math.round(amount/c.budget*100):0;return `<div class="category-card"><div class="cat-head"><div class="cat-name"><span class="emoji">${esc(c.emoji)}</span><span>${esc(c.name)}</span></div><span class="pct">${pct} %</span></div><div class="bar"><i style="width:${Math.min(100,Math.max(0,pct))}%"></i></div><div class="cat-foot"><span class="cat-spent">${fmt(amount)}</span><span class="cat-budget">budget <u>${fmt(c.budget)}</u></span></div></div>`}).join(''):'<div class="empty">Aucune dépense enregistrée ce mois-ci. Appuie sur + pour commencer.</div>';
 const grouped=data.categories.filter(c=>c.type==='expense').map(c=>({c,items:ex.filter(t=>t.category===c.name)})).filter(g=>g.items.length);
 $('expenseDetails').innerHTML=grouped.length?grouped.map(g=>`<div class="detail-group"><div class="detail-group-head"><span>${esc(g.c.emoji)} ${esc(g.c.name)}</span><span>${fmt(g.items.reduce((s,t)=>s+t.amount,0))}</span></div><div class="transaction-list">${g.items.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(t=>`<div class="transaction"><div><div class="tx-label">${esc(t.label||g.c.name)}</div><div class="tx-date">${new Date(t.date+'T12:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div></div><div class="tx-right">${fmt(t.amount)}<button class="delete" onclick="removeTransaction('${t.id}')">×</button></div></div>`).join('')}</div></div>`).join(''):'<div class="empty">Aucune dépense pour ce mois.</div>';
}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shiftMonth(n){let d=new Date(month+'-02T12:00:00');d.setMonth(d.getMonth()+n);month=d.toISOString().slice(0,7);render()}
function openModal(title,html,fn){$('modalTitle').textContent=title;$('modalBody').innerHTML=html;$('modalSave').onclick=fn;$('modal').classList.add('open')}
function closeModal(){$('modal').classList.remove('open')}
function openTransaction(){
 const opts=data.categories.map(c=>`<option value="${esc(c.name)}">${esc(c.emoji)} ${esc(c.name)} — ${c.type==='expense'?'Dépense':'Ajout'}</option>`).join('');
 openModal('Ajouter une opération',`<div class="type-switch"><button id="kindExpense" class="active" type="button" onclick="setTxKind('expense')">Dépense</button><button id="kindIncome" type="button" onclick="setTxKind('income')">Ajout / revenu</button></div><div class="field"><label>Montant (€)</label><input id="txAmount" type="number" min="0" step=".01" placeholder="0,00"></div><div class="field"><label>Catégorie</label><select id="txCategory">${opts}</select></div><div class="field"><label>Description</label><input id="txLabel" placeholder="Ex. Courses Carrefour"></div><div class="field"><label>Date</label><input id="txDate" type="date" value="${today()}"></div><button type="button" class="add-category" onclick="openCategory(true)">＋ Créer une catégorie</button>`,()=>{let amount=Number($('txAmount').value),cat=data.categories.find(c=>c.name===$('txCategory').value),kind=window.txKind||'expense';if(!(amount>0)||!cat)return alert('Renseigne un montant et une catégorie.');if(cat.type!==kind)return alert('Choisis une catégorie du bon type.');data.transactions.push({id:crypto.randomUUID(),amount,category:cat.name,label:$('txLabel').value,date:$('txDate').value,kind});closeModal();save()});
 window.txKind='expense';
}
window.txKind='expense';
function setTxKind(kind){window.txKind=kind;$('kindExpense').classList.toggle('active',kind==='expense');$('kindIncome').classList.toggle('active',kind==='income');let list=data.categories.filter(c=>c.type===kind);$('txCategory').innerHTML=list.map(c=>`<option value="${esc(c.name)}">${esc(c.emoji)} ${esc(c.name)}</option>`).join('');if(!list.length)$('txCategory').innerHTML='<option value="">Aucune catégorie — crée-en une</option>'}
function openCategory(fromTx=false){
 openModal('Nouvelle catégorie',`<div class="field"><label>Type de catégorie</label><div class="type-switch"><button id="catExpense" class="active" type="button" onclick="setCatType('expense')">Dépense</button><button id="catIncome" type="button" onclick="setCatType('income')">Ajout / revenu</button></div></div><div class="field"><label>Nom</label><input id="catName" placeholder="Ex. Santé"></div><div class="field"><label>Emoji associé</label><input id="catEmoji" maxlength="8" placeholder="🩺"></div><div class="field" id="budgetField"><label>Budget mensuel (€)</label><input id="catBudget" type="number" min="0" step=".01" value="0"></div><div class="field"><label>Type de dépenses</label><select id="catExceptional"><option value="no">Dépense courante</option><option value="yes">Dépense exceptionnelle</option></select></div>`,()=>{let name=$('catName').value.trim(),emoji=$('catEmoji').value.trim()||'📌',type=window.catType||'expense';if(!name)return alert('Donne un nom à la catégorie.');if(data.categories.some(c=>c.name.toLowerCase()===name.toLowerCase()))return alert('Cette catégorie existe déjà.');data.categories.push({name,emoji,type,budget:type==='expense'?Number($('catBudget').value)||0:0,exceptional:type==='expense'&&$('catExceptional').value==='yes'});closeModal();save();if(fromTx)openTransaction()});
 window.catType='expense';
}
function setCatType(type){window.catType=type;$('catExpense').classList.toggle('active',type==='expense');$('catIncome').classList.toggle('active',type==='income');$('budgetField').style.display=type==='expense'?'grid':'none';$('catExceptional').disabled=type==='income'}
function removeTransaction(id){if(confirm('Supprimer cette opération ?')){data.transactions=data.transactions.filter(t=>t.id!==id);save()}}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));$(b.dataset.page).classList.add('active')});
render();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));