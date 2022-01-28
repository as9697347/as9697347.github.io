function bd(d){
return document.getElementById(d);
}
bd('old').style.display='none';
bd('but').onclick=function(){
bd('but').classList.toggle('move');
bd('menu').classList.toggle('view');
/*if(!bd('box').classList.contains('show')){bd('box').classList.toggle('show');
}else{setTimeout(function(){bd('box').classList.toggle('show')},1001);}*/
}
bd('bmode').onclick=bmode;
function bmode(t=true){
if(!window.localStorage.getItem('c')){window.localStorage.setItem('c', '1');}
if(t){
if (bd('checkbox').checked){bd('mode').style.display='block';window.localStorage.setItem('c', '1');}
else{bd('mode').style.display='none';window.localStorage.setItem('c', '0');}
}else{
if (window.localStorage.getItem('c')=='1'){bd('checkbox').checked=true;bd('mode').style.display='block';}
else{bd('checkbox').checked=false;bd('mode').style.display='none';}
}
}
bmode(false);
mauto(false);
bd('mauto').onclick=mauto;
function mauto(t=true){
if(t){
if (bd('bauto').checked){window.localStorage.setItem('a','1');}
else{window.localStorage.setItem('a','0');}
}
if (window.localStorage.getItem('a')=='1'){bd('bauto').checked=true;
var h=new Date().getHours();
if((h>=19)||(h>=6)){window.localStorage.setItem('mode','1');}
else{window.localStorage.setItem('mode','0');}
mode();
}
else{bd('bauto').checked=false;}
}
bd('set').onclick=function(){bd('setl').classList.toggle('sety');};
bd('msg').onclick=function(){bd('con').classList.toggle('sm');};
bd('send').onclick=sendm;
function sendm(){
if(!window.navigator.onLine){window.alert('تأكد من أتصالك في الانترنت ثم حاول مجدداً');return false;}
var e=bd('email').value;
var m=bd('masg').value;
if(e.length<6){window.alert('يرجى كتابة بريد إلكتروني صحيح');return false;}
if(e.indexOf("@")<0){window.alert('يرجى كتابة بريد إلكتروني صحيح');return false;}
if(m.length<10){window.alert('يبدو انك كتبت رسالة بعدد احرف قليل');return false;}
if(m.length>300){window.alert('لا يسمح لان تكون الرسالة أكثر من 300 حرف!');return false;}
bd('spn').style.display='block';bd('mt').innerHTML='جاري الارسال';
Hi=hi();
document.cookie='from='+Hi;
$.ajax({
    url: "hash.php", 
    method: 'POST',
    data:{'token': Hi, 'from': e, 'msg': m},
    xhrFields: {
        withCredentials: true
     },
    success: function(data) {
      bd('spn').style.display='none';bd('mt').innerHTML='تم الأرسال بنجاح';
}
}).done(function(){setTimeout(function(){bd('spn').style.display='none';bd('mt').innerHTML='أرسال';}, 1000);});
}
bd('share').onclick=function(){
const shareData = {
    title: 'Hash Kill',
    text: "يساعدك موقع فك التشفير أو التشفير عبر الإنترنت MD5 هذا على تشفير او فك تشفير سلسلة إدخال في سلسلة MD5 ثابتة 128 بت، حر MD5 فك التشفير ، مجانا القطعة MD5 ، أدوات MD5 مجانا ، والتشفير MD5 ، الكراك MD5 ، بحث MD5 ، مدقق MD5 ، فك تشفير MD5 سريع ومجاني\n",
    url: "http://hash-kill.epizy.com"
  };
try{window.navigator.share(shareData)}
catch(e){
bd('sB').classList.toggle('btv')
var t=shareData.text;var u=shareData.url;
var s1='http://www.facebook.com/share.php?v=4&src=bm&u='+u+'&t='+t;
var s2='http://twitter.com/share?url='+u;
var s3='http://pinterest.com/pin/create/button/?url='+u+'&description='+t;
var s4='whatsapp://send?text='+t+u;
var s5='https://reddit.com/submit?url='+u+'&title='+t;
var s6='http://linkedin.com/sharing/share-offsite/?url='+u;
bd('s1').onclick=function(){window.location.href=s1};
bd('s2').onclick=function(){window.location.href=s2};
bd('s3').onclick=function(){window.location.href=s3};
bd('s4').onclick=function(){window.location.href=s4};
bd('s5').onclick=function(){window.location.href=s5};
bd('s6').onclick=function(){window.location.href=s6};
}
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'ar'}, 'google_translate_element');
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function add(k,v){
var x=bd('table');
var y=document.createElement('tr');
var z=document.createElement('td');
var z2=document.createElement('td');
var d=document.createElement('div');
var d2=document.createElement('div');
d.innerHTML=v;
d2.innerHTML=k;
z.appendChild(d);
z2.appendChild(d2);
y.appendChild(z);
y.appendChild(z2);
x.appendChild(y);
return y;
}
var old=[];
function addlist(raw){
for(i=0;i<old.length;i++){try{bd('table').removeChild(old[i]);}catch(e){}}
ls=raw.split('\n');
for(i=0;i<ls.length;i++){var w=ls[i].split(':=:');if(w[1]!=undefined){old[i]=add(w[0], w[1])}}
}
var clr;
function refresh(){
if(window.navigator.onLine){
try{bd('table').removeChild(clr);}catch(e){}
Hi=hi();
document.cookie='from='+Hi;
$.ajax({
    url: "hash.php", 
    method: 'POST',
    data:{'token': Hi, 'type': 'get'},
    xhrFields: {
        withCredentials: true
     },
    success: function(data) {
      addlist(data);
}
});}else{
try{bd('table').removeChild(clr);}catch(e){};
clr=document.createElement('tr');
var td=document.createElement('td');
td.innerHTML='لا يوجد أتصال';
var td2=document.createElement('td');
td2.innerHTML='بالانترنت';
clr.appendChild(td);
clr.appendChild(td2);
bd('table').appendChild(clr);
}
setTimeout('refresh()', 5000);
}
mode();
function mode(){
var name=['main', 'main', 'menu', 'input', 'mode', 'table', 'email', 'masg', 'google_translate_element'];
if(window.localStorage.getItem('mode')=='1'){
for(var n=0;n<2;n++){
var cl=document.getElementsByTagName(['circle', 'rect'][n]);for(var i=0;i<cl.length;i++){cl[i].style.fill='#474747';}
}
bd(name[4]).style.boxShadow="0px 0px 10px rgba(255, 255, 255, .5)";
bd('moon').style.display='none';
bd('sun').style.display='block';
for(i=0;i < name.length;i++){
bd(name[i]).style.backgroundColor='#474747';
bd(name[i]).style.color='#fff';}
}else{
for(var n=0;n<2;n++){
var cl=document.getElementsByTagName(['circle', 'rect'][n]);for(var i=0;i<cl.length;i++){cl[i].style.fill='#FFFFFF';}
}
bd('moon').style.display='block';
bd('sun').style.display='none';
bd(name[4]).style.boxShadow="0px 0px 3px rgba(0, 0, 0, .3)";
for(i=0;i < name.length;i++){
bd(name[i]).style.backgroundColor='#fff';
bd(name[i]).style.color='#000018';}
}
bd(name[3]).style.background='none';
}
bd('mode').onclick=function(){
if(window.localStorage.getItem('mode')=='1'){window.localStorage.setItem('mode','0');}
else{window.localStorage.setItem('mode','1');}
mode();
};
function clp(text){
	var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}
