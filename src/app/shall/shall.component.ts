import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { element } from 'protractor';
import { environment } from 'src/environments/environment';
import { SeriviceService } from '../serivice.service';

@Component({
  selector: 'app-shall',
  templateUrl: './shall.component.html',
  styleUrls: ['./shall.component.scss']
})
export class ShallComponent implements OnInit {
  data:any;
  _albums: any;
    constructor(private service: SeriviceService,private _lightbox: Lightbox) { }
  url=environment.rootUrl
    ngOnInit(): void {
      this.getData();
      this._albums=[];
     
    }
    getData() {
      this.service.gettopes().subscribe(
         res => { 
           this.data = res;
           this.data.forEach(element => {
            this._albums.push({src: element.Image.url,
              caption:`Rs : `+element.prize + `/` +element.size,
              
             });
            // this._albums.push({Description:element.Description})
          });
          },
         err => console.error(err),
         () => console.log(this.data)
       );
  
   
  }
  open(index: number): void {
   
    console.log(this._albums);
    
    this._lightbox.open(this._albums, index);
  }
  
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  }
  