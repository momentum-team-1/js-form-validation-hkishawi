console.log('Add validation!');
 
let form = document.querySelector("#parking-form")
let formisValid //why are we setting this?

form.addEventListener('submit',function(event) {
    console.log('THIS IS RUNNING')
    event.preventDefault(); 
    validateName();
    // validateCarYear();
    // validateCarMake();
    // validateCarModel();
    validateCar();
    validateStart();
    validateDays();
    validateCredit();
    validateCvv();
    validateExpiry();
    
    document.getElementsByTagName("label")[1].setAttribute("id", "car-text"); 
    let carText = document.querySelector("#car-text")
    // removeErrorMessage()
    // formIsValid = true
})

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
// function removeErrorMessage () {
//     let errorDiv = document.querySelector('#error-msg')
//     errorDiv.innerHTML = ''

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

// function errorMsg() { //<<from Alyshia's
//     let errordiv = document.createElement('div')
//     //we are creating error div by using createElement property; div will be placed in response to invalid input
//     let errorMsg = document.createTextNode('This field is required')
//     //errormsg variable is created and defined for text node; text us produced using createTextNode property
//     errordiv.appendChild(errormsg)
//     //takes errormsg node is applied to parent node?
//     document.getElementById('name-field').appendChild(errordiv)
//     //this grabs 'name-field' and applies errordiv as a child node 


// function showErrorMsg(inputData) {
//     //if input invalid, don't print error
//     let nameField = document.querySelector(inputData) 
//     let parentEl = nameField.parentElement; 
//     if (parentEl.classList != "input-invalid")
//      {
//         let errorDiv = document.createElement('div')
//         let showErrorMsg = document.createTextNode("data required")
//     errorDiv.appendChild(showErrorMsg)
//     document.getElementById(inputData).appendChild(showErrorMsg) 

//How does this work? and how to implement?
function removeErrorMessage () {
    let errorDiv = document.querySelector('#input-field')
    errorDiv.innerHTML = ''
}

function validateName () {
    let nameField = document.querySelector('#name')
    let nameInput = nameField.value;
    let parentEl = nameField.parentElement; 
    
    document.getElementsByTagName("label")[0].setAttribute("id", "name-text");
    let nameText = document.querySelector("#name-text")

    if (nameInput == "") {
        console.log('name is NOT valid')
        parentEl.classList.remove('input-valid')
        nameText.textContent = "Input your name!"
        parentEl.classList.add('input-invalid')
        formIsValid = false
}       else {
        console.log('name is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')  
        nameText.textContent = "Name accepted!"


//        nameLabel.textcontent = "Name required!";
        // showErrorMsg('name-field')
    }
};


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

//***
// function validateCar () {
//     let carField = document.querySelector("#car-field")
//     let carInput = carField.value
//     let parentEl = carField.parentElement;
//     let carYearField = document.querySelector("#car-year")
//     let carYear = carYearField.value;
//     let carMakeField = document.querySelector("#car-make")
//     let carMake = carMakeField.value;
//     let carModelField = document.querySelector("#car-model")
//     let carModel = carModelField.value;
    
//     if (carYear != isNaN) {
//         console.log("Car year is invalid")
//         parentEl.classList.remove('input-invalid')
//         parentEl.classList.add('input-valid')
//     }   else {
//         console.log('Car year is valid')
//         parentEl.classList.remove('input-invalid')
//         parentEl.classList.add('input-valid')
//         // showErrorMsg('car-field')
//     }
// }

