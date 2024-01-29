import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../../../shared/users.service';
import { User } from '../../../../../models/User.model';

@Component({
  selector: 'app-account-gestion',
  templateUrl: './account-gestion.component.html',
  styleUrl: './account-gestion.component.scss'
})
export class AccountGestionComponent implements OnInit{

  constructor(private userService: UsersService) {}

  // @Input()
  // id: number = 0;

  // user!: User;

  // getUser() :void {
  //   this.userService.getUsers().subscribe(users => this.user = users.find(user => user.id == this.id) as User);
  // }

  // ngOnInit(): void {
  //     this.getUser();
  // }



  //le code ci dessus ne permet pas de mettre à jour user quand l'utilisateur clique sur un nouveau lien (ce qui change l'id)
  //la méthode ci dessous permet de palier le problème

  private _id: number = 0;

  @Input()
  set id(value: number) {
    this._id = value;
    this.getUser();
  }

  get id(): number {
    return this._id;
  }

  user!: User;

  getUser() :void {
    this.userService.getUsers().subscribe(users => this.user = users.find(user => user.id == this.id) as User);
  }

  ngOnInit(): void {
      this.getUser();
  }


}

// Dans ce code, nous avons créé un setter pour id qui appelle getUser() chaque fois que id change. 
// Cela garantit que l’utilisateur est mis à jour chaque fois que id change.

// Dans le code, this._id est une variable privée qui stocke la valeur de id. 
//Le préfixe _ est une convention courante en programmation pour indiquer qu’une variable est privée ou interne.

// Voici une explication détaillée :
// this._id : C’est une variable d’instance privée de la classe AccountGestionComponent. 
//L’underscore _ est une convention courante pour indiquer qu’une propriété ou une variable est destinée à être privée 
//ou interne à la classe.

// @Input() set id(value: number) : C’est un setter pour la propriété id. 
//Un setter est une méthode spéciale qui est appelée lorsque vous affectez une valeur à une propriété. 
//Dans ce cas, chaque fois que vous affectez une valeur à id, cette méthode est appelée.

// this._id = value; : Dans le corps du setter, nous affectons la valeur à this._id. Cela signifie que chaque fois que id change, 
//nous mettons à jour this._id.

// get id(): number : C’est un getter pour la propriété id. Un getter est une méthode spéciale qui est appelée 
//lorsque vous accédez à une propriété. Dans ce cas, chaque fois que vous accédez à id, cette méthode est appelée 
//et la valeur de this._id est renvoyée.

// L’utilisation de getters et de setters est une pratique courante en programmation orientée objet. 
//Ils vous permettent de contrôler comment une propriété est accédée et modifiée. 
//Dans votre cas, nous utilisons un setter pour id pour appeler getUser() chaque fois que id change. 
//Cela garantit que l’utilisateur est mis à jour chaque fois que id change.
