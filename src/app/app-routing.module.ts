import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { HomeViewComponent } from './components/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'input', component: InputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
