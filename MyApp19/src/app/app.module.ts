import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes,Router} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LinkTicketComponent } from './link-ticket/link-ticket.component';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { TrackServiceComponent } from './track-service/track-service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WalletComponent } from './wallet/wallet.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'linkTicket', component:LinkTicketComponent},
    {path:'myTicket',component:MyTicketComponent},
    {path:'cancelTicket',component:CancelTicketComponent},
    {path:'trackService',component:TrackServiceComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'wallet',component:WalletComponent},
    {path:'driverInfo',component:DriverInfoComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkTicketComponent,
    MyTicketComponent,
    CancelTicketComponent,
    TrackServiceComponent,
    GalleryComponent,
    WalletComponent,
    DriverInfoComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 

 }
