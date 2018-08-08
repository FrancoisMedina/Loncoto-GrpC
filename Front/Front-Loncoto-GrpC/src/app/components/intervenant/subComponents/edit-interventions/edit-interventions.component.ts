import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';
import { InterventionRepositoryService } from '../../../../services/interventions-repository.service';


@Component({
  selector: 'app-edit-interventions',
  templateUrl: './edit-interventions.component.html',
  styleUrls: ['./edit-interventions.component.css']
})
export class LivreEditComponent implements OnInit, OnChanges {

  @Input() public editId: number;
  public currentIntervention: Intervention;
  
  constructor(private interventionRepository:InterventionRepositoryService) { }

  ngOnInit() {
    this.currentIntervention=new Intervention(0,null, null,"rien","aucun",0,0);
  }
  ngOnChanges(changes:any){
    if (this.editId==0){
      this.currentIntervention=new Intervention(0,null, null,"rien","aucun",0,0);
    }
    else {
      this.interventionRepository.findById(this.editId).subscribe(intervention=>{
        this.currentIntervention=intervention;
      });
    }

  }

  public saveIntervention(){
    if (this.currentIntervention.id>0){
      let interventionToSave=new Intervention(0,null, null,"rien","aucun",0,0);;
      
      interventionToSave.copyfrom(this.currentIntervention);
      
      this.interventionRepository.updateIntervention(interventionToSave);
      this.currentIntervention=new Intervention(0,null, null,"rien","aucun",0,0);
    }
  }

}
