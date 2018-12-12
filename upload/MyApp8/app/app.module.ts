import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LogService } from './log.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService} from './employee.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
