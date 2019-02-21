import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/giraffe', loadChildren: './giraffe/giraffe.module#GiraffePageModule' },
  { path: 'lion', loadChildren: './lion/lion.module#LionPageModule' },
  { path: 'zebra', loadChildren: './zebra/zebra.module#ZebraPageModule' },
  { path: 'lion/baby-lion', loadChildren: './baby-lion/baby-lion.module#BabyLionPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
