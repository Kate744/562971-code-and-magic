'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green']
var randomNames = Math.floor(Math.random() * names.length);
var randomSurnames = Math.floor(Math.random() * surnames.length);
var randomCoatColors = Math.floor(Math.random() * coatColors.length);
var randomEyesColors = Math.floor(Math.random() * eyesColors.length);


var wizards = [
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames];
    coatColorOfWizard: coatColors[randomCoatColors];
    eyesColorOfWizard: eyesColors[randomEyesColors];
  },
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames];
    coatColorOfWizard: coatColors[randomCoatColors];
    eyesColorOfWizard: eyesColors[randomEyesColors];
  },
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames];
    coatColorOfWizard: coatColors[randomCoatColors];
    eyesColorOfWizard: eyesColors[randomEyesColors];
  },
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames];
    coatColorOfWizard: coatColors[randomCoatColors];
    eyesColorOfWizard: eyesColors[randomEyesColors];
  }
];
