import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
