import {Component, OnInit,ViewChild} from '@angular/core';
import {AuthguardService} from "../../services/AuthGuardService/authguard.service";
import {TechnicienService} from "../../services/TechnicienService/technicien.service";
import {RendezVous} from "../../modeles/RendezVousModele/rendez-vous";
import {RendezVousService} from "../../services/RendezVousService/rendez-vous.service";
import {NgForOf, NgIf} from "@angular/common";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {RendezVousCardComponent} from "../rendez-vous-card/rendez-vous-card.component";
import {Technicien} from "../../modeles/TechnicienModele/technicien";
import {Client} from "../../modeles/ClientModele/client";
import {RendezVousModifierComponent} from "../rendez-vous-modifier/rendez-vous-modifier.component";
import {RendezVousCalendrierComponent} from "../rendez-vous-calendrier/rendez-vous-calendrier.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Vehicule} from "../../modeles/VehiculeModele/vehicule";
import {ClientService} from "../../services/ClientService/client.service";
import {VehiculeService} from "../../services/VehiculesService/vehicule.service";
import {VehiculeModifierComponent} from "../vehicule-modifier/vehicule-modifier.component";

@Component({
  selector: 'app-rendez-vous-page',
  standalone: true,
  imports: [
    NgIf,
    LoadingSpinnerComponent,
    NgForOf,
    RendezVousCardComponent,
    RendezVousModifierComponent,
    RendezVousCalendrierComponent,
    FormsModule,
    ReactiveFormsModule,
    VehiculeModifierComponent
  ],
  templateUrl: './rendez-vous-page.component.html',
  styleUrl: './rendez-vous-page.component.css'
})
export class RendezVousPageComponent implements OnInit{

  rendezVous: RendezVous[] = [];
  isLoadingRendezVous = true;

  constructor(
    private rendezVousService: RendezVousService,
    private authguardService: AuthguardService
  ) { }


  ngOnInit() {
    this.loadRendezVous();
  }

  /**
   * Appelle le service pour récupérer la liste des rendez-vous
   */
  loadRendezVous(): void {
    this.rendezVousService.getRendezVous().subscribe(response => {
      if (response.body !== null && response.status === 200) {
        this.rendezVous = response.body;
      }
      this.isLoadingRendezVous = false;
    });
  }



}
