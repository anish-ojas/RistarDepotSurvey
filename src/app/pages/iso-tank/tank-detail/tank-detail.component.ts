import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { GetEquipmentListService } from 'src/app/shared/get-equipment-list.service';
@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.scss'],
})
export class TankDetailComponent implements OnInit {
  gatetIn: any=[
    {url:'https://upload.wikimedia.org/wikipedia/commons/c/c8/CIMC_tank_container_T11.jpg'},
    {url:'http://www.qafila.com/wp-content/uploads/2021/02/Tank-Container.jpg'},
    {url:'https://sc04.alicdn.com/kf/HTB1bUgpJpXXXXXzXFXXq6xXFXXXm.jpg'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZW9oiVAO5lNoWUkUniirE33F-ZHWJXD4WQ&usqp=CAU'},
    {url:'https://goodrich.co/wp-content/uploads/2015/06/ISO-tank2.jpg'},
    {url:'https://cmsimg01.71360.com/data/15u996/public/2020032610520442510.jpg'},
  ];
  repair: any=[];
  gateOut: any=[];
  imgData: any;
  galleryType='getin';
  dataId: any;
  constructor(private activatedRoute: ActivatedRoute,
    private service: GetEquipmentListService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.dataId=param.get('id');
      console.log(this.dataId);
    });
    if(this.dataId){
      this.service.getContainerData(this.dataId).subscribe((res)=>{
        console.log(res);
      });
    }
  }
  async gateInTakePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    console.log(image.dataUrl);
    this.gatetIn.push({
      url:image.dataUrl
    });
  }
  async repairTakePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    this.repair.push({
      url:image.dataUrl
    });
  }
  async gateOutTakePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    this.gateOut.push({
      url:image.dataUrl
    });
  }


}
