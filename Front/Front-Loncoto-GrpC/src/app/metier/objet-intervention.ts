export class Intervention{
    public constructor(public id :number,
                        public datePrevu: Date,
                        public dateEffectue: Date,
                        public statut: string,
                        public commentaire: string,
                        public id_Materiel: number,
                        public id_Intervenant: number
                    )
                         
                       
                         {}
    
/*
    public copyFrom(other: Intervention){
        this.id=other.id;
        this.datePrevu=other.datePrevu;
        this.dateEffectue=other.dateEffectue;
        this.statut=other.statut;
        this.commentaire=other.commentaire;
        this.id_Materiel=other.id_Materiel;
        this.id_Intervenant=other.id_Intervenant;
    }*/
    public toJson(){
        return {
            datePrevu:this.datePrevu,
            dateEffectue: this.dateEffectue,
            statut: this.statut,
            commentaire:this.commentaire,
            id_Materiel: this.id_Materiel,
            id_Intervenant: this.id_Intervenant,
        };
    }
    public copyfrom(source:Intervention){
        this.id=source.id;
        this.datePrevu=source.datePrevu;
        this.dateEffectue=source.dateEffectue;
        this.statut=source.statut;
        this.commentaire=source.commentaire;
        this.id_Materiel=source.id_Materiel;
        this.id_Intervenant=source.id_Intervenant;
    }

}