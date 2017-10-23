import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  private name1 :string;
  private name2: string;
  private name3: string;
  private name4: string;

  private art1 :string;
  private art2: string;
  private art3: string;
 
  private album1 :string;
  private album2: string;
  private album3: string;
  private album4: string;

  
  constructor() { }

  ngOnInit() {
    this.name1 = "YOU ARE";
    this.name2 = "ICARUS";
    this.name3 = "SHOPPING MALL";
    this.name4 = "DNA";

    this.art1 = "GOT7";
    this.art2 = "JJ PROJECT";
    this.art3 = "BTS";


    this.album1 = "7 FOR 7";
    this.album2 = "VERSE #2";
    this.album3 = "FLIGHT LOG : ARRIVAL";
    this.album4 = "LOVE YOURSELF";
  }

}
