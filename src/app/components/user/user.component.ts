import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../service/getphoto.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private isEditable:boolean = true;
  private photoList:Photo[];
  
  addSkill(skill){
    this.skills.unshift(skill);
    return false; // add for do not want refresh page
  }
 

  removeSkill(skill){
    this.skills.forEach((element,index) => {
      if(element == skill){
        this.skills.splice(index,1);
      }
    });
  }

  toggleEdit(){
    this.isEditable =! this.isEditable;
  }
 
   
  private my_name:string;
  private age:number;
  private email:string;
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }
  private skills:string[];

  constructor(private getphotoService:GetphotoService) { }

  ngOnInit() {
    this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(4,4995);
    })
 
    this.my_name = "Paweena Intharasawun"
    this.age = 20;
    this.email = "paweena.intharasawun@g.swu.ac.th";
    this.address = {
      street: "105 Sukhumvit Road",
      city: "Bangna",
      province: "Bangkok",
      postcode: "10260"
    }
    this.skills = ["Swimming","Eating"];
 
  }


}

interface Photo{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
 }
 