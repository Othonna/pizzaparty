import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss']
})
export class PizzaAddComponent implements OnInit {
  // pizza est la proprièté (champ, variable)
  // pizza est le type de la proprièté
  pizza: Pizza = new Pizza(); // on préprare une instance 'vide' d'une pizza (un objet)

  // si contructeur est vide on dit qu'il est implicite 
  constructor(
    private pizzaService: PizzaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  addPizza() {
    // On va appeler le service pour créer la pizza sur l'API
    this.pizzaService.createPizza(this.pizza).then(pizza => console.log(pizza));

    // Redirection vers pizzas
    this.router.navigate(['/pizzas']);
  }

}
