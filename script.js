// nom validation

let arr = [];

function nomValidation() {

  let nom = document.getElementById("Nom").value;
  let nomPrenomValidation = /^[a-zA-Z]{3,30}$/;

  if (nomPrenomValidation.test(nom)) {
    document.getElementById("Nom").style.borderColor = "";
    document.getElementById("nomerror").style.visibility= "hidden";
  } else {
    document.getElementById("Nom").style.borderColor = "#FF0000";
    document.getElementById("nomerror").style.visibility= "visible";
    arr.push(1)
  }
}

// prenom validation

function prenomValidation() {

  let prenom = document.getElementById("Prénom").value;
  let nomPrenomValidation = /^[a-zA-Z]{3,30}$/;

  if (nomPrenomValidation.test(prenom)) {
    document.getElementById("Prénom").style.borderColor = "";
    document.getElementById("prenomerror").style.visibility= "hidden";
  } else {
    document.getElementById("Prénom").style.borderColor = "#FF0000";
    document.getElementById("prenomerror").style.visibility= "visible";
    arr.push(2)
  }
}

// email validation

function focusEmailValidation() {
  
  let email = document.getElementById("Email").value;
  let emailValidation = /^([A-Za-z0-9]\w+(\.?)\w+(\.?)\w+)@(gmail|yahoo|ofppt)\.(com|ma)$/;

  if (emailValidation.test(email)) {
    document.getElementById("Email").style.borderColor = "";
    document.getElementById("emailerror").style.visibility= "hidden";
  } else {
    document.getElementById("Email").style.borderColor = "#FF0000";
    document.getElementById("emailerror").style.visibility= "visible";
    arr.push(3)
  }
}

// phone number validation

function focusPhoneValidation() {

  let telephone = document.getElementById("Télephone").value;
  let phoneNumberValidation = /^(05|06|07)([0-9]{8})$|^(\+212)-?([0-9]{9})$/;

  if (phoneNumberValidation.test(telephone)) {
  document.getElementById("Télephone").style.borderColor = "";
  document.getElementById("teleerror").style.visibility= "hidden";
} else {
  document.getElementById("Télephone").style.borderColor = "#FF0000";
  document.getElementById("teleerror").style.visibility= "visible";
  arr.push(4)
}
}


function validationclub() {

  let clubValidation = document.getElementById('club').selectedOptions;

  if (clubValidation.length === 0) {
    document.getElementById("cluberror3").style.visibility= "hidden";
    document.getElementById("cluberror0").style.visibility= "visible";
    arr.push(5)
  } else if (clubValidation.length > 3) {
    document.getElementById("cluberror3").style.visibility= "visible";
    document.getElementById("cluberror0").style.visibility= "hidden";
    arr.push(6)
  } else {
    document.getElementById("cluberror3").style.visibility= "hidden";
    document.getElementById("cluberror0").style.visibility= "hidden";
  }
  if (arr.length === 0) {
    document.getElementById("form").submit();
    }

}