function validateStart () {
    let startField = document.querySelector('#start-date')
    let startInput = startField.value;
    let parentEl = startField.parentElement;

    document.getElementsByTagName("label")[2].setAttribute("id", "start-text");
    let startText = document.querySelector("#start-text")
    
    if (startInput) {
        console.log('start date is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
}       else {
        console.log('start date is NNOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        startText.textContent = "Input start date!"
    }
};

function validateDays () {
    let daysField = document.querySelector('#days')
    let daysInput = daysField.value;
    let parentEl = daysField.parentElement;
    
    document.getElementsByTagName("label")[3].setAttribute("id", "days-text");
    let daysText = document.querySelector("#days-text")
    
    if (daysInput > 0 && daysInput < 31) {
        console.log('days is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
    }   else {
        console.log('days NOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        daysText.textContent = "Input numbers of days!"
        }
};   

function validateCredit () {
    let creditField = document.querySelector('#credit-card')
    let creditInput = creditField.value;
    let CCregex = new RegExp ('^[0-9]{16}$')
    let parentEl = creditField.parentElement;
    
    document.getElementsByTagName("label")[4].setAttribute("id", "credit-num");
    let creditText = document.querySelector("#credit-num")
    
    if (creditInput && CCregex.test(creditInput) && luhnCheck(creditInput)) {
        console.log('credit card is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
        creditText.textContent = "Valid card entry!"
    }   else {
        console.log('credit card is NOT valid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        creditText.textContent = "Invalid card entry!"
    }    
}; 

function validateCvv () {
    let cvvField = document.querySelector('#cvv')
    let cvvInput = cvvField.value;
    let parentEl = cvvField.parentElement;

    document.getElementsByTagName("label")[5].setAttribute("id", "cvv-text");
    let cvvText = document.querySelector("#cvv-text")

    if (cvvInput.length > 3 || cvvInput.length < 3 || "") {
        console.log("CVV is NOT valid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add('input-invalid')
        cvvText.textContent = "Enter your CVV!"
    } else {
        console.log("CVV is valid")
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
        showErrorMsg('cvv-field')
    }
};

function validateExpiry () {
    let expiryField = document.querySelector('#expiration')
    let expiryInput = expiryField.value;
    let parentEl = expiryField.parentElement;

document.getElementsByTagName("label")[6].setAttribute("id", "expiry-text");
let expiryText = document.querySelector("#expiry-text")
    //How is index here ^ set?
        //why doesn't car year make model have their own index?
    if (expiryInput) {
        console.log('Expiration is valid')
        parentEl.classList.remove('input-invalid')
        parentEl.classlist.add("input-valid")
    } else { 
        console.log("Expiration is NOT valid")
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        expiryText.textContent = "Enter expiration date!"
    }       
};

function validateCar() {
    let parentEl = document.querySelector("#car-field")
    let carYear = document.querySelector("#car-year")
    let yearInput = carYear.value
    let carMake = document.querySelector("#car-make")
    let makeInput = carMake.value
    let carModel = document.querySelector("#car-model")
    let modelInput = carModel.value
   // let CCregex = new RegExp ('^[0-9]{16}$')

    document.getElementsByTagName("label")[1].setAttribute("id", "car-input");
    let carInput = document.querySelector("#car-input")

    if (yearInput == Number.isInteger && yearInput > 1900 || yearInput < 2020 && makeInput !== ""  && modelInput !== "") {
        console.log("Car entry accepted")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
        carInput.textContent = "Valid car entry"
    } else {
        console.log("Car information accepted")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        carInput.textContent = "Car entry NOT accepted"
    }
}

// function validateCarYear() {
//     let carYear = document.querySelector("#car-year")
//     let year = carYear.value
//     let parentEl = carYear.parentElement

// document.getElementsByTagName("label")[1].setAttribute("id", "car-text"); 
// let carText = document.querySelector("#car-text")

//     if (year = Number.isInteger) {
//         console.log('year is valid')
//         parentEl.classList.remove('input-invalid')
//         parentEl.classList.add('input-valid')
//     } else {
//         console.log('year is NOT valid')
//         parentEl.classList.remove('input-valid')
//         parentEl.classList.add('input-invalid')
//         carText.textContent = "Enter car year"
//     }
// };

// function validateCarMake() {
//     let carMake = document.querySelector("#car-make")
//     let make = carMake.value
//     let parentEl = carMake.parentElement
//     carText = document.querySelector("#car-Text")
//     if (make != "") {
//         console.log('make is valid')
//         parentEl.classList.remove('input-invalid')
//         parentEl.classList.add('input-valid')
//     } else {
//         console.log('year is NOT valid')
//         parentEl.classList.remove('input-valid')
//         parentEl.classList.add('input-invalid')
//         formIsValid = false
//         carText.textContent = "Enter car make!"
//     }
// };

// function validateCarModel() {
//     let carModel = document.querySelector("#car-model")
//     let model = carModel.value
//     let parentEl = carModel.parentElement

//     if (model != "") {
//         console.log('Car model is valid')
//         parentEl.classList.remove('input-invalid')
//         parentEl.classList.add('input-valid')
//     }    else {
//             console.log("Car model is NOT valid")
//             parentEl.classList.remove('input-valid')
//             parentEl.classList.add('input-valid')
//             formIsValid = false 
//             carText = "Enter car model!"
//     }
// }

//STEP 4
// Add the ability to show the user the total cost of their parking when they click the "Make Reservation" button. The div with id "total" should be filled with text showing the cost. This text should be removed if the form becomes invalid.
//submit = eval($5/weekday) || eval($7/weekend) total cost of parking 
// Would results output in Input number of days??
//create function for both weekend and weekday?

//STEP 6
// Add expiration date for cc and start date using momentjs.com... 
// which link to at to <script> in html?