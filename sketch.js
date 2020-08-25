var nametext, nameInput, ageText, ageInput, genderText, genderInput, heightText, heightInput, weightText, weightInput, submit;
var age, gender, height, weight, upo;

function setup() {

  createCanvas(displayWidth-30, displayHeight-600);

  nameText = createElement('h3', 'Name:');
  nameText.position(displayWidth/2-650, displayHeight/2-250);
  nameInput = createInput("Name");
  nameInput.position(displayWidth/2-650, displayHeight/2-210);

  ageText= createElement('h3', 'Age:');
  ageText.position(displayWidth/2-650, displayHeight/2-200);
  ageInput = createInput("Age");
  ageInput.position(displayWidth/2-650, displayHeight/2-160)

  genderText = createElement('h3', 'Gender:');
  genderText.position(displayWidth/2-650, displayHeight/2-150)
  genderInput = createInput("Gender");
  genderInput.position(displayWidth/2-650, displayHeight/2-110);

  heightText = createElement('h3', 'Height (in m):');
  heightText.position(displayWidth/2-650, displayHeight/2-100)
  heightInput = createInput("Height");
  heightInput.position(displayWidth/2-650, displayHeight/2-60);

  weightText = createElement('h3', 'Weight (in kg):');
  weightText.position(displayWidth/2-650, displayHeight/2-50)
  weightInput = createInput("Weight");
  weightInput.position(displayWidth/2-650, displayHeight/2-10);

  submit = createButton('Submit');
  submit.position(displayWidth/2-650, displayHeight/2+20);
  submit.mousePressed(personalize);

}

function personalize() {

  textSize(25);

  text("Hi, " + nameInput.value() + "!", 600, 200);

  if(ageInput.value() < 100 && ageInput.value() > 0) {
    age = ageInput.value();
    text("You are " + ageInput.value() + " years old.", 600, 300);
  } else if(ageInput.value() > 100 || ageInput.value() < 0) {
    text("This software can only be used for living people.", 600, 300); 
  } else {
    text("Your age is invalid. Kindly enter a number.", 600, 300);
  }

  if(genderInput.value() === "Male") {
    gender = Male;
    text("You are Male.", 600, 400);
  } else if(genderInput.value() === "Female") {
    gender = Female;
    text("You are Female.", 600, 400);
  } else {
    text("Your gender is invalid. Kindly enter either 'Male' or 'Female'.", 600, 400);
  }

  if(heightInput.value() < 0.5) {
    text("This software is probably not best for babies or dwarves.", 600, 500);
  } else if(heightInput.value() > 3) {
    text("This software is probably not best for giants.", 600, 500);
  } else if(heightInput.value() > 0.5 && heightInput.value() < 3) {
    height = heightInput.value();
    text("You are " + heightInput.value() + " m tall.", 600, 500);
  } else {
    text("Your height is invalid. Kindly enter a number (your height in meters).", 600, 500);
  }

  if(weightInput.value() < 2) {
    text("This software is probably not best for babies or dwarves.", 600, 600);
  } else if(weightInput.value() > 700) {
    text("This software is probably not best for giants.", 600, 600);
  } else if(weightInput.value() > 2 && weightInput.value() < 700) {
    weight = weightInput.value();
    text("You weigh " + weightInput.value() + " kg.", 600, 600);
  } else {
    text("Your weight is invalid. Kindly enter a number (your weight in kilograms).", 600, 600);
  }

  if(age < 1) {
    text("There is no set time for you to sleep. You may sleep for as long as you wish.", 600, 700);
  } else if(age >= 1 && age < 5) {
    text("You need 12 hours of sleep everyday.", 600, 700);
  } else if(age >= 5 && age < 10) {
    text("You need 11 hours of sleep everyday.", 600, 700);    
  } else if(age >= 10 && age < 18) {
    text("You need 10 hours of sleep everyday.", 600, 700);
  } else if(age > 18) {
    text("You need 8 hours of sleep everyday.", 600, 700);
  }

  upo = weight/height;
  
  if(upo < 18) {
    text("You're underweight. Eating a nutrious diet, while going for a walk for 30 minutes everyday should help you!", 600, 800);
  } else if(upo > 25) {
    text("You're overweight. Eating a nutrious diet with a little bit less fat while being active in sports should help you!", 600, 800);
  } else if(upo > 18 && upo < 25) {
    text("You weigh... perfect? You weigh perfect for your age and should continue doing what you do!", 600, 800);
  }
  
}

