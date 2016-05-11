import { Component, OnChanges, Input, Output, View, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'triangle-params',
  templateUrl: './triangle-params.html'
})
export class TriangleParams {
  @Input() triangleSize;
  @Output() sizeChange = new EventEmitter();
  
  valid = true;
  message = '';

  get sizeModel() {
      return this.triangleSize;
  }

  set sizeModel(value) {
    this.triangleSize = value;
    
    if ((this.valid = this.validate()) == false) return;
    
    this.sizeChange.emit({
      value: this.triangleSize
    });
  }
  
  validate(){
    var size = this.triangleSize;
    if (size < 0) {
      this.message = 'Please, try positive numbers.'
      return false;
    }
    return true;
  }
}