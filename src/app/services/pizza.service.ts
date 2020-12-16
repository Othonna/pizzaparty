import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  // Dans PizzaService, j'ai besoin du sercie HttpClient pour
// Permet de récupérer les pizzas sur notre API
  getPizzas(): Promise<Pizza[]>{

    // quand on fait une requète sur API, on doit faire une pormesse
    // On nous permet de nous envoyer une réponse(temps de latence possible)
    // Une promesse est un code asynchrone, c'est à dire que le code peut s'éxécuter

    return this.http.get<Pizza[]>('http://localhost:3000/pizzas').toPromise();

    // this.http.get('https://localhost:3000/Pizza').toPromise()
    //   .then(function(response) {
    //     // Le code qui est ici va s'excuter plus tard
    //     // On dit qu'il est asynchrone
    //     console.log(response);
    //   });
    
  
  }
      getPizzasSlowly(): Promise<Pizza[]> {
     return new Promise(resolve =>{
       setTimeout(() => resolve(this.getPizzas()), 2000);
     });
  }

  createPizzaSlowly(pizza: Pizza): Promise<Pizza> {
    // Ici, je simule une connexion lente sur mon API
    return new Promise(resolve => {
      setTimeout(() => resolve(this.createPizza(pizza)), 2000);
    });
  }
  /*
  *
  * Permet de créer une pizza sur mon API
  * 
  */
  createPizza(pizza: Pizza): Promise<Pizza> {
    // On envoie la pizza à l'API; et l'API nous permets de créer cette Pizza
    // Si c'est le cas, elle nous renvoie la pizza avec son ID
    
    return this.http.post<Pizza>('http://localhost:3000/pizzas', pizza).toPromise();
  }
}
