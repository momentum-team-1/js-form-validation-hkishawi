// console.log('Add validation!');

//You will write JavaScript to validate this form. When the "Make Reservation" button is clicked, you should check the values of each field and make sure they are valid. If not, you have to visually alert the user to that fact.

//TRIAL 1
// const form = document.getElementById('#parking-form')
// const name = document.getElementById('#name')
// form.addEventListener('submit', function(){
    //check for text; validating if this is blank 
    //are these letters?
    //cc: are there numbers?? if there are numbers
// });
// while ((error= error.nextS))
// consolelog("Add your name")

//TRIAL 2  not exactly sure why this one doesn't work. Pretty ID to class example...
let form = document.querySelector("#parking-form")
let formIsValid //<<why have this here?

form.addEventListener('submit',function(event) {
    event.preventDefault(); 
    remove.ErrorMessage();
    formIsValid = true
})

function validateName () {
    let nameField = document.getElementbyID('#name')
    //grabbing name
    let nameInput = nameField.value;
    //variable for name that is input
    let parentEl = nameField.parentElement; 
    //where the variable will go when the name is inputted

    if (nameInput) {
    //telling machine to do this if valid
    console.log('name is valid')
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
    } else {
        console.log('name is NOT valid')
        //else not valid then invalid 
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        formIsValid=false
        }
};

function validateCarYear() {
    let carYear = document.getElementbyID("#car-year")
    let year = carYear.value
    let parentEl = carYear.parentElement

    if (year) {
        console.log('year is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    } else {
        console.log('year is NOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('year is NOT valid')
        formIsValid = false
    }
};

function validateCarMake() {
    let carMake = document.getElementbyID ("#car-make")
    let make = carMake.value
    let parentEl = carMake.parentElement

    if (make) {
        console.log('make is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    } else {
        console.log('year is NOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('year is NOT valid')
        formIsValid = false
    }
};

function showError() {
    if (name.validity.valueMissing){
        nameError.textContent = "enter your name";
    }
    if (year.validity.valueMissing){
        yearError.textContent = "enter car year";
    }   
    if (make.validity.valueMissing){
        makeError.textContent = "enter car make";
    }
    }
}

//TRIAL 3 
// const form = document.getElementById('parking-form')[0];

// const name = document.getElementById('car-field');
// const nameError = document.querySelector('#car-field + span.error');

// name.addEventListener('input', function(event) {
//     if (name.validity.valid) {
//         nameError.innerHTML = '';
//         nameError.className = 'error';
//     } else {
//         showError();
//     }
// });

// form.addEventListener('submit', function(event) {
//     if(!name.validity.valid) {
//         showError();
//         event.preventDefault();
//     }
// });
// function showError() {
//     if(name.validity.valueMissing) {
//         email.Error.textContent = 'You need to enter name';
//     } else if (name.validity.)
// }