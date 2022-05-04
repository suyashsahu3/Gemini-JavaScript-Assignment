// getting all elements by ids for validation
let form = document.getElementById('form');
let name = document.getElementById('inName');
let mail = document.getElementById('inMail');
let number = document.getElementById('number');


// defining error function
const setError = (ele) => {
    ele.classList.add('invalid');
    ele.nextElementSibling.classList.remove('hidden');

}
const resetError = (ele) => {
    ele.classList.remove('invalid');
    ele.nextElementSibling.classList.add('hidden');
}

// defining validations

//validation for email
const isValidEmail = (mail) => {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
    return regex.test(mail);
}
const validateEmail = () => {
    resetError(mail);
    if(!isValidEmail(mail.value)){
        setError(mail);
    }
}
mail.addEventListener('input', () => {
    validateEmail();
});

//validation for name

const isValidName = (name) => {
    const a = /^[a-z ]+$/i;
    return a.test(name);
}
const validateName = () => {
    resetError(name);
    if(!isValidName(name.value)){
        setError(name);
    }
}
name.addEventListener('input', () => {
    validateName();
});
//validation for number

 const isValidNumber = (number) => {
    const n = /^[6789]\d{9}$/;
    if(number.length == 0){
        return true;
    }
    else{
        return n.test(number);
    }

}
const validateNumber = () => {
    resetError(number);
    if(!isValidNumber(number.value)){
        setError(number);
    }
}
number.addEventListener('input', () => {
    validateNumber();
});

// initializing table tags

var table = document.getElementById('#table');
var tbody = document.querySelector('#tableBody');

//function for storing data in local storage


const submitForm = (e) => {
    e.preventDefault();

    if(isValidEmail(mail.value) && isValidName(name.value) && isValidNumber(number.value)){
        
    console.log('Called submitForm');

    var info = {
        "Name" : name.value,
        "Email" : mail.value,
        "Number" : number.value
    }
    
    console.log(info);
    var array = JSON.parse(localStorage.getItem('contactDeatil') || '[]');
    array.push(info);
    localStorage.setItem('contactDeatil', JSON.stringify(array));
    var data = JSON.parse(localStorage.getItem('contactDeatil'));
    show(data);
    }
    else{
        alert('Please enter correct details');
    }
}
form.addEventListener('submit', submitForm);

//function for fetching data from local storage



console.log(data);
console.log(data[1]);

function show(data){
    // for(var j=data.length-4;j<=data.length;j++){
        var j = data.length-1;
        var row = document.createElement('tr');
    
            var cell = document.createElement('td');
            var cellText = document.createTextNode(j+1);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement('td');
            var cellText = document.createTextNode(data[j].Name);
            cell.appendChild(cellText);
            row.appendChild(cell);
            
            var cell = document.createElement('td');
            var cellText = document.createTextNode(data[j].Email);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement('td');
            var cellText = document.createTextNode(data[j].Number);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
        tbody.appendChild(row);
    // }
}

