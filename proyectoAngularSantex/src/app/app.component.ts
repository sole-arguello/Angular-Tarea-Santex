import { Component } from '@angular/core';

//type Custom
type Products = {
  position: number
  name: string
  cost: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  //variables para la logica
  showList: boolean = false
  messajeNoList: string = 'No hay una lista para mostrar'
  statusButton: string = 'Mostrar Lista'

  //angular material
  displayedColumns: string[] = ['position', 'name', 'cost'];

  //array
  products: Products[] = [
    { position: 1, name: 'Snorlax', cost: '3500'},
    { position: 2, name: 'Charmander', cost: '2540'},
    { position: 3, name: 'Ivysaur', cost: '2890'},
    { position: 3, name: 'Charmeleon', cost: '3760'},
    { position: 3, name: 'Venusaur', cost: '1754'},
    { position: 3, name: 'Charizard', cost: '3570'},
  ]

  //logiga para el boton
  showDisguiseList(){
    if(this.showList){
      this.showList = false
      this.statusButton = 'Mostrar Lista'
    }else{
      this.showList = true
      this.statusButton = 'Ocultar Lista'
    }
  }


}