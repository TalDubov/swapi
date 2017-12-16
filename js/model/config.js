/**
 * Created by TalDubov on 15/12/2017.
 */
/**
 * @type {{people: string, films: string, planets: string}}
 */
Model.config = {
  people: {
    name: "people",
    root: "https://swapi.co/api/people/",
    validationModel: "./js/model/validations/personType.js",
    viewModel: "./js/view/items/personType.js"
  },
  films : {
    name: "films",
    root: "https://swapi.co/api/films/",
    validationModel: "./js/model/validations/filmType.js",
    viewModel: "./js/view/items/filmType.js"
  },
  planets : {
    name: "planets",
    root: "https://swapi.co/api/planets/",
    validationModel: "./js/model/validations/planetType.js",
    viewModel: "./js/view/items/planetType.js"
  }
};
$.getScript('./js/model/validations/validations.js', function(){});
$.getScript('./js/view/items/items.js', function(){});