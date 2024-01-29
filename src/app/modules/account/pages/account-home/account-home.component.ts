import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { switchMap, of, Observable } from 'rxjs';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrl: './account-home.component.scss'
})
export class AccountHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  id: number = 0;

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.id = +params['id']
      console.log("id : ",this.id);
      
    }) 
     // le + devant +params sert à convertir l'id qui est un string en number


    //  this.route.params.pipe(
    //   switchMap(params => {
    //     this.id = +params['id'];
    //     console.log("id : ",this.id);
    //     return of(this.id)
    //   }) 
    //   ).subscribe();
  }
}


// Dans le code ci dessus avec switchMap (plus utile depuis que j'ai utilisé un getter et un setter sur id 
//dans AccountGestionComponent), switchMap s’abonne à route.params et met à jour this.id chaque fois que les paramètres 
//de la route changent. Cela garantit que votre composant réagit aux changements de paramètres de route, 
//même lorsque le composant est réutilisé. Notez que vous devez vous désabonner de ce flux d’observable lorsque le composant 
//est détruit pour éviter les fuites de mémoire. Vous pouvez le faire en utilisant l’opérateur takeUntil ou en stockant 
//la souscription et en vous désabonnant dans ngOnDestroy.
