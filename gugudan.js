//Math.random()*9를 통해 1자릿수의 숫자를 가진 문자를 만들고
//그 문자형태의 숫자를 Math.ceil을 통해 정수형으로 바꿔준다.
var a = Math.ceil(Math.random()*9);
var b = Math.ceil(Math.random()*9);


var Hdiv = document.createElement('div');

var Hinput2 = document.createElement('input');

var Hform2 = document.createElement('form');

var Hbtn = document.createElement('button');

document.body.append(Hdiv);
Hdiv.append(a);
Hdiv.append('*');
Hdiv.append(b);

document.body.append(Hform2);
Hform2.append(Hinput2);
Hform2.append(Hbtn);

Hbtn.textContent = 'ok';

Hform2.addEventListener('submit', function call(e){
    
    //preventDefault를 통해 기존의 form을 누르면 새로고침되는 기능을 없애놓는다.
    e.preventDefault();
    var result = a*b;

    if(Number(Hinput2.value) === result){
        alert('right');
        Hinput2.value = '';
        Hinput2.focus();
        Hdiv.textContent = '';
    }else {
        alert('false');
        Hinput2.value = '';
        Hinput2.value = '';
        Hinput2.focus();
        Hdiv.textContent = '';
    }

    //if-else문이 끝나면 다시 변수a와b를 생성해놓으므로써 새로운 문제를 출제하게되고
    //한문제 뿐만이 아니라 이어서 다음문제도 계속해서 풀어나갈수있다.
    a = Math.ceil(Math.random()*9);
    b = Math.ceil(Math.random()*9);
    Hdiv.append(a);
    Hdiv.append('*');
    Hdiv.append(b);

});