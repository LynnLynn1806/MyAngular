import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  private birth :string;
  private age: string;
  private graduate: string;
  private study: string;
  private id :string;

  constructor() { }

  ngOnInit() {
    this.birth = "18 / June / 1997";
    this.age = "20 Years-old";
    this.graduate = "Graduated High School at Lasalle School";
    this.study = "Study at Computer Science at Srinakharinwirot University";
    this.id="58102010811"
  }

}
