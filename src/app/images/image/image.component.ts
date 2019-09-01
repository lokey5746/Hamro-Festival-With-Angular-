import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {
  imgSrc:string='/assets/img/image_placeholder.jpg';
  selectedImage:any=null;
  isSubmitted:boolean=false;

  formTemplate = new FormGroup({
    caption: new FormControl('',Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }

  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc=e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage=null;
    }
  }

  onSubmit(formValue){
    this.isSubmitted = true;
  }

  get formControl(){
    return this.formTemplate['controls'];
  }

}
