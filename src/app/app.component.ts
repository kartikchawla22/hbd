import { Component, AfterViewInit,  ElementRef } from '@angular/core';
import { scrollTo  } from 'ng2-utils';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ConstantsService } from './constants.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor(public elementRef :ElementRef, private constant: ConstantsService ){}
  title = 'app works!';
  id = 's1'; hid = 'h1'; wid='w1';
  myStyle : Object = {};
  myParams : Object = {};
  scrollTo(selector, parentSelector, horizontal) {
    scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      0              // distance from top or left
    );
  }
  ngOnInit(){
    this.myStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
    this.myParams = this.constant.particles;
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgba(37, 194, 210, 0.81)';
 }
}
