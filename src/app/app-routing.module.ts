import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DryBoxComponent } from './pages/dry-box/dry-box.component';
import { HomeComponent } from './pages/home/home.component';
import { IsoTankComponent } from './pages/iso-tank/iso-tank.component';
import { ReeferComponent } from './pages/reefer/reefer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'isotank',component:IsoTankComponent},
  {path:'drybox',component:DryBoxComponent},
  {path:'reefer',component:ReeferComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
