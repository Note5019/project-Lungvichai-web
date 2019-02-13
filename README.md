# LungVichai 
#### Start Project Date : 29-1-2019
---
### วิธีเพิ่ม bootstrap 
1. npm install bootstrap@4 jquery --save
2. go to file "angular.json"
3. add location of bootstrap both "styles" and "scripts"
```
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css" <<< here

            ],
"scripts": [
            "node_modules/jquery/dist/jquery.min.js",             <<< here
            "node_modules/bootstrap/dist/js/bootstrap.min.js"]    <<< here
```
https://stackoverflow.com/questions/50290197/how-to-add-bootstrap-in-angular-6-project

---
### วิธีเพิ่ม ngB
1. npm install --save @ng-bootstrap/ng-bootstrap
2. add to app.modules
```
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';           <<< here

@NgModule({
  ...
  imports: [NgbModule, ...],                                    <<< here
  ...
})
export class YourAppModule {
}
```
https://ng-bootstrap.github.io/#/getting-started

---
### Other
- เพิ่ม FormModule
> npm i @angular/forms
