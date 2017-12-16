/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 *  Types
 */
View.items = {};
/**
 *  init js files of items
 */
View.items.init = function (){
  for(var key in Model.config){
    if(Model.config[key].viewModel !== undefined){
      $.getScript(Model.config[key].viewModel, function (){});
    }
  }
}
/**
 *  Abstract of multiple types
 */
View.items.typeAbstract = (function (){
  function typeAbstract (typeName){
    this.prototype.typeName = typeName;
  }
  typeAbstract.prototype.printItem = function (){
    throw new Error("This method should be override");
  }
  return typeAbstract;
})();
/**
 *  Factory for view items
 */
View.items.factory = (function (){
  function factory (){
  }
  /**
   * @param type {string}
   * @return {View.typeAbstract}
   * @throws Error
   */
  factory.getViewByType = function(type){
    switch (type){
      case Model.config.people.name:
          return new View.items.personType(type);
        break;
      case Model.config.films.name:
          return new View.items.filmType(type);
        break;
      case Model.config.planets.name:
          return new View.items.planetType(type);
        break;
    }
    throw new Error("no view founded for this type");
  }
  return factory;
})();
View.items.init();