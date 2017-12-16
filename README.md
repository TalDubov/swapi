# Usage
you should upload it to any web server (index.html is the starting point)



# Directories
Css: the style files.

js: including all the logic files .

js/view: including all the model logic for view.

js/libaries: using js libaries.

js/tests: including all the units test.

js/model: models for different types of api.

js/model/config.js: the api types configuration

.htaccess for allowing the external requests for the api.

# Development Usage
To add a new api you need to the following updates:

- create a new type of view (/js/view/newType) with the specific data you want to print

- create a new type of validation (/js/validations/newType) with specific fields you want to validate

- add the new 2 files above to the [js/model/config.js ](https://github.com/taltulik/swapi/blob/master/js/model/config.js) and write a name for the new type

- add the new type to the index.html file


## Authors
[Tal Dubov](https://github.com/taltulik)
