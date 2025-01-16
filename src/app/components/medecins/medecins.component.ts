import { Component, OnInit } from "@angular/core";
import { CommunicationService } from "src/app/services/communication.service";
import { Doctor } from "../../../../../common/tables/Doctor";

@Component({
  selector: "app-medecins",
  templateUrl: "./medecins.component.html",
  styleUrls: ["./medecins.component.css"],
})
export class MedecinsComponent implements OnInit {
  medecins: Doctor[] = [];
  displayedColumns: string[] = [
    "idmedecin",
    "idservice",
    "prenom",
    "nom",
    "specialite",
    "anneesexperience",
  ];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.getMedecins();
    this.communicationService.medecins$.subscribe((medecins) => {
      this.medecins = medecins;
    });
  }

  getMedecins(): void {
    this.communicationService.getMedecins().subscribe((data: any[]) => {
      this.medecins = data.sort((x, y) => x.idmedecin - y.idmedecin);
    });
  }
}
