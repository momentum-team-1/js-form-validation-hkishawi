console.log('Add validation!');
 
let form = document.querySelector("#parking-form")
let formisValid //why are we setting this?
var inputtxt = ""

//     var letters = /^[A-Za-z]+$/;
//     if (inputtxt.value.match(letters))
// {   console.log("name accepted")
//     return true; 
// }   else 
// {
//     alert("Letters only!");
//     return false; 
// }
// }
// function allNumeric (inputTxt) {
//     var numbers = /^[0-9]+$/; //why do numbers look like this?
//     if(inputTxt.value.match(numbers))
//     {
//         alert('numbers accepted')
//         document.form1.text1.focus();
//         return true; 
//         }
//         else
//         {
//         alert('please input numeric characters only');
//         return false;
//         }
//     }



 

// removeErrorMessage()
// formIsValid = true


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

// function removeErrorMessage () {
//     if (formIsValid) {
//         let errorDiv = document.querySelector('#error-msg')
//         errorDiv.innerHTML=''
//     }
// }
// function errormsg() { //<<from Alyshia's
//     let errordiv = document.createElement('div')
//     //we are creating error div by using createElement property; div will be placed in response to invalid input
//     let errormsg = document.createTextNode('This field is required')
//     //errormsg variable is created and defined for text node; text us produced using createTextNode property
//     errordiv.appendChild(errormsg)
//     //takes errormsg node is applied to parent node?
//     document.getElementById('name-field').appendChild(errordiv)
//     //this grabs 'name-field' and applies errordiv as a child node 


// }
//  *****THIS ERROR FUNCTION ONE KIND OF WORKS
// function showErrorMsg(inputData) {
//     //if input invalid, don't print error
//     let nameField = document.querySelector(inputData) 
//     let parentEl = nameField.parentElement; 
//     if (parentEl.classList != "input-invalid")
//      {
//     let errorDiv = document.createElement('div')
//     let showErrorMsg = document.createTextNode("data required")
//     errorDiv.appendChild(showErrorMsg)
//     document.getElementById(inputData).appendChild(showErrorMsg) 
//     }
// }
// function removeErrorMessage () {
//     let errorDiv = document.querySelector('#input-field')
//     errorDiv.innerHTML = ''
// }


function validateName () {
    let nameField = document.querySelector('#name')
    //grabbing name
    let nameInput = nameField.value;
    //variable for name that is input; value that was typed into "name"
    let parentEl = nameField.parentElement; 
    //parent element the variable will go when the name is inputted
    if (nameInput) {
        //telling machine to do this if valid
        console.log('name is invalid')
        parentEl.classList.remove('input-invalid')
        //removing this node when invalid; how can name be valid? 
        parentEl.classList.add('input-valid')
}       else {
        console.log('name is NOT valid')
        //else not valid then invalid 
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')  
        // showErrorMsg('name-field')


//        nameLabel.textcontent = "Name required!";
        // showErrorMsg('name-field')
    }
};
// function showInvalidMessage () {
//     if (formIsInvalid) {
//         let invalidDiv = document.querySelector('#input-invalid')
//         let invalidMsgEl = document.createElement('div')
//         let invalidMsgText = document.createTextNode('Invalid. Numbers only')
//         invalidMsgEl.appendChild(invalidMsgText)
//         document.querySelector('#name').appendChild(invalidMsgEl)
//     }
// }

// function validateCar() {
//     let parentEl = document.querySelector("#car-field")
//     let yearInput = document.querySelector("#car-year")
//     let yearInfo = yearInput.value
//     let makeInput = document.querySelector("#car-make") 
//     let makeInfo = makeInput.value
//     let modelInput = document.querySelector("#car-model")
//     let modelInfo = modelInput.value

//     document.getElementsByTagName("label")[0].setAttribute("id", "car-label"); 
// //0 reps the collection of nodes in "car-label"
//     let carLabel = document.querySelector("#car-label")

//     y = document.getElementById("car-year").value

//     if (isNaN(y) || y < 1900 || y > 2020 || makeInfo === "" || modelInfo === "") {
//         console.log("car field NOT valid")
//         parentEl.classList.remove("input-valid")
//         parentEl.classList.add("input-invalid")
//         carLabel.textContent = "Car information not valid"
//         formisValid = false
//     } else if (yearInfo !== "" && makeInfo !== "" && modelInfo !== "") {
//         console.log("car field is valid")
//         parentEl.classlist.remove("input-invalid")
//         carLabel.textContent = "Car"
//         parentEl.classList.add("input-valid")
//     }
//     }
function validateCar () {
    let carField = document.querySelector("#car-field")
    let carInput = carField.value
    let parentEl = carField.parentElement;
    if (carInput) {
        console.log("Car year is valid")
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    }   else {
        console.log('Car year is valid')
        parentEl.classList.contains('input-valid')
        parentEl.classList.add('input-invalid')
        // showErrorMsg('car-field')
    }
}

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
        // showErrorMsg('start-date-field')
    }
};


function validateDays () {
    let daysField = document.querySelector('#days')
    let daysInput = daysField.value;
    let parentEl = daysField.parentElement;
    if (daysInput > 0 && daysInput < 31) {
        console.log('days is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    }   else {
        console.log('days NOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        // showErrorMsg('days-field')
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
        // showErrorMsg('credit-card-field')
    }
}; 

function validateCvv () {
    let cvvField = document.querySelector('#cvv')
    let cvvInput = cvvField.value;
    let parentEl = cvvField.parentElement;
    if (cvvInput.length = 3) {
        console.log("CVV is valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add('input-valid')
        
    } else {
        console.log("CVV is NOT valid")
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        showErrorMsg('cvv-field')
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
        // showErrorMsg('expiration-field')
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