/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 * Film type
 */
Model.validations.filmType = (function (){
  function filmType (){
  }
  filmType.prototype = Object.create(Model.validations.typeAbstract.prototype);
  /**
   * @param data {{}}
   * @throws Error
   */
  filmType.prototype.itemData = function (data){
    if(data.title == undefined){
      throw new Error('Title is missing from response');
    }
    else if(data.producer == undefined){
      throw new Error('Producer is missing from response');
    }
  }
  return filmType;
})();