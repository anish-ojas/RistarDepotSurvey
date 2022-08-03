/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { GetEquipmentListService } from 'src/app/shared/get-equipment-list.service';

@Component({
  selector: 'app-iso-tank',
  templateUrl: './iso-tank.component.html',
  styleUrls: ['./iso-tank.component.scss'],
})
export class IsoTankComponent implements OnInit {
  listData: any;
  constructor(private service: GetEquipmentListService) { }

  ngOnInit() {
    const val: any={EquType:"20'TK"};
    this.service.getData(val).subscribe((res)=>{
      this.listData=res;
    });
  }

}
