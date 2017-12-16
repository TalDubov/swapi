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
  return printData;
})();
/**
 * View favourites
 */
View.favourites = (function (){
  function favourites (){
  }
  favourites.markAsFavourite = function (elementObj){
    $(elementObj).removeClass('notSaved');
  }
  favourites.markAsNotFavourite = function (elementObj){
    $(elementObj).addClass('notSaved');
  }
  return favourites;
})();