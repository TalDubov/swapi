/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 * Film type
 */
View.items.filmType = (function (){
  function filmType (){
  }
  filmType.prototype = Object.create(View.items.typeAbstract.prototype);
  filmType.prototype.printItem = function (filmDetails, markedAsFavourite){
    var templateItem = "";
    templateItem = jQuery('#filmItemTemplate').prop('outerHTML');
    templateItem = templateItem.replace('[TITLE]', filmDetails.title);
    templateItem = templateItem.replace('[DIRECTOR]', filmDetails.director);
    templateItem = templateItem.replace('filmItemTemplate', filmDetails.url);
    templateItem = templateItem.replace('templates', this.typeName);
    if(markedAsFavourite){
      templateItem = templateItem.replace('notSaved', '');
    }
    View.printData.newItemAppend(templateItem);
  }
  return filmType;
})();