import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Groupe } from 'src/app/metier/objet-groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupesRepositoryService {

  private groupesSubject: BehaviorSubject<Array<Groupe>>
  
  //injection du client
  constructor(private http: HttpClient){
    this.groupesSubject= new BehaviorSubject([]) ;

  }

public getGroupesAsObservable(): Observable <Array<Groupe>> {
  return this.groupesSubject.asObservable();
}

  public refreshListe():void{
    // requete vers le serveur
    // il rapellera mon subscribe avec des donnees deja converties
    this.http.get<Array<Groupe>>("http://localhost:3000/groups")
        .subscribe(data=>{
          this.groupesSubject.next(data)
        });

  }

  public findById(id:number):Observable<Groupe>{
    return this.http.get<Groupe>(`http://localhost:3000/groupes/${id}`);
  }


  public deleteGroup(id:number) : void {
    this.http.delete(`http://localhost:3000/groupes/${id}`)
    .subscribe(resp =>{
            this.refreshListe();
    });
  }
  public updateGroup(groupe : Groupe): void {
    this.http.put(`http://localhost:3000/groupes/${groupe.id}`, groupe.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }
}
