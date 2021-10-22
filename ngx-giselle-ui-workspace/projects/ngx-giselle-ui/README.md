# Ngx Giselle UI 

IMPORTANT NOTICE: We just started this account and are working hard in these days to pull in all the components available in this package, so at the moment, this library is not yet ready to use. We will update this documentation as soon as we achieve in adding all necessary components that we are planning to for the first stage. What you will get from this package now is just a set of empty placeholder components which we are trying hard to populate. If you'd like to help and speed this up and contribute, please head to the Github account: https://github.com/AlexRebula/GiselleUI

# What is this package for 

This is a library of UI components much like Angular Material would do. The default CSS framework used here is Bulma. What makes this library unique is that the collection of components does not siply stop at basic UI components such as dropdowns, sections etc.. This Framework brings together the power of simple UI components done using the atomic design priciple and some powerful template components for crud operations such as the Record Manager, Record Manager Wizard, AG Grid wrapper, comparison Matrix component and more.

The ultimate aim for this framework is to offer a free alternative to expensive professional UI frameworks on the market.

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
