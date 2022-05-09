import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent implements OnInit{
    userName='';

    constructor(){

    }
 ngOnInit(): void {
     
 }
 checkInput(){
     
 }
    OnupdateUsername(event:Event){
        this.userName = (<HTMLInputElement>event.target).value;
    }


}