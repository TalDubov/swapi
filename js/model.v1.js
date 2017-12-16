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
Model.request = (function () {
  function request () {
  }
  /**
   *
   * @param type {string}
   */
  request.createRequest = function(type) {
    var url = Model.api.getRoot(type);
    var result =  jQuery.ajax({
      url: url,
      type: 'GET',
      async:false,
      error: function(data) { // TODO: handle with the data of error
        throw new Error('Error With Ajax', 201712122352);
      }
    });
    if(result.responseJSON === undefined) {
      throw new Error('Error With Ajax', 201712122353);
    }
    return result.responseJSON;
  }
  return request;
})();
/**
 *  Model People
 */
Model.api = (function () {
  function api () {
  }
  api.getRoot = function  (type) {
    for(var key in Model.config) {
      if(Model.config[key].name === type) {
        return Model.config[key].root;
      }
    }
    throw new Error("No such type", 20171214002);
  }
  /**
   * @param list {{}}
   * @param type {string}
   */
  api.handleListResult = function (list, type) {
    for(var i in list) {
      var markedAsFavourite = false;
      try{
        var validationType = Model.validations.factory.getValidationByType(type);
        validationType.itemData(list[i]);
        markedAsFavourite = Model.cookies.get(list[i].url, type);
        var viewType = View.items.factory.getViewByType(type);
        viewType.printItem(list[i], markedAsFavourite);
      }
      catch (err) {
        console.log(err.toString());
      }
    }
  }
  return api;
})();
/**
 *  Model Cookies
 */
Model.cookies = (function () {
  function cookies () {
  }
  cookies.set = function (key, value) {
    $.cookie(key,value, { expires : 10});
  }
  cookies.get = function (key) {
    return $.cookie(key);
  }
  cookies.remove = function (key) {
    $.removeCookie(key);
  }
  return cookies;
})();
$.getScript('./js/model/config.js', function(){});