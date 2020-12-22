```
npx create-nx-workspace@latest --linter=eslint --style=scss --no-nx-cloud
npm install -D @nrwl/angular

- nx generate @nrwl/angular:application --name=customer-portal --style=scss --linter=eslint --routing --strict --tags=customerfacing
  - nx generate @nrwl/angular:ngrx --name=products --module=/apps/customer-portal/src/app/app.module.ts --barrels --root
      ? What name would you like to use for the NgRx feature state? An example would be "users". products
      ? Is this the root state of the application? Yes
      ? Would you like to use a Facade with your NgRx state? No

nx generate @nrwl/angular:application --name=admin-portal --style=scss --linter=eslint --routing --strict --tags=admin

- nx generate @nrwl/angular:library --name=auth --style=scss --linter=eslint --tags=auth
  - nx generate @nrwl/angular:component --name=container/login --project=auth --style=scss --export
  - nx generate @nrwl/angular:component --name=components/login-form --project=auth --style=scss
  - nx generate @nrwl/angular:service --name=services/auth --project=auth --no-flat
  - nx generate @schematics/angular:guard --name=guards/auth --project=auth --no-flat --implements=CanActivate
  - nx generate @schematics/angular:interceptor --name=interceptors/auth/auth --project=auth
  - nx generate @nrwl/angular:ngrx --name=auth --module=libs/auth/src/lib/auth.module.ts --barrels
    ? Is this the root state of the application? No
    ? Would you like to use a Facade with your NgRx state? No

- nx generate @nrwl/angular:library --name=material --style=scss --linter=eslint --tags=material --export
- nx generate @nrwl/workspace:library --name=data-models --tags=data-models

- nx generate @nrwl/angular:library --name=layout --style=scss --linter=eslint --tags=layout --export
  - nx generate @nrwl/angular:component --name=containers/layout --project=layout --style=scss --export
  - nx generate @nrwl/angular:component --name=components/layout-form --project=layout --style=scss

- nx generate @nrwl/angular:library --name=products --style=scss --linter=eslint --routing --lazy --parentModule=apps/customer-portal/src/app/app.module.ts
  - nx generate @nrwl/angular:component --name=containers/products --project=products --style=scss --export
  - nx generate @schematics/angular:component --name=components/product-list --project=products --module=products.module.ts --style=scss
  - nx generate @nrwl/angular:ngrx --name=products --module=libs/products/src/lib/products.module.ts --barrels
    ? Would you like to use a Facade with your NgRx state? No
  - nx generate @nrwl/angular:service --name=services/products --project=products --no-flat

npm install @ngrx/store @ngrx/store-devtools @ngrx/effects @ngrx/entity @ngrx/router-store
npm install @angular/animations @angular/material @angular/flex-layout @angular/cdk
npm install core-js uuid

npm install --save-dev json-server
npm install --save-dev concurrently
npm install --save-dev @types/uuid
npm install --save-dev @angular/language-service

```

nx dep-graph

# see what's been affected by changes

ng affected:dep-graph

# run tests for current changes

ng affected:test

# run e2e tests for current changes

ng affected:e2e

```

npm init nx-workspace contoso-books --npm-scope=contoso-books --preset=angular --app-name=inventory --linter=eslint --no-nx-cloud --style=scss --package-manager=npm

ng generate @schematics/angular:module --name=material --project=inventory --no-interactive --dry-run

```

[https://www.youtube.com/watch?v=VJYNljjHiok
](https://www.youtube.com/watch?v=VJYNljjHiok)

[JasonHodges Gibhub MonoRepo
](https://github.com/jasonhodges/monorepo)

[Pluralsight: Building Enterprise Angular apps with Nx by Lars Klint and Duncan Hunter](https://app.pluralsight.com/library/courses/play-by-play-building-enterprise-angular-apps-with-nx)

[Enterprise Angular Applications with Ngrx and Nx
](https://github.com/duncanhunter/Enterprise-Angular-Applications-With-NgRx-and-Nx-Book)

> [NOTE]
>
> [Github Repo
> ](https://github.com/duncanhunter/Enterprise-Angular-Applications-With-NgRx-and-Nx-Book)
>
> [Source code](https://github.com/duncanhunter/Demo-App-NDC-Oslo-2018-Enterprise-Angular-applications-with-ngrx-and-nx)

[Material Flex Layout](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

- https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/6-angular-material. you can get to this link to Material Flex Layout github repo as well.

```

"dependencies": {
"@angular/animations": "^11.0.5",
"@angular/cdk": "^11.0.3",
"@angular/common": "^11.0.0",
"@angular/compiler": "^11.0.0",
"@angular/core": "^11.0.0",
"@angular/flex-layout": "^11.0.0-beta.33",
"@angular/forms": "^11.0.0",
"@angular/material": "^11.0.3",
"@angular/platform-browser": "^11.0.0",
"@angular/platform-browser-dynamic": "^11.0.0",
"@angular/router": "^11.0.0",
"rxjs": "^6.5.5",
"tslib": "^2.0.0",
"zone.js": "^0.10.2"
}
```
