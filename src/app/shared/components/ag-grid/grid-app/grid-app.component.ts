import { Component, OnInit } from '@angular/core';
import { CellStyleRendererComponent } from '../../ag-grid/renderers/cell-style-renderer/cell-style-renderer.component';
import { GridApi, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-grid-app',
  templateUrl: './grid-app.component.html',
  styleUrls: ['./grid-app.component.scss']
})
export class GridAppComponent implements OnInit {

  public gridOptions: GridOptions;

  columnDefs = [
    { headerName: 'Make', field: 'make',  cellRenderer: 'cellRenderer'},
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() {
  }

  ngOnInit(): void {

    this.gridOptions = {
      frameworkComponents : {
        cellRenderer: CellStyleRendererComponent
      },
      columnDefs: this.columnDefs,
      rowData: this.rowData
    };
  
  }

}
