import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Publisher } from 'app/model/publisher';
import { PublisherService } from 'app/services/shared/publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {
  public publisher: Publisher[];
  dataLoaded = false;
  public publicationList: Publisher[];
  publisherName: any;
  publicationName: any;
  public startDate: 0;
  public myDate: Date

  constructor( private publisherService: PublisherService) { }
 

  ngOnInit(): void {
  }

  public getAppNameByTenant(publisher:string): void  {
    this.publisherService.getAllPublicationByPublisher(publisher).subscribe(
      (response: Publisher[]) => {       
        this.publicationList = response;
        response = this.publicationList   
        for (let i = 0; i < this.publicationList.length; i++) {
          let arr_item = this.publicationList[i];
          console.log(arr_item);
          console.log("bu name bakalım gelmişMİİİİ " + arr_item)
          this.publicationName = arr_item
          this.getAllByAppNameAndTenant(this.publicationName, this.publisherName);
        }          
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllByAppNameAndTenant(name: string, publisher:string): void {
    console.log( "tenant:  " + publisher + "appnametenant")
    this.publisherService.getAllByPublicationAndPublisher(name, publisher).subscribe(
      (response:  Publisher[]) => {
        this.publisher = response;
        response = this.publisher      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public convertToLocalDate(unixDate: any) : string{
    this.myDate = new Date(unixDate);
    console.log("bu metod içindeki unixed tarih: " + unixDate)
    console.log("bu metod içindeki return tarih: " + this.myDate.toLocaleString())
    return this.myDate.toLocaleString();

  }

}
