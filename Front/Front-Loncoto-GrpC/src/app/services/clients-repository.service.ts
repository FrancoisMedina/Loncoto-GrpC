import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/metier/objet-client';

@Injectable({
  providedIn: 'root'
})
export class ClientsRepositoryService {

  private clientsSubject: BehaviorSubject<Array<Client>>
  
  //injection du client
  constructor(private http: HttpClient){
    this.clientsSubject= new BehaviorSubject([]) ;

  }

public getClientsAsObservable(): Observable <Array<Client>> {
  return this.clientsSubject.asObservable();
}

  public refreshListe():void{
    // requete vers le serveur
    // il rapellera mon subscribe avec des donnees deja converties
    this.http.get<Array<Client>>("http://localhost:3000/clients")
        .subscribe(data=>{
          this.clientsSubject.next(data)
        });

  }

  public findById(id:number):Observable<Client>{
    return this.http.get<Client>(`http://localhost:3000/clients/${id}`);
  }


  public deleteClient(id:number) : void {
    this.http.delete(`http://localhost:3000/clients/${id}`)
    .subscribe(resp =>{
            this.refreshListe();
    });
  }
  public updateClient(client : Client): void {
    this.http.put(`http://localhost:3000/clients/${client.id}`, client.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }
}
