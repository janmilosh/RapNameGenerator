

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
  this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

}

function randomIndex(arrayLength) {
  return Math.floor((Math.random() * arrayLength));
}

function firstLetter(name) {
  return name[0].toUpperCase();
}

function capsAndDots(name) {
  return name.toUpperCase().split('').join('.');
}

function changedUserName(name) {
  var userNameArray = [name, firstLetter(name), capsAndDots(name)];
  return userNameArray[randomIndex(userNameArray.length)];
}

function rapName(userName, firstName, lastName) {
  var options = [];
  var newUserName = changedUserName(userName);
  options[0] = [newUserName, lastName].join(' ');
  options[1] = [firstName, newUserName].join(' ');
  options[2] = [firstName, newUserName, lastName].join(' ');
  return options[randomIndex(options.length)]
}


$(document).ready(function() {
  var engine = new Generator;
  var button = $('#enter');
  
  button.on('click', function() {
    var firstName = engine.first_names[randomIndex(engine.first_names.length)];
    var lastName = engine.last_names[randomIndex(engine.last_names.length)];
    var userName = $('#user-input').val();
    
    if(userName.length > 0) {
      
      $('.error').hide();
      $('.response').show();
      
      var displayName = rapName(userName, firstName, lastName);
      $('.alert-success.response').text(displayName);
    
    } else {

      $('.response').hide();
      $('.error').show();

    }
  });
});
