
# Angular 4 Design Pattern

**A4** is a design pattern for large scale angular 4 applications that is easy to implement and use.

## Code Seperation

**A4** categorize app basics like (services, directives,etc) to seperate parts. components and directives have seperate modules to import in project.

```typescript
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FrameworkDirectiveModule,
    FrameworkComponentModule
]
```

## Components

A4 have a `BaseComponent` that provide common services for other components, `BaseComponent` have two Generic types, First one is component model and second is component service for CRUD and other database interactions.For dynamic injection `BaseComponent` use `Injector` and `ReflectiveInjector` for resolve and create providers and services.When a component extends `BaseComponent` by inheritance component have two property: a model and service.

```typescript
export class SampleComponent extends BaseComponent<User,UserService> implements OnInit {

  constructor(injector : Injector){
    super(injector);
  }
  onSubmit() : void{
    this.service.post(this.model);
  }

  ngOnInit() {
  }

}
```

## Services

###### HtppService
A4 have a `HttpService` that use Angular native http provider for database interactions.

###### JsonpService
A4 have a `JsonpService` that use Angular native http provider for database interactions.

###### BaseDataService
A4 have a `BaseDataService` that provide common CRUD actions like: (POST,GET,GETALL,...), `BaseDataService` have one Generic type that is the service model.`BaseDataService` use `HttpService` for CRUD.

for example when an app service extends `BaseDataService` then it have all common methods already and could have add more specific methods.

```typescript
@Injectable()
export class UserService extends BaseDataService<User>{

  constructor(injector : Injector) {
    super(injector);
  }
  
  public login(user : User) : Obervable<T> {
    return this.http.post(user);
  }

}
```

## Validation

###### :clock130: Comming soon... 


_______________________________________________________________________________________________________

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

###### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

###### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

###### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

###### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

###### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

###### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
