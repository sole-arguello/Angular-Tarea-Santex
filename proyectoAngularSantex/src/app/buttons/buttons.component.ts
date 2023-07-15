import { Component, Output } from '@angular/core';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent {
  @Output()
  showList:boolean = true
  @Output()
  message:string = 'La lista esta Oculta'
  @Output()
  statusButton:string = 'Ocultar Lista'

  showDisguiseList(){
    if(this.showList){
      this.showList = false
      this.statusButton = 'Mostar Lista'
    }else{
      this.showList = true
      this.statusButton = 'Ocultar Lista'
    }
  }

}
