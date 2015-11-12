// gets a new object (the architecture allows us to not have to use the 'new' keyword)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// use our object on the click of the login button
$('#login').click(function() {
  
  // create new 'Greetr' object (pretending to know the name from the login)
  var loginGrtr = G$('John', 'Doe');
  
  // hide the login on screen
  $('#logindiv').hide();
  
  // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language
  // log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
  
});