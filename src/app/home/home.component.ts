import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'manzil';
  asset="assets/"
  jpeg=".jpeg"
   _albums: any[] = [];
   album:any;
  constructor(private _lightbox: Lightbox){
    for (let i = 1; i <=54 ; i++) {
      const src = this.asset + i + this.jpeg;
      // const caption = 'Image ' + i + ' caption here';
      // const thumb = 'assets/' + i + '-thumb.jpg';
      const album = {
         src: src,
        //  caption: caption,
        //  thumb: thumb
      };
     

      // this._albums.push(album);
    }
  }

  ngOnInit() {
    this._albums=[]; 
    for(let s=1; s<=54; s++){
      const myalbum={
         src : this.asset + s + this.jpeg
      }
    
      this._albums.push(myalbum)
    }
  }
  counter(i: number) {
    return new Array(i);
}
open(index: number): void {
  // open lightbox
//   this._albums=[
//     {
//    src: this.asset + index + this.jpeg

//   }
// ]
  console.log(this._albums);
  
  this._lightbox.open(this._albums,index);
}

close(): void {
  // close lightbox programmatically
  this._lightbox.close();
}
}

