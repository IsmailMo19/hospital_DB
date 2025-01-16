import { Component, OnInit } from "@angular/core";
import { Doctor } from "../../../../../common/tables/Doctor";
import { Services } from "../../../../../common/tables/Services";
import { CommunicationService } from "src/app/services/communication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-insert-medecin",
  templateUrl: "./insert-medecin.component.html",
  styleUrls: ["./insert-medecin.component.css"],
})
export class InsertMedecinComponent implements OnInit {
  medecins: Doctor[] = [];
  addedDoctor: Doctor = {
    idmedecin: -1,
    idservice: -1,
    prenom: "Jane",
    nom: "Doe",
    anneesexperience: 5,
    specialite: "Neurologie",
  };

  displayedColumns: string[] = [
    "idmedecin",
    "idservice",
    "prenom",
    "nom",
    "specialite",
    "anneesexperience",
    "actions",
  ];

  services: Services[] = [];

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getServices();
  }

  getMedecins(): void {
    this.communicationService.getMedecins().subscribe((data: any[]) => {
      this.medecins = data;
    });
  }

  addMedecin(): void {
    this.communicationService.addMedecin(this.addedDoctor).subscribe(() => {
      this.router.navigate(["/medecins"]);
    });
  }

  getServices() {
    this.communicationService.getServices().subscribe((result: any[]) => {
      this.services = result;
    });
  }

  isValidForm(): boolean {
    return (
      !!this.addedDoctor.prenom &&
      !!this.addedDoctor.nom &&
      !!this.addedDoctor.specialite &&
      !!this.addedDoctor.anneesexperience &&
      typeof this.addedDoctor.anneesexperience === "number" &&
      this.addedDoctor.idservice !== -1
    );
  }
}
