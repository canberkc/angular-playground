import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridAppComponent } from './shared/components/ag-grid/grid-app/grid-app.component';


const routes: Routes = [
  { path: 'gridsample', component: GridAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
