import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
title="Binding Components";

constructor() { }
isDisabled=false;
 sno:number=100;
sname:string="shiva";
sadd:string="hyd";
  ngOnInit(): void {
  }
  handleMe()
  {
    this.sno=200;
    this.sname="sirisha";
    this.sadd="hyd";
    this.isDisabled=true;
    alert("Welcome Boss");
  }
}
