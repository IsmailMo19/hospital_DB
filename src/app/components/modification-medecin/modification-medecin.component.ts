import { Component, OnInit } from "@angular/core";
import { Doctor } from "../../../../../common/tables/Doctor";
import { CommunicationService } from "src/app/services/communication.service";
import { Services } from "../../../../../common/tables/Services";
import { Router } from "@angular/router";

@Component({
  selector: "app-modification-medecin",
  templateUrl: "./modification-medecin.component.html",
  styleUrls: ["./modification-medecin.component.css"],
})
export class ModificationMedecinComponent implements OnInit {
  medecins: Doctor[] = [];
  modifiedDoctor: Doctor = {
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
    this.getMedecins();
  }

  getServices() {
    this.communicationService.getServices().subscribe((result: any[]) => {
      this.services = result;
    });
  }

  getMedecins(): void {
    this.communicationService.getMedecins().subscribe((data: any[]) => {
      this.medecins = data.sort((x, y) => x.idmedecin - y.idmedecin);
    });
  }

  modifierMedecin(doctor: Doctor): void {
    this.communicationService
      .modifierMedecin(doctor)
      .subscribe((updatedDoctor: Doctor) => {
        const index = this.medecins.findIndex(
          (med) => med.idmedecin === updatedDoctor.idmedecin
        );
        if (index !== -1) {
          this.medecins[index] = { ...updatedDoctor };
        }

        this.router.navigate(["/medecins"]);
      });
  }

  isValidForm(doctor: Doctor): boolean {
    return (
      !!doctor.prenom &&
      !!doctor.nom &&
      !!doctor.specialite &&
      !!doctor.idservice &&
      doctor.idservice !== -1 &&
      !!doctor.anneesexperience &&
      typeof doctor.anneesexperience === "number"
    );
  }
}
