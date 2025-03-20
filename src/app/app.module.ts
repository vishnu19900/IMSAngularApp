import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FisrtPageComponent } from './fisrt-page/fisrt-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { EventComponent } from './event/event.component';
import { CountComponent } from './count/count.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchComponent } from './switch/switch.component';
import { LoopsComponent } from './loops/loops.component';
import { HeaderComponent } from './header/header.component';
import { VishnuComponent } from './vishnu/vishnu.component';
import { ToogleComponent } from './toogle/toogle.component';
import { CurdoperatonComponent } from './curdoperaton/curdoperaton.component';
import { AppComponent } from './app.component';
import { ReCurdoperationComponent } from './re-curdoperation/re-curdoperation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PipesComponent } from './pipes/pipes.component';
import { PrintPipe } from './pipes/print.pipe';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReFormComponent } from './re-form/re-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReReactiveFormComponent } from './re-reactive-form/re-reactive-form.component';
import { RedE1Directive } from './red-e1.directive';
import { AlternativeComponent } from './alternative/alternative.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { AddSuppliersComponent } from './add-suppliers/add-suppliers.component';
import { UpdateSuppliersComponent } from './update-suppliers/update-suppliers.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { AddPurchasesComponent } from './add-purchases/add-purchases.component';
import { PurchasesDetailComponent } from './purchases-detail/purchases-detail.component';
import { UpdatePurchasesComponent } from './update-purchases/update-purchases.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { DetailOrdersComponent } from './detail-orders/detail-orders.component';
import { OrdersupdateComponent } from './ordersupdate/ordersupdate.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table' ;
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviseComponent } from './movise/movise.component';
import { MovisetwoComponent } from './movisetwo/movisetwo.component';
import { WeatherComponent } from './weather/weather.component';
import { CricketComponent } from './cricket/cricket.component';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    FisrtPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    EventComponent,
    CountComponent,
    IfelseComponent,
    SwitchComponent,
    LoopsComponent,
    HeaderComponent,
    VishnuComponent,
    ToogleComponent,
    CurdoperatonComponent,
    AppComponent,
    ReCurdoperationComponent,
    BootstrapComponent,
    PipesComponent,
    PrintPipe,
    BasicFormComponent,
    ReFormComponent,
    ReactiveformComponent,
    ReReactiveFormComponent,
    RedE1Directive,
    AlternativeComponent,
    SuppliersComponent,
    ProductComponent,
    AddSuppliersComponent,
    UpdateSuppliersComponent,
    DetailsComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    PurchasesComponent,
    AddPurchasesComponent,
    PurchasesDetailComponent,
    UpdatePurchasesComponent,
    OrdersComponent,
    AddOrdersComponent,
    DetailOrdersComponent,
    OrdersupdateComponent,
    MoviseComponent,
    MovisetwoComponent,
    WeatherComponent,
    CricketComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
