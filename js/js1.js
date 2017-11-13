//*окно авторизации*
var link=document.querySelector('.account');
var popupMenu=document.querySelector('.authorization-window');
var esc=document.querySelector('.exit');
link.addEventListener('click', function (evt){
    evt.preventDefault();
    popupMenu.classList.add('show');
});
window.addEventListener('keydown', function (evt){
    if (evt.keyCode===27) {
        popupMenu.classList.remove('show');
    }
});
esc.addEventListener('click', function (evt){
    evt.preventDefault();
    popupMenu.classList.remove('show');
});
//*конец окно авторизации*
//*Напишите нам*
var sub=document.querySelector('#WriteUs');
var popupWriteUs=document.querySelector('.write_us-window');
var close=document.querySelector('.close');
sub.addEventListener('click', function (evt){
    evt.preventDefault();
    popupWriteUs.classList.add('show');
});
window.addEventListener('keydown', function (evt){
    if (evt.keyCode===27) {
        popupWriteUs.classList.remove('show');
    }
});
close.addEventListener('click', function (evt){
    evt.preventDefault();
    popupWriteUs.classList.remove('show');
});
//*конец Напишите нам*
//*переключатели слайдера*
var label1=document.querySelector('#label1');
var label2=document.querySelector('#label2');
var label3=document.querySelector('#label3');
var Decoration=document.querySelectorAll('.Decoration');

label1.addEventListener('click',function(){
    Decoration[0].style.background='white';
    Decoration[1].style.background='none';
    Decoration[2].style.background='none';
});
label2.addEventListener('click',function(){
    Decoration[0].style.background='none';
    Decoration[1].style.background='white';
    Decoration[2].style.background='none';
});
label3.addEventListener('click',function(){
    Decoration[0].style.background='none';
    Decoration[1].style.background='none';
    Decoration[2].style.background='white';
});
//*конец переключатели слайдера*