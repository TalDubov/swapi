/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 * Film type
 */
View.items.planetType = (function (){
  function planetType (){
  }
  planetType.prototype = Object.create(View.items.typeAbstract.prototype);
  planetType.prototype.printItem = function (planetDetails, markedAsFavourite){
    var templateItem = "";
    templateItem = jQuery('#planetItemTemplate').prop('outerHTML');
    templateItem = templateItem.replace('[NAME]', planetDetails.name);
    templateItem = templateItem.replace('[POPULATION]', planetDetails.population);
    templateItem = templateItem.replace('planetItemTemplate', planetDetails.url);
    templateItem = templateItem.replace('templates', this.typeName);
    if(markedAsFavourite){
      templateItem = templateItem.replace('notSaved', '');
    }
    View.printData.newItemAppend(templateItem);
  }
  return planetType;
})();