function copy(text){
try{navigator.clipboard.writeText(text);}
catch (e){clp(text);}
}
function hi(){
return new Date().getTime();
}

bd('input').addEventListener("mouseover", function(){bd('ds').classList.add('ds-top');di(false);input()});
bd('input').addEventListener("mouseout", function(){if(bd('input').value.length==0){bd('ds').classList.remove('ds-top');}else{di(true);}});
bd('bclose').onclick=function(){err(false)};
function di(s){
if (s){bd('del').style.display='block';}
else{bd('del').style.display='none';}
}
bd('del').onclick=function (){di(false);bd('input').value='';bd('ds').classList.remove('ds-top');};
function input(){
t=bd('input');
if(t.value.length>14){
t.style.fontSize='14px';
}
else{t.style.fontSize='30px';}
setTimeout(input, 10);
}
function err(s,e=''){
if(s){
bd('error').innerHTML=e;
bd('be').style.display='block';
}else{
bd('be').style.display='none';}
}
function sym(z){
var x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
for(var i=0;i<x.length;i++){
z=z.split(x[i]).join('');
}
if(z.length!=0){return true;};
}
function check(){
if(bd('input').value.length==0){err(true, 'يبدو أنك لم تدخل شيئاً');return true;}
else{err(false);}}
bd('cop').onclick=cop;
bd('buttonRight').onclick=dehash;
bd('buttonLeft').onclick=enhash;

function cop(){
copy(bd('get').innerHTML);
}

function dehash(){
if(check()){return false;}
var v=bd('input').value;
if((v.length!=32)||(sym(v))){err(true, 'يرجى أدخال هاش من نوع MD5');return false;}
else{err(false);}
if(!window.navigator.onLine){
err(true, 'يرجى التأكد من الاتصال في الانترنت والمحاولة لاحقا');return false;
}else{err(false);}
bd('seid').style.display='block';
bd('sus').classList.remove('red');bd('sus').classList.remove('green');
Hi=hi();
document.cookie='from='+Hi;
$.ajax({
    url: "hash.php", 
    method: 'POST',
    data:{'hash': v, 'token': Hi, 'type': 'de'},
    xhrFields: {
        withCredentials: true
     },
    success: function(data) {
      bd('seid').style.display='none';
      if(data.length>0){
      	bd('get').innerHTML=data;
      	bd('sus').classList.add('green');
      }else{
      	bd('get').innerHTML='لم يتم العثور على الهاش :(';
      	bd('sus').classList.add('red');
      }
}
});
}
refresh();
function enhash(){
if(check()){return false;}
var v=bd('input').value;
if(!window.navigator.onLine){
err(true, 'يرجى التأكد من الاتصال في الانترنت والمحاولة لاحقا');return false;
}else{err(false);}
bd('seid').style.display='block';
bd('sus').classList.remove('red');bd('sus').classList.remove('green');
bd('get').style.fontSize='15px';
Hi=hi();
document.cookie='from='+Hi;
$.ajax({
    url: "hash.php", 
    method: 'POST',
    data:{'hash': v, 'token': Hi, 'type': 'en'},
    xhrFields: {
        withCredentials: true
     },
    success: function(data) {
      bd('seid').style.display='none';
      bd('get').innerHTML=data;
      bd('sus').classList.add('green');
}
});
}
bd('read').onclick=function(){bd('read').style.display='none';bd('abu').classList.add('abu')};
try{
if('serviceWorker' in window.navigator) {
  window.navigator.serviceWorker.register('/sw-22.js').then(function() { console.log("Service Worker Registered"); });
}
}catch(e){}