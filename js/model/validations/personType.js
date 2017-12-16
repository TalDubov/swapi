/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 * Person type
 */
Model.validations.personType = (function (){
  function personType (){
  }
  personType.prototype = Object.create(Model.validations.typeAbstract.prototype);
  /**
   * @param data {{}}
   * @throws Error
   */
  personType.prototype.itemData = function (data){
    if(data.name == undefined){
      throw new Error('Name is missing from response', 201712151554);
    }
    else if(data.birth_year == undefined){
      throw new Error('Birth year is missing from response', 201712151555);
    }
  }
  return personType;
})();
