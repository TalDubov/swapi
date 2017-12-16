/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 * Planet type
 */
Model.validations.planetType = (function (){
  function planetType (){
  }
  planetType.prototype = Object.create(Model.validations.typeAbstract.prototype);
  /**
   * @param data {{}}
   * @throws Error
   */
  planetType.prototype.itemData = function (data){
    if(data.name == undefined){
      throw new Error('Name is missing from response');
    }
    else if(data.population == undefined){
      throw new Error('Population is missing from response');
    }
  }
  return planetType;
})();