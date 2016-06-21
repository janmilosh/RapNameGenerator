

/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {

  /* Name Arrays: Customize names to change possible output */
  this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
  this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty', 'Chief'];

}

function User(userName) {
  var length = userName.length;
  
  this.valid = function() {
    if(length > 0) {
      return true;
    } else {
      return false;
    }
  }

  this.name = userName;
}

function Rapper(userName, firstNames, lastNames) {
  
  function _randomIndex(arrayLength) {
    return Math.floor((Math.random() * arrayLength));
  }

  function _firstLetter() {
    return userName[0].toUpperCase();
  }

  function _capsAndDots() {
    return userName.toUpperCase().split('').join('.');
  }

  function _changedUserName() {
    var userNameArray = [userName, _firstLetter(), _capsAndDots()];
    return userNameArray[_randomIndex(userNameArray.length)];
  }

  var options = [];
  var newUserName = _changedUserName(userName);
  var firstName = firstNames[_randomIndex(firstNames.length)];
  var lastName = lastNames[_randomIndex(lastNames.length)];
  
  options[0] = [newUserName, lastName].join(' ');
  options[1] = [firstName, newUserName].join(' ');
  options[2] = [firstName, newUserName, lastName].join(' ');

  this.name = function() {
    return options[_randomIndex(options.length)];
  }
}

var engine = new Generator;  
var firstNames = engine.first_names;
var lastNames = engine.last_names;

$(document).ready(function() {
  var error = $('.error');
  var response = $('.response');
  var button = $('#enter');
  var userInput = $('#user-input');
  var success = $('.alert-success.response');

  function showResult() {
    error.hide();
    response.show();
  }

  function showError() {
    response.hide();
    error.show();
  }
  
  button.on('click', function() {
    
    var user = new User(userInput.val());
    
    if(user.valid()) {

      var rapper = new Rapper(user.name, firstNames, lastNames);
      success.text(rapper.name());
      showResult();

    } else {

      showError();

    }
  });
});
