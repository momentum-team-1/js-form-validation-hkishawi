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
 
form.addEventListener('submit',function(event) {
    console.log('THIS IS RUNNING')
    event.preventDefault(); 
    validateName();
    validateCar();
    validateStart();
    validateDays();
    validateCredit();
    validateCvv();
    validateExpiry();
})

function validateName () {
    let nameField = document.querySelector('#name')
    //grabbing name
    let nameInput = nameField.value;
    //variable for name that is input; value that was typed into "name"
    let parentEl = nameField.parentElement; 
    //parent element the variable will go when the name is inputted
    if (nameInput) {
        //telling machine to do this if valid
        console.log('name is valid')
        parentEl.classList.remove('input-invalid')
        //removing this node when invalid; how can name be invalid? 
        parentEl.classList.add('input-valid')
}       else {
        console.log('name is NOT valid')
        //else not valid then invalid 
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')  
        }
};

function validateCar () {
    let carField = document.querySelector("#car-field")
    let carInput = carField.value
    let parentEl = carField.parentElement;
    if (carInput) {
        console.log("Car year is valid")
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    }   else {
        console.log('Car year is NOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
    }
};

function validateStart () {
    let startField = document.querySelector('#start-date')
    let startInput = startField.value;
    let parentEl = startField.parentElement;
    if (startInput) {
        console.log('start date is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
}       else {
        console.log('start date is NOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
    }
};


function validateDays () {
    let daysField = document.querySelector('#days')
    let daysInput = daysField.value;
    let parentEl = daysField.parentElement;
    if (daysInput) {
        console.log('days is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    }   else {
            console.log('days NOT valid')
            parentEl.classList.remove('input-valid')
            parentEl.classList.add('input-invalid')
        }
};   

function validateCredit () {
    let creditField = document.querySelector('#credit-card')
    let creditInput = creditField.value;
    let parentEl = creditField.parentElement;
    if (creditInput) {
        console.log('credit card is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    }   else {
            console.log('credit card is NOT valid')
            parentEl.classList.remove('input-valid')
            parentEl.classList.add('input-invalid')
        }
}; 

function validateCvv () {
    let cvvField = document.querySelector('#cvv')
    let cvvInput = cvvField.value;
    let parentEl = cvvField.parentElement;
    if (cvvInput) {
        console.log("CVV is valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add('input-valid')
    } else {
        console.log("CVV is NOT valid")
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
    }
};

function validateExpiry () {
    let expiryField = document.querySelector('#expiration')
    let expiryInput = expiryField.value;
    let parentEl = expiryField.parentElement;
    if (expiryInput) {
        console.log('Expiration is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classlist.add("input-valid")
    } else { 
        console.log("Expiration is NOT valid")
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
    }       
};
// function validateCarYear() {
//     let carYear = document.getElementbyID("#car-year")
//     let year = carYear.value
//     let parentEl = carYear.parentElement

//     if (year) {
//         console.log('year is valid')
//         parentEl.classList.remove('input-invalid')
//         parentEl.classList.add('input-valid')
//     } else {
//         console.log('year is NOT valid')
//         parentEl.classList.remove('input-valid')
//         parentEl.classList.add('year is NOT valid')
//     }
// };

// function validateCarMake() {
//     let carMake = document.getElementbyID ("#car-make")
//     let make = carMake.value
//     let parentEl = carMake.parentElement

//     if (make) {
//         console.log('make is valid')
//         parentEl.classList.remove('input-invalid')
//         parentEl.classList.add('input-valid')
//     } else {
//         console.log('year is NOT valid')
//         parentEl.classList.remove('input-valid')
//         parentEl.classList.add('year is NOT valid')
//         formIsValid = false
//     }
// };

 

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