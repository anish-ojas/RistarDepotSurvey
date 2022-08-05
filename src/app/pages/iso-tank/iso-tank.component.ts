/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { GetEquipmentListService } from 'src/app/shared/get-equipment-list.service';

@Component({
  selector: 'app-iso-tank',
  templateUrl: './iso-tank.component.html',
  styleUrls: ['./iso-tank.component.scss'],
})
export class IsoTankComponent implements OnInit {
  listData: any;
  openSearchContainerActive:boolean=false;
  constructor(private service: GetEquipmentListService,
    private animationCtrl: AnimationController
    ) { }

  ngOnInit() {
    const val: any={EquType:"20'TK"};
    this.service.getData(val).subscribe((res)=>{
      this.listData=res;
    });
  }
  openSearchContainer(){
    this.openSearchContainerActive=!this.openSearchContainerActive;
  }
  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '1', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
  leaveAnimation = (baseEl: HTMLElement) => this.enterAnimation(baseEl).direction('reverse');
}
