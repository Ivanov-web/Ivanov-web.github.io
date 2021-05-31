'use strict'
// icon show password
function showPassword(){
    let btnEye = document.querySelector('.login-form__label_pass__btn'),
          inputPass = document.querySelector('.login-form__input_pass');
    

        btnEye.addEventListener('click', ()=>{
        btnEye.classList.toggle('active');

        if (inputPass.getAttribute('type') == 'password') {
            inputPass.setAttribute('type', 'text')
        } else{
            inputPass.setAttribute('type', 'password')
        }
    })
}
showPassword();

// tabs
function tab() {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
          tabContent = document.querySelectorAll('.tab'),
          tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};
tab();

// register localStorage
const form = document.querySelector('.login-form_local'),
      inputEmail1 = document.querySelector('#email1'),
      inputPass1 = document.querySelector('#pass1'),
      btn1 = document.querySelector('#btn1');

const inputLogin2 = document.querySelector('#login2'),
      inputEmail2 = document.querySelector('#email2'),
      inputPass21 = document.querySelector('#pass2_1'),
      inputPass22 = document.querySelector('#pass2_2'),
      btn2 = document.querySelector('#btn2');


btn2.addEventListener('click', (event)=>{
    event.preventDefault();
    let obj = {
        login:inputLogin2.value,
        email:inputEmail2.value,
        password:inputPass21.value,
    }

    if(inputPass21.value === inputPass22.value){
        let i = localStorage.length;
        localStorage.setItem(`user${i}`, JSON.stringify(obj));

       


        alert(`Поздравляем ${obj.login}, вы успешно зарегистрировались!`);
        form.reset();
    } else{
        alert('Пароли не совпадают');
    }
})

// checkig email&pass
btn1.addEventListener('click', (event)=>{
    event.preventDefault();
    for (let i = 0; i < localStorage.length; i++) {       
        let key = localStorage.key(i);
        
        let parseUser = JSON.parse(localStorage.getItem(key));
       
        if (inputEmail1.value == parseUser.email && inputPass1.value === parseUser.password){
            alert("Вы успешно авторизировались!") /* continue */;}
        // } if else{
        //     alert('Имейл или пароль введены неправильно, попробуйте еще раз!');
        // }
    }
});


// __________
// const inputLogin2 = document.querySelector('#login2'),
//       inputPass2 = document.querySelector('#pass2'),
//       btn2 = document.querySelector('#btn2');

// inputLogin2.addEventListener('input',()=>{
//     const request = new XMLHttpRequest();

//     request.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', ()=>{
//          if (request.status === 200) {
//             console.log(request.response);
//             // const data2 = JSON.parse(request.response);
//          }
//          else {
//             //  alert("что-то пошло не так");
//              inputPass2.value = 'что-то пошло не так';
//          }
//     })
// });

// __________
// const forms = document.querySelectorAll('form');

// const message = {
//     loading: "Загрузка",
//     success: "Успех",
//     failure: "Что-то пошло не так"
// }

// forms.forEach (item =>{
//     postData(item);
// });

// function postData(form){
//     form.addEventListener('submit', (event)=>{
//         event.preventDefault();

//         const statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         statusMessage.textContent = message.loading;
//         form.append(statusMessage);

//         const request = new XMLHttpRequest();
//         request.open ('POST', 'server.php');

//         // request.setRequestHeader('Content-type', 'multipart/form-data');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         const  formData = new FormData(form);

//         const object = {};
//         formData.forEach(function(value, key){
//             object[key] = value;
//         });

//         const json = JSON.stringify(object);

//         request.send(json);

//         request.addEventListener('load', ()=>{
//             if (request.status === 200){
//                 console.log(request.response);
//                 statusMessage.textContent = message.success;
//                 form.reset();
//                 setTimer( ()=>{
//                     statusMessage.remove();
//                 }, 2000);
//                 } else{
//                 statusMessage.textContent = message.failure;
//             }
//         })
//     })
// }

// __________