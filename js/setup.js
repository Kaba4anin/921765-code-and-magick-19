'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var MAX_WIZARDS = 4;

  var similarWizardTemplte = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var setupSimilar = document.querySelector('.setup-similar');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var coatInput = document.querySelector('[name="coat-color"]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var eyesInput = document.querySelector('[name="eyes-color"]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = wizardFireball.querySelector('[name="fireball-color"]');

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

  wizardCoat.addEventListener('click', function () {
    var colorCoat = getRandomColor(COAT_COLORS);
    wizardCoat.style.fill = colorCoat;
    coatInput.value = colorCoat;
  });

  wizardEyes.addEventListener('click', function () {
    var colorEyes = getRandomColor(EYES_COLORS);
    wizardEyes.style.fill = colorEyes;
    eyesInput.value = colorEyes;
  });

  wizardFireball.addEventListener('click', function () {
    var colorFireball = getRandomColor(FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = colorFireball;
    fireballInput.value = colorFireball;
  });
})();
