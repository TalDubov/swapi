/**
 * Created by TalDubov on 12/12/2017.
 */
/**
 *
 * @type {{roots,validations,request,api,cookies, validations, view}}
 */
var Model = {};
/***
 *  Model Request
 */
Model.request = (function (){
  function request (){
  }
  /**
   * @param type
   * @return {*}
   */
  request.createRequest = function(type){
    var url = Model.api.getRoot(type);
    var result =  jQuery.ajax({
      url: url,
      type: 'GET',
      async:false,
      error: function(data){ // TODO: handle with the data of error
        throw new Error('Error With Ajax', 201712122352);
      }
    });
    if(result.responseJSON === undefined){
      throw new Error('Error With Ajax', 201712122353);
    }
    return result.responseJSON;
  }
  return request;
})();
/**
 *  Model People
 */
Model.api = (function (){
  function api (){
  }

  /** Get the url from config file by the type of it
   * @param type {string}
   * @return {string}
   * @throws Error
   */
  api.getRoot = function  (type){
    for(var key in Model.config){
      if(Model.config[key].name === type){
        return Model.config[key].root;
      }
    }
    throw new Error("No such type", 20171214002);
  }
  /**
   * @param list {{}}
   * @param type {string}
   */
  api.handleListResult = function (list, type){
    var markedAsFavourite = false;
    for(var i in list){
      try{
        var validationType = Model.validations.factory.getValidationByType(type); // Get the validation for this type
        validationType.itemData(list[i]); // Validate the item data by type validator
        markedAsFavourite = Model.cookies.get(list[i].url, type); // Get from cookie the stored data if exists
        var viewType = View.items.factory.getViewByType(type); // Get the view for this type
        viewType.printItem(list[i], markedAsFavourite);
      }
      catch (err){
        console.log(err.toString()); // Only log for the specific item, it wont break
      }
    }
  }
  return api;
})();
/**
 *  Model Cookies
 */
Model.cookies = (function (){
  function cookies (){
  }
  /**
   * @param key {string}
   * @param value {string}
   */
  cookies.set = function (key, value){
    $.cookie(key,value, { expires : 10});
  }
  /**
   * @param key {string}
   */
  cookies.get = function (key){
    return $.cookie(key);
  }
  /**
   * @param key {string}
   */
  cookies.remove = function (key){
    $.removeCookie(key);
  }
  return cookies;
})();
$.getScript('./js/model/config.js', function(){});