import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisrtPageComponent } from './fisrt-page/fisrt-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { EventComponent } from './event/event.component';
import { CountComponent } from './count/count.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import {SwitchComponent} from'./switch/switch.component';
import { LoopsComponent } from './loops/loops.component';
import { HeaderComponent } from './header/header.component'; 
import { VishnuComponent } from './vishnu/vishnu.component';
import { ToogleComponent } from './toogle/toogle.component';
import { CurdoperatonComponent } from './curdoperaton/curdoperaton.component';  
import { ReCurdoperationComponent } from './re-curdoperation/re-curdoperation.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PipesComponent } from './pipes/pipes.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReFormComponent } from './re-form/re-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReReactiveFormComponent } from './re-reactive-form/re-reactive-form.component';
import { AlternativeComponent } from './alternative/alternative.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
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
import { MoviseComponent } from './movise/movise.component';  
import { MovisetwoComponent } from './movisetwo/movisetwo.component'
import { WeatherComponent } from './weather/weather.component';
import { CricketComponent } from './cricket/cricket.component';





const routes: Routes = [
  //{path:'', component:AppComponent},
  {path:'first', component:FisrtPageComponent},
  {path:'second', component:SecondPageComponent},
  {path:'third', component:ThirdPageComponent},
  {path:'event', component:EventComponent},
  {path:'paging', component: CountComponent},
  {path:'ifelse',component:IfelseComponent},
  {path:'switch',component:SwitchComponent}, 
  {path:'loops',component:LoopsComponent},
  {path:'header',component:HeaderComponent},
  {path:'vishnu',component:VishnuComponent},
  {path:'toogle',component:ToogleComponent},
  {path:'curdoperaton',component:CurdoperatonComponent},
  {path:'reCurdoperation',component:ReCurdoperationComponent},
  {path:'bootstrap',component:BootstrapComponent},
  {path:'pipes',component:PipesComponent},
  {path:'BasicForm',component:BasicFormComponent},
  {path:'reForm',component:ReFormComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'reReactiveForm/:id',component:ReReactiveFormComponent},
  {path:'alternative',component:AlternativeComponent},
  {path:'suppliers',component:SuppliersComponent},
  {path:'product',component:ProductComponent},
  {path:'addsuppliers',component:AddSuppliersComponent},
  {path:'updatesuppliers',component:UpdateSuppliersComponent},
  {path:'updatesuppliers/:id',component:UpdateSuppliersComponent},
  {path:'detail-suppliers',component:DetailsComponent},
  {path:'detail-suppliers/:id',component:DetailsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'productDetails',component:ProductDetailsComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  {path:'product-update',component:ProductUpdateComponent},
  {path:'product-update/:id',component:ProductUpdateComponent},
  {path:'purchases',component:PurchasesComponent},
  {path:'addPurchases',component:AddPurchasesComponent},
  {path:'Purchasesdetail',component:PurchasesDetailComponent},
  {path:'Purchasesdetail/:id',component:PurchasesDetailComponent},
  {path:'UpdatePurchases',component:UpdatePurchasesComponent},
  {path:'UpdatePurchases/:id',component:UpdatePurchasesComponent},
  {path:'orders',component:OrdersComponent},
  {path:'addorders',component:AddOrdersComponent},
  {path:'detailOrders',component:DetailOrdersComponent},
  {path:'detailOrders/:id',component:DetailOrdersComponent},
  {path:'ordersupdate',component:OrdersupdateComponent},
  {path:'ordersupdate/:id',component:OrdersupdateComponent},
  {path:'movise',component:MoviseComponent},
  {path:'movisetwo',component:MovisetwoComponent},
  {path:'weather',component:WeatherComponent},
  {path:'cricket',component:CricketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule],
 
  
})
export class AppRoutingModule { 

}