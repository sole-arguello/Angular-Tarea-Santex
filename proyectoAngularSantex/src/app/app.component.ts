import { Component } from '@angular/core';

type Products = {
  id: number
  name: string
  price: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showList:boolean = true
  message:string = ''
  statusButton:string = ''
  
  products: Products [] = [
    { "id": 1, "name": "Harina", "price": "$ 300" }, 
    { "id": 2, "name": "Azucar", "price": "$ 600" },
    { "id": 3, "name": "Yerba", "price": "$ 150" }

  ]

}
