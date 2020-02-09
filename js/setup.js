'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var MAX_WIZARDS = 4;
var userDialog = document.querySelector('.setup');
var similarWizardTemplte = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var setupSimilar = document.querySelector('.setup-similar');
userDialog.classList.remove('hidden');

var getRandomColor = function (color) {
  var colorElement = color[Math.floor(Math.random() * color.length)];
  return colorElement;
};

var getRandomWizards = function (name, surname, coatColor, eyesColor) {
  var wizards = [];

  for (var i = 0; i < MAX_WIZARDS; i++) {
    var wizard = {};

    wizard.name = name[Math.floor(Math.random() * name.length)] + ' ' + surname[Math.floor(Math.random() * surname.length)];
    wizard.coatColor = getRandomColor(coatColor);
    wizard.eyesColor = getRandomColor(eyesColor);

    wizards.push(wizard);
  }

  return wizards;
};

var getWizard = function (element) {
  var wizardElement = similarWizardTemplte.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = element.name;
  wizardElement.querySelector('.wizard-coat').style.fill = element.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = element.eyesColor;

  return wizardElement;
};

var addElement = function (name, surname, coats, eyes) {
  var wizardsArray = getRandomWizards(name, surname, coats, eyes);
  for (var j = 0; j < wizardsArray.length; j++) {
    fragment.appendChild(getWizard(wizardsArray[j]));
  }
};

addElement(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);

similarListElement.appendChild(fragment);

setupSimilar.classList.remove('hidden');
