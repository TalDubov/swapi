/**
 * Created by TalDubov on 13/12/2017.
 */
/**
 * @type {{printData, favourites}}
 */
var View = {};
/**
 *  View printData
 */
View.printData = (function (){
  function printData (){
  }
  /**
   * @param item {string}
   */
  printData.newItemAppend = function (item){
    jQuery('#mainList').append(item);
  }
  /**
   *  clean the list in html
   */
  printData.cleanList = function (){
    this.loader(true);
    this.error(false);
    jQuery('li:not(.templates)').remove();
  }
  /**
   * @param show {boolean}
   */
  printData.loader = function (show){
    if(show){
      jQuery('#loader').show();
    }
    else{
       jQuery('#loader').hide();
    }
  }
  /**
   * @param show {string}
   */
  printData.error = function (show) {
    if(show){
      jQuery('#error_message').show();
    }
    else{
      jQuery('#error_message').hide();
    }
  }
  return printData;
})();
/**
 * View favourites
 */
View.favourites = (function (){
  function favourites (){
  }
  /**
   * @param elementObj {}
   */
  favourites.markAsFavourite = function (elementObj){
    $(elementObj).removeClass('notSaved');
  }
  /**
   * @param elementObj {}
   */
  favourites.markAsNotFavourite = function (elementObj){
    $(elementObj).addClass('notSaved');
  }
  return favourites;
})();