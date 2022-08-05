import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetEquipmentListService {
  constructor(private http: HttpClient) { }
  getData(data: any){
    return this.http.post('http://api.ristarindia.com/User/equipment.php',data);
  }
  // addData(data: any){
  //   return this.http.post('http://api.ristarindia.com/User/equipment.php',data);

  // }
  getContainerData(id: any){
    return this.http.get('http://api.ristarindia.com/User/equipment.php/'+id);
  }

}
