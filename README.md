# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Final Project Description

Basic Idea: This final project is a recipes website, where people can create recipes and share them or search for recipes using the yummly API.

It is designed keeping in mind two types of users, Chefs and Foodies.

Chefs : are users who like to create recipes and share them online.
        They can create recipes(CRUD operations), but cannot view other Foodies or Chefs recipes. 
        They also cannot search recipes using the yummly API.

Foodies: are users who cook for fun, but are not professional chefs.
         They cannot create recipes like Chefs but can view a list of other Chefs and their recipes.
         They can also search for recipes through the yummly API. 
        
Below is a brief description of the pages:

Profile Page: Displays details of each user and provides links to other pages based on their roles(Chef, Foodie)

My Recipes: Chefs can view a list of recipes created by them.

View Recipe: View details of recipes created by Chefs (Foodies and Chefs can view chef's recipe details).

Search Yummly: Foodies can search for recipes through the Yummly API and can view details by clicking on each recipe image.

Chef's Recipes: Foodies can view recipes created by Chefs and view recipe details.

Edit Recipe: Chefs can also edit/delete the recipes created by them.

Register: User can register as a Chef or a Foodie and can update their details or delete their account as well.

