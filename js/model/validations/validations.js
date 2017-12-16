/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 *  Model Validations
 */
Model.validations = {};
/**
 *  init js files of items
 */
Model.validations.init = function (){
  for(var key in Model.config){
    if(Model.config[key].validationModel !== undefined){
      $.getScript(Model.config[key].validationModel, function (){});
    }
  }
}
/**
 *  Model of validation for the response
 */
Model.validations.response = (function (){
  function response (){
  }
  /**
   * @param result {{}}
   */
  response.responseResult = function(result){
    if(result.results === undefined){
      throw new Error('No Results from API');
    }
    if($.isEmptyObject(result.results)){
      throw new Error('Empty Results from API');
    }
  }
  return response;
})();
/**
 *  Factory for validations items
 */
Model.validations.factory = (function (){
  function factory (){
  }
  /**
   * @param type {string}
   * @return {Model.validations.typeAbstract}
   * @throws Error
   */
  factory.getValidationByType = function(type){
    switch (type){
      case Model.config.people.name:
          return new Model.validations.personType();
        break;
      case Model.config.films.name:
          return new Model.validations.filmType();
        break;
      case Model.config.planets.name:
        return new Model.validations.planetType();
        break;
    }
    throw new Error("no validation founded for this type");
  }
  return factory;
})();
/**
 *  Abstract of multiple types
 */
Model.validations.typeAbstract = (function (){
  function typeAbstract (){
    if (this.constructor === View.typeAbstract){
      throw new Error("This constructor should be override");
    }
  }
  typeAbstract.prototype.itemData = function (){
    throw new Error("This method should be override");
  }
  return typeAbstract;
})();
Model.validations.init();
