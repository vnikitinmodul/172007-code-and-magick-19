'use strict';

var SrcData = {
  Names: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  Surnames: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  CoatColors: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  EyesColors: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};

var NUM_WIZARDS = 4;

var showSetup = function () {
  var setup = document.querySelector('.setup');
  var setupList = document.querySelector('.setup-similar');

  setup.classList.remove('hidden');
  setupList.classList.remove('hidden');
};

var getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateWizards = function (data) {
  var wizards = [];

  for (var i = 0; i < NUM_WIZARDS; i++) {
    var currentWizard = {
      name: getRandomItem(data.Names),
      surname: getRandomItem(data.Surnames),
      coatColor: getRandomItem(data.CoatColors),
      eyesColor: getRandomItem(data.EyesColors)
    };

    wizards.push(currentWizard);
  }

  return wizards;
};

var cloneWizard = function (data, template, count) {
  var clone = template.cloneNode(true);

  clone.querySelector('.setup-similar-label').textContent = data[count].name + ' ' + data[count].surname;
  clone.querySelector('.wizard-coat').style.fill = data[count].coatColor;
  clone.querySelector('.wizard-eyes').style.fill = data[count].eyesColor;

  return clone;
};

var putWizards = function (data) {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  for (var j = 0; j < data.length; j++) {
    var wizardClone = cloneWizard(data, wizardTemplate, j);
    document.querySelector('.setup-similar-list').appendChild(wizardClone);
  }
};

putWizards(generateWizards(SrcData));
showSetup();
