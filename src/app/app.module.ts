import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { IsoTankComponent } from './pages/iso-tank/iso-tank.component';
import { ReeferComponent } from './pages/reefer/reefer.component';
import { DryBoxComponent } from './pages/dry-box/dry-box.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginService } from './shared/login.service';
import { GetEquipmentListService } from './shared/get-equipment-list.service';

@NgModule({
  declarations: [AppComponent,LoginComponent,
  HomeComponent,IsoTankComponent,ReeferComponent,DryBoxComponent,HeaderComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  FormsModule,HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LoginService,GetEquipmentListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
