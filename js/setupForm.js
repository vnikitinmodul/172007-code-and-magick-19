'use strict';

(function () {

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


  var NUM_WIZARDS = 4;

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.querySelector('input[name="coat-color"]');
  var eyesInput = document.querySelector('input[name="eyes-color"]');
  var fireballInput = document.querySelector('input[name="fireball-color"]');
  var setupWizardForm = document.querySelector('.setup-wizard-form');

  var cloneWizard = function (data, template, count) {
    var clone = template.cloneNode(true);

    clone.querySelector('.setup-similar-label').textContent = data[count].name;
    clone.querySelector('.wizard-coat').style.fill = data[count].colorCoat;
    clone.querySelector('.wizard-eyes').style.fill = data[count].colorEyes;

    return clone;
  };

  var putWizards = function (data) {
    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    for (var j = 0; j < NUM_WIZARDS; j++) {
      var wizardClone = cloneWizard(data, wizardTemplate, j);
      document.querySelector('.setup-similar-list').appendChild(wizardClone);
    }
  };

  var onStatusError = function (status) {
    window.util.showError(status);
  };

  var onEyesClick = function () {
    var eyesColor = window.util.getRandomItem(SrcData.EyesColors);
    wizardEyes.style.fill = eyesColor;
    eyesInput.value = eyesColor;
  };

  var onCoatClick = function () {
    var coatColor = window.util.getRandomItem(SrcData.CoatColors);
    wizardCoat.style.fill = coatColor;
    coatInput.value = coatColor;
  };

  var onFireballClick = function () {
    var fireballColor = window.util.getRandomItem(SrcData.FireballColors);
    fireballWrap.style.backgroundColor = fireballColor;
    fireballInput.value = fireballColor;
  };

  var onSetupWizardFormSubmit = function (evt) {
    window.backend.save(new FormData(evt.target), onSubmitSuccess, onStatusError);
    evt.preventDefault();
  };

  var onSubmitSuccess = function () {
    window.setupModal.closeSetup();
  };

  wizardEyes.addEventListener('click', onEyesClick);

  wizardCoat.addEventListener('click', onCoatClick);

  fireballWrap.addEventListener('click', onFireballClick);

  setupWizardForm.addEventListener('submit', onSetupWizardFormSubmit);

  window.backend.load(putWizards, onStatusError);

}());
