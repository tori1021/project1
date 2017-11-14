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
//*Ќапишите нам*
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
//*конец Ќапишите нам*
//*переключатели слайдера*
var label1=document.querySelector('#lbl1');
var label2=document.querySelector('#lbl2');
var label3=document.querySelector('#lbl3');
var Decor=document.querySelectorAll('.decoration');

label1.addEventListener('click',function(){
    Decor[0].style.background='white';
    Decor[1].style.background='none';
    Decor[2].style.background='none';
});
label2.addEventListener('click',function(){
    Decor[0].style.background='none';
    Decor[1].style.background='white';
    Decor[2].style.background='none';
});
label3.addEventListener('click',function(){
    Decor[0].style.background='none';
    Decor[1].style.background='none';
    Decor[2].style.background='white';
});
//*конец переключатели слайдера*

//*каталог*
var element1=document.querySelector('.element1');
var element2=document.querySelector('.element2');
var element3=document.querySelector('.element3');

element1.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    element1.getElementsByTagName('img')[0].classList.add('hover-products');
});
element1.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    element1.getElementsByTagName('img')[0].classList.remove('hover-products');
});
element1.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    element1.getElementsByTagName('img')[0].classList.add('hover-products');
    element1.style.opacity='0.5';
});
element1.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    element1.style.opacity='1';
});
element2.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    element2.getElementsByTagName('img')[0].classList.add('hover-products');
});
element2.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    element2.getElementsByTagName('img')[0].classList.remove('hover-products');
});
element2.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    element2.getElementsByTagName('img')[0].classList.add('hover-products');
    element2.style.opacity='0.5';
});
element2.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    element2.style.opacity='1';
});
element3.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    element3.getElementsByTagName('img')[0].classList.add('hover-products');
});
element3.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    element3.getElementsByTagName('img')[0].classList.remove('hover-products');
});
element3.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    element3.getElementsByTagName('img')[0].classList.add('hover-products');
    element3.style.opacity='0.5';
});
element3.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    element3.style.opacity='1';
});
//*конец каталог* 