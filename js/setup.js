'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

//массивы данных
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
//рандомная генерация
var randomNames = Math.floor(Math.random() * names.length);
var randomSurnames = Math.floor(Math.random() * surnames.length);
var randomCoatColors = Math.floor(Math.random() * coatColors.length);
var randomEyesColors = Math.floor(Math.random() * eyesColors.length);
//функция, генерирующая 4 рандомных свойства 4 магов
 function getWizardAppearance() {
var wizards = [
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames],
    coatColorOfWizard: coatColors[randomCoatColors],
    eyesColorOfWizard: eyesColors[randomEyesColors]
  },
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames],
    coatColorOfWizard: coatColors[randomCoatColors],
    eyesColorOfWizard: eyesColors[randomEyesColors]
  },
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames],
    coatColorOfWizard: coatColors[randomCoatColors],
    eyesColorOfWizard: eyesColors[randomEyesColors]
  },
  {
    nameOfWizard: names[randomNames] + surnames[randomSurnames],
    coatColorOfWizard: coatColors[randomCoatColors],
    eyesColorOfWizard: eyesColors[randomEyesColors]
  }
];
return(wizards);
}
//вот тут надо Имя персонажа name запишите как текст в блок .setup-similar-label
//Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat
//Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes
// вот так?
var name = document.querySelector('.setup-similar-label');
name.textContent = nameOfWizard; //но nameOfWizard это св-во объекта var wizards


//копируем шаблон мага
var template = document.querySelector('#similar-wizard-template').content;
for (var i = 0; i < 4; i++) {
  var element = template.cloneNode(true);
  similarListElement.appendChild(element);
}
// тут я добавляю рандомные св-ва каждому магу в цикле, использую fragment для наполнения в цикле
var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
var newElement = document.createElement('');
newElement.className = 'wizard-coat';
newElement.textContent = coatColorOfWizard;
fragment.appendChild(newElement);
newElement.className = 'wizard-eyes';
newElement.textContent = eyesColorOfWizard;
fragment.appendChild(newElement);
newElement.className = 'wizard-coat';
newElement.textContent = coatColorOfWizard;
fragment.appendChild(newElement);
  //думаю, что так нельзя делать, так как переменная newElement будет перезаписываться каждый раз
}
//ниже я ставлю сгенерированные элменты на страницу
setup-similar-item.appendChild(fragment);


//тут Покажите блок .setup-similar, удалив у него CSS-класс hidden
document.querySelector('.setup-similar').classList.remove('hidden');
