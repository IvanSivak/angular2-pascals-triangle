import { Component, OnChanges, Input, Output, View, EventEmitter, OnInit } from '@angular/core';
import { BinomialService } from './binomial-service';
import { ViewChild, AfterViewInit } from '@angular/core';
import { TriangleParams } from './params.component';

@Component({
  selector: 'pt-app',
  templateUrl: './pascal-triangle.html',
  directives: [TriangleParams],
  providers: [BinomialService]
})
export class AppComponent implements OnInits, AfterViewInit  {
  constructor(private _binomialService: BinomialService) { }
  
  @ViewChild(TriangleParams) triangleParams:TriangleParams;
  
  rows: [];
  hoverNum = '';
  
  // Methods
  refreshData(size: number){
    setTimeout(() => {
      this.rows = this._binomialService.getPascalTriangle(size);  
    }, 1);
  }
  
  // Emitter listeners
  sizeChanged(event) {
    this.refreshData(event.value);
  }
  
  // Lifecycle hooks
  ngOnInit(){
    this.rows = [];
  }
  
  ngAfterViewInit() {
    this.refreshData(this.triangleParams.triangleSize); 
  }
}
