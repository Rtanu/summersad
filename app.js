function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  
  function validatedform() {
    var fname = document.summercampform.fname.value;
    var mname = document.summercampform.mname.value;
    var lname = document.summercampform.lname.value;
    var mobile = document.summercampform.mobile.value;
    var email = document.summercampform.email.value;
    var age = document.summercampform.age.value;
    var gender = document.summercampform.gender.value;
    var indoor = [];
    var outdoor = [];
    var incheckbox = document.getElementsByName("gamein");
    var outcheckbox = document.getElementsByName("gameout");
  
    for (var i = 0; i < incheckbox.length; i++) {
      if (incheckbox[i].checked) {
        indoor.push(incheckbox[i].value);
      }
    }
  
    for (var i = 0; i < outcheckbox.length; i++) {
      if (outcheckbox[i].checked) {
        outdoor.push(outcheckbox[i].value);
      }
    }
  
    var fnamerror = mnamerror = lnamerror = mobilerror = emailerror = agerror = gendererror = false;
  

    if (indoor.length <1 || indoor.length>2  ) {
      alert("Please select any two indoor sport");
      return false; // Prevent form submission
    }

    if (outdoor.length <1 || outdoor.length>2) {
      alert("Please select any two outdoor sport.");
      return false; // Prevent form submission
    }



    // Validate first name
    if (fname === "") {
      printError("fnamerror", "Please enter your first name");
      fnamerror = true;
    } else {
      // var regex = /^[a-zA-Z\s]+$/; //// For time being
      var regex = /^[a-zA-Z\s]{2,20}$/;
      if (!regex.test(fname)) {
        printError("fnamerror", "Please enter a valid first name (2-20 alphabetical characters)");
        fnamerror = true;
      } else {
        printError("fnamerror", "");
      }
    }
  
    // Validate middle name
    if (mname === "") {
      printError("mnamerror", "Please enter your middle name");
      mnamerror = true;
    } else {
      var regex = /^[a-zA-Z\s]{2,20}$/;
      if (!regex.test(mname)) {
        printError("mnamerror", "Please enter a valid middle name (2-20 alphabetical characters)");
        mnamerror = true;
      } else {
        printError("mnamerror", "");
      }
    }
  
    // Validate last name
    if (lname === "") {
      printError("lnamerror", "Please enter your last name");
      lnamerror = true;
    } else {
      var regex = /^[a-zA-Z\s]{2,20}$/;
      if (!regex.test(lname)) {
        printError("lnamerror", "Please enter a valid last name (2-20 alphabetical characters)");
        lnamerror = true;
      } else {
        printError("lnamerror", "");
      }
    }
  
    // Validate mobile number
    if (mobile === "") {
      printError("mobilerror", "Please enter your mobile number");
      mobilerror = true;
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (!regex.test(mobile)) {
        printError("mobilerror", "Please enter a valid 10-digit mobile number");
        mobilerror = true;
      } else {
        printError("mobilerror", "");
      }
    }
  
    // Validate email address
    if (email === "") {
      printError("emailerror", "Please enter your email address");
      emailerror = true;
    } else {
      var regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        printError("emailerror", "Please enter a valid email address");
        emailerror = true;
      } else {
        printError("emailerror", "");
      }
    }


// Validate Gender
    if(gender == "") {
      printError("gendererror", "Please select your gender");
  } else {
      printError("gendererror", "");
      gendererror = false;
  }
  
// Validate age
  if (age === "") {
    printError("agerror", "Please enter your age");
    agerror = true;
  } else {
    var regex = /^1[0-5]$/;
    if (!regex.test(age)) {
      printError("agerror", "Please enter age between 10 to 15 years");
      agerror = true;
    } else {
      printError("agerror", "");
    }
  }

  var staterror = cityerror = false;

  // Validate state
  var stateSelect = document.getElementById("stateSelect");
  var selectedState = stateSelect.value;
  if (selectedState === "") {
    printError("staterror", "Please select a state");
    staterror = true;
  } else {
    printError("staterror", "");
  }
 // Validate city
 var citySelect = document.getElementById("citySelect");
 var selectedCity = citySelect.value;
 if (selectedCity === "") {
   printError("cityerror", "Please select a city");
   cityerror = true;
 } else {
   printError("cityerror", "");
 }



// Add additional validation checks for age, gender, and checkboxes if needed
  
    // Check if there are any validation errors
    if  (fnamerror || mnamerror || lnamerror || mobilerror || emailerror||gendererror||agerror||cityerror||staterror) {
      return false;// Prevent form submission
     
    } else {
      // Creating a string from input data for preview
      var dataPreview = "You've entered the following details: \n" +
      "Your First Name: " + fname + "\n" +
      "Your Middle Name: " + mname + "\n" +
      "Your Last Name: " + lname + "\n" +
      "Your Age: " + age + "\n" +
      "Email Address: " + email + "\n" +
      "Mobile Number: " + mobile + "\n" +
       "Gender: " + gender + "\n";
if(indoor.length) {
dataPreview += "Indoor games: " + indoor.join(", ") +"\n";
}

if(outdoor.length) {
  dataPreview += "Outdoor games: " + outdoor.join(", ");
  }
// Display input data in a dialog box before submitting the form
alert(dataPreview);
    }


  }

  function populateCities() {
    var stateSelect = document.getElementById("stateSelect");
    var citySelect = document.getElementById("citySelect");
    var selectedState = stateSelect.value;

    // Clear existing options
    citySelect.innerHTML = "";

    // Add cities based on selected state
    if (selectedState === "Maharashtra") {
      var cities = ["Mumbai", "Pune", "Nasik","Nagpur"];
    } else if (selectedState === "Tamil Nadu") {
      var cities = ["Chennai", "Madurai", "Vellore","Coimbatore"];
    } else if (selectedState === "Uttar Pradesh") {
      var cities = ["Ayodhya", "Kanpur", "Gorakpur","Allahabd"];
    }
    // Populate city dropdown
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.text = cities[i];
      citySelect.add(option);
    }
  }
  