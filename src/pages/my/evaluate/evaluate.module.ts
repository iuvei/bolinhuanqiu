import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {EvaluatePage} from "./evaluate";
@NgModule({
  declarations:[EvaluatePage],
  imports:[
    IonicPageModule.forChild(EvaluatePage)
  ],
  exports:[EvaluatePage]
})

export class EvaluateModule{

}
