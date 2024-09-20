
# GithubEventsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



# Listing GitHub Events
- Listar eventos públicos no geral (Volume massivo de dados)

   - Endpoint: https://api.github.com/events

   - Exemplo de retorno: https://gist.githubusercontent.com/henriqueln7/91bba89c5a7263a56169c84b46c609a7/raw/c9116d53b0aa63bdc5e63bebc488d867ab746a47/list_events_all_public.json

   - Possíveis usos:

        - Filtrar por tipos de eventos

- Listar eventos de um repositório

   - Endpoint: https://api.github.com/repos/rails/rails/events

   - Exemplo de retorno: https://gist.githubusercontent.com/henriqueln7/1ca0c58ff3e8e4cf929ee77d90a9f9b3/raw/059885fc4a899a5d95e6ccd8a6bc38401bdfece7/list_events.json

   - Possíveis usos:
        - Filtrar por tipos de eventos. 
        - Visualizar a frequência de cada evento

