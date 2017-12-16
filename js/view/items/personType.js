/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 * Person type
 */
View.items.personType = (function (){
  function personType (){
  }
  personType.prototype = Object.create(View.items.typeAbstract.prototype);
  personType.prototype.printItem = function (personDetails, markedAsFavourite){
    var templateItem = "";
    templateItem = jQuery('#personItemTemplate').prop('outerHTML');
    templateItem = templateItem.replace('[NAME]', personDetails.name);
    templateItem = templateItem.replace('[HEIGHT]', personDetails.height);
    templateItem = templateItem.replace('personItemTemplate', personDetails.url);
    templateItem = templateItem.replace('templates', this.typeName);
    if(markedAsFavourite){
      templateItem = templateItem.replace('notSaved', '');
    }
    View.printData.newItemAppend(templateItem);
  }
  return personType;
})();
