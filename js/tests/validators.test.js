/**
 * Example test
 */
TestCase("ValidatorsModel", {
	"testPlanetType": function(){
    var personTypeValidations = new Model.validations.personType();
    var error = null;
    try{
    	var data = {missing:'is_missing'};
      personTypeValidations.itemData(data);
		}
		catch (err){
      error = err;
		}
    assertEquals(error.message, 'Name is missing from response');
	}
});

