/**
 * Created by TalDubov on 12/12/2017.
 */
var Controller = {};
/**
 *  Controller api
 */
Controller.api = (function (){
  function api (){
  }
  /**
   * @param type {string}
   */
  api.get = function(type){
    View.printData.cleanList();
    var response =  Model.request.createRequest(type);
    Controller.api.handleResponse(response, type);
  }
  /**
   * @param result {{}}
   * @param type {string}
   */
  api.handleResponse = function (result, type){
    try{
      Model.validations.response.responseResult(result);
      Model.api.handleListResult(result.results, type);
      View.printData.loader(false);
    }
    catch (err){
      View.printData.error(true);
      console.log(err.toString());
    }
  }
  return api;
})();
/**
 *  Controller favourites
 */
Controller.favourites = (function (){
  function favourites (){
  }
  /**
   * @param elementObj {{}}
   * @param id {int}
   */
  favourites.eventHandler = function (elementObj, id){
    var saveIt = !!$(elementObj).hasClass('notSaved');
    if(saveIt){
      Model.cookies.set(id, true);
      View.favourites.markAsFavourite(elementObj);
    }
    else{
      Model.cookies.remove(id);
      View.favourites.markAsNotFavourite(elementObj);
    }
  }
  return favourites;
})();