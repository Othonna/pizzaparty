import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  
  // ma superpizza est "typée"
  maSuperPizza: Pizza;

  // On peut typer un tableau
  mesPizzas: Pizza[] = [];

  // on peut créer une fonction / une méthode
  onSelect(pizza: Pizza) {
    console.log(pizza);
    // Je vais modifier la valeur de ma SuperPizza
    this.maSuperPizza = pizza;
    // remonter en haut de la page
    window.scrollTo(0, 0);
  }

  // Ce qu'on fait ici s'appelle l'injection de dépendances
  // On récupère l'instance d'une classe (pizzaservice) dont
  // dépend notre PizzaList Component
  constructor(private pizzaService : PizzaService) {
    
   }

// Ce code s'exécute quand le composant est initialisé
  ngOnInit(): void {
    /* let self = this;
    this.pizzaService.getPizzas().then(function (pizzas) {
       console.log(pizzas);
       self.mesPizzas = pizzas;
       console.log(self);
    }); */ 

    // arrow function est un raccourci de la syntaxe du dessus
    // On appelle la méthode getPizzas du service pizzaSevice qui nous renvoie une promesse
    // Suite à la résolution de l apromesse (then), on a un tableau de pizzas
    // Le this (qui est donc PizzaListComponent)
    this.pizzaService.getPizzasSlowly().then(pizzas => { this.mesPizzas = pizzas; });
    // remettre getPizzas quand on veut revenir sur la latence normale
  }

}
