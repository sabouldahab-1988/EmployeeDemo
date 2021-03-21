import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule} from '@angular/forms';
import { ConfirmModal } from './CommonModals/confirm-dialog/confirm-modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ConfirmModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule
  ],
  entryComponents: [ConfirmModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
