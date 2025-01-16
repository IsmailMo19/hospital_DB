import { Component, OnInit } from "@angular/core";
import { CommunicationService } from "src/app/services/communication.service";
import { Doctor } from "../../../../../common/tables/Doctor";

@Component({
  selector: "app-delete-medecin",
  templateUrl: "./delete-medecin.component.html",
  styleUrls: ["./delete-medecin.component.css"],
})
export class DeleteMedecinComponent implements OnInit {
  medecins: Doctor[] = [];
  displayedColumns: string[] = [
    "idmedecin",
    "idservice",
    "prenom",
    "nom",
    "specialite",
    "anneesexperience",
    "delete",
  ];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.getMedecins();
  }

  getMedecins(): void {
    this.communicationService.getMedecins().subscribe((data: any[]) => {
      this.medecins = data.sort((x, y) => x.idmedecin - y.idmedecin);
    });
  }

  deleteMedecin(idMedecin: number) {
    this.communicationService.deleteMedecin(idMedecin).subscribe(() => {
      window.location.reload();
    });
  }
}
