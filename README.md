# Criando o modulo
`ng g m --routing servicoPrestado`

# criando o componente
`ng g c --skipTests=true servico-prestado/servicoPrestadoForm`
<br />
<br />
`ng g c --skipTests=true servico-prestado/servicoPrestadoLista`

### Passo 1 : Apos criar os componentes entre no modulo em 'servico-prestado.module.ts' e adicione os componentes para importacao
`exports: [`

>  ServicoPrestadoFormComponent, <br />
   ServicoPrestadoListaComponent
> 
]

## Passo 2 : Adicione o RouterModule e formsModule no imports:
`import: [`

>  FormsModule, <br />
    RouterModule
>
]

### passo 3: import o modulo de servico no module principal ' app.modules.ts' :
`import: [`

>  ServicoPrestadoModule
>
]

### Criar o servico do servicoPrestado:
`ng g s servicoPrestado --skipTests=true`

### Adicione o  servicoPrestado em app.modules providers:

`import: [`

>  ServicoPrestadoModule

]

# ClientesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
