let display = document.querySelector('#btnDisplay');
let push = document.querySelector('#btnPush');

let information = [];

push.addEventListener('click',(e) => {
    let firstName = document.querySelector('#firstName');
    e.preventDefault();
    information.push(firstName.value);
});

display.addEventListener('click',(e) => {
    e.preventDefault();
    firstName.value = '';
    console.clear();
    console.table(information)
});




