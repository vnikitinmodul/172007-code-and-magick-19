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
  ],
  FireballColors: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};

var Keys = {
  ESC: 'Escape',
  ENTER: 'Enter'
};

var NUM_WIZARDS = 4;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupList = document.querySelector('.setup-similar');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var coatInput = document.querySelector('input[name="coat-color"]');
var eyesInput = document.querySelector('input[name="eyes-color"]');
var fireballInput = document.querySelector('input[name="fireball-color"]');

var openSetup = function () {
  setup.classList.remove('hidden');
  setupList.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closeSetup = function () {
  setup.classList.add('hidden');
  setupList.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var changeEyesColor = function () {
  var eyesColor = getRandomItem(SrcData.EyesColors);
  wizardEyes.style.fill = eyesColor;
  eyesInput.value = eyesColor;
};

var changeCoatColor = function () {
  var coatColor = getRandomItem(SrcData.CoatColors);
  wizardCoat.style.fill = coatColor;
  coatInput.value = coatColor;
};

var changeFireballColor = function () {
  var fireballColor = getRandomItem(SrcData.FireballColors);
  fireballWrap.style.backgroundColor = fireballColor;
  fireballInput.value = fireballColor;
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

var onPopupEscPress = function (evt) {
  if (evt.key === Keys.ESC && evt.target && !evt.target.matches('.setup-user-name')) {
    closeSetup();
  }
};

var onEyesClick = function () {
  changeEyesColor();
};

var onCoatClick = function () {
  changeCoatColor();
};

var onFireballClick = function () {
  changeFireballColor();
};

setupOpen.addEventListener('click', function () {
  openSetup();
});

setupClose.addEventListener('click', function () {
  closeSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === Keys.ENTER) {
    closeSetup();
  }
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === Keys.ENTER) {
    openSetup();
  }
});

wizardEyes.addEventListener('click', onEyesClick);

wizardCoat.addEventListener('click', onCoatClick);

fireballWrap.addEventListener('click', onFireballClick);


putWizards(generateWizards(SrcData));
