import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedecinsComponent } from './components/medecins/medecins.component';
import { ModificationMedecinComponent } from './components/modification-medecin/modification-medecin.component';
import { InsertMedecinComponent } from './components/insert-medecin/insert-medecin.component';
import { DeleteMedecinComponent } from './components/delete-medecin/delete-medecin.component';

@NgModule({
  declarations: [
    AppComponent,
    MedecinsComponent,
    ModificationMedecinComponent,
    InsertMedecinComponent,
    DeleteMedecinComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
