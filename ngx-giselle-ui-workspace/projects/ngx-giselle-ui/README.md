# Ngx Giselle UI 

> We just started this account and are working hard in these days to pull in all the components available in this package. This means that at the moment, this library is not yet ready to use. But it will be soon! We will update this documentation as soon as we achieve in adding all necessary components that we are planning. You know, Rome was not built in one day! :) If you'd like to help and speed this up and contribute, please head to the Github account: https://github.com/AlexRebula/GiselleUI

# What is this package for 

Giselle UI is a library of UI components, much like Angular Material. It is still in early life-cycle stages and it cannot yet compare with Angular Material, but the long-term goal is to make yet another alternative with Bulma CSS. 

The vision of this library is to create such a library where the collection of components will not simply stop at basic UI components like dropdowns, sections etc... you know, the basic stuff. This Framework's aim is going to be bringing together the power of simple UI components using Bulma while all being done using the atomic design principle and some powerful template components for CRUD operations such as the Entity Manager, Entity Manager Wizard, AG Grid Wrapper, Matrix and more.

iN other words the ultimate long-term aim for this framework is to offer a free, oen source alternative to expensive professional UI frameworks currently on the market.

# How to install in the consuming project

1. Run 'npm i @alexrebula/nxg-giselle-ui'
2. Install all peer dependencies suggested in the console
3. In angular.json file of your consuming project make sure you have added styles for bulma: '"styles": ["node_modules/bulma/css/bulma.css"],'

# For developers

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-giselle-ui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-giselle-ui`.
> Note: Don't forget to add `--project ngx-giselle-ui` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-giselle-ui` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-giselle-ui`, go to the dist folder `cd dist/ngx-giselle-ui` and run `npm publish`.

## Running unit tests

Run `ng test ngx-giselle-ui` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
