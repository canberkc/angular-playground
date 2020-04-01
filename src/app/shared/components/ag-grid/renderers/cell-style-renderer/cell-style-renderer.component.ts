import { Component, } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-cell-style-renderer',
  templateUrl: './cell-style-renderer.component.html',
  styleUrls: ['./cell-style-renderer.component.scss']
})
export class CellStyleRendererComponent implements ICellRendererAngularComp  {

  refresh;
  public value = null;

  constructor() { }

  agInit(params: any): void {
    this.value = params.value;
  }

}
