import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectcityComponent } from './selectcity/selectcity.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './home/logout/logout.component';
import { PancardComponent } from './home/pancard/pancard.component';
import { AddressComponent } from './home/address/address.component';
import { RewardComponent } from './home/reward/reward.component';
import { NotificationComponent } from './home/notification/notification.component';
import { PaymentComponent } from './home/payment/payment.component';

import { OrderComponent } from './home/order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartverifyComponent } from './cartverify/cartverify.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PaymentpayComponent } from './paymentpay/paymentpay.component';

const routes: Routes = [
  {path:'',component:SelectcityComponent},
  {path:'home' ,component:HomepageComponent},
  {path:'homepage/:city' ,component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'productcatalogue/:category/:city', component:ProductcatalogueComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'viewproduct/:city/:pid',component:ViewproductComponent},
  {path:'advertise',component:AdvertiseComponent},
  {path:'paymentpay',component:PaymentpayComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'cartitem',component:CartitemComponent},
  {path:'register',component:RegistrationComponent},
  {path:'profile', component:ProfileComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'fp',component:ForgotpasswordComponent},
  {path:'cartverify',component:CartverifyComponent},
  {
    path: 'home',
    children:[
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'payment',
      component:PaymentComponent
      },
      {
        path:'notification',
      component:NotificationComponent
      },
      {
        path:'reward',
      component:RewardComponent
      },
      {
        path:'address',
      component:AddressComponent
      },
    
      {
        path:'pancard',
      component:PancardComponent
      },
      {
        path:'logout',
        component:LogoutComponent
      },
      {
        path:'',
        component:HomeComponent
      }
    ]    
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =[SelectcityComponent, HomepageComponent ,ProductcatalogueComponent, CartpageComponent,
                                ViewproductComponent, AdvertiseComponent, NavbarComponent,CartitemComponent,
                                LoginComponent,RegistrationComponent,PageNotFoundComponent, ProfileComponent,
                                OrderComponent,
                                PaymentComponent,
                                NotificationComponent,LoginComponent,
                                RewardComponent,
                                LogoutComponent,
                                AddressComponent,
                                PancardComponent,HomeComponent,CheckoutComponent,CartverifyComponent,ForgotpasswordComponent];
