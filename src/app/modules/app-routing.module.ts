import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { MedecinsComponent } from "../components/medecins/medecins.component";
import { ModificationMedecinComponent } from "../components/modification-medecin/modification-medecin.component";
import { InsertMedecinComponent } from "../components/insert-medecin/insert-medecin.component";
import { DeleteMedecinComponent } from "../components/delete-medecin/delete-medecin.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "medecins", component: MedecinsComponent },
  { path: "medecins/modification", component: ModificationMedecinComponent },
  { path: "medecins/insert", component: InsertMedecinComponent },
  { path: "medecins/delete", component: DeleteMedecinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
