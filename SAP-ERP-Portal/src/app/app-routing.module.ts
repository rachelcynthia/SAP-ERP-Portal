import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { FinanceComponent } from './customer/finance/finance.component';
import { DisplayFormComponent } from './customer/inquiry/display-form/display-form.component';
import { DisplayComponent } from './customer/inquiry/display/display.component';
import { InquiryCreateComponent } from './customer/inquiry/inquiry-create/inquiry-create.component';
import { InquiryListComponent } from './customer/inquiry/inquiry-list/inquiry-list.component';
import { LoginComponent } from './customer/login/login.component';
import { SalesOrderCreateComponent } from './customer/sales-order/sales-order-create/sales-order-create.component';
import { SalesOrderDisplayComponent } from './customer/sales-order/sales-order-display/sales-order-display.component';
import { SalesOrderListComponent } from './customer/sales-order/sales-order-list/sales-order-list.component';
import { AboutCodeComponent } from './landing/landing-about/about-code/about-code.component';
import { AboutCompanyComponent } from './landing/landing-about/about-company/about-company.component';
import { AboutContactComponent } from './landing/landing-about/about-contact/about-contact.component';
import { AboutProfileComponent } from './landing/landing-about/about-profile/about-profile.component';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './customer/delivery-list/list/list.component';
import { DeliverydisplayComponent } from './customer/delivery-list/deliverydisplay/deliverydisplay.component';
import { ProfileDisplayComponent } from './customer/profile/profile-display/profile-display.component';
import { SalesOrderDisplayFormComponent } from './customer/sales-order/sales-order-display-form/sales-order-display-form.component';
import { UploadFormComponent } from './customer/upload-form/upload-form.component';
import { ProfileEditComponent } from './customer/profile/profile-edit/profile-edit.component';
import { UnauthorisedComponent } from './customer/unauthorised/unauthorised.component';
import { CustomerGuardGuard } from './guards/customer-guard.guard';
import { AgingListComponent } from './customer/aging/aging-list/aging-list.component';
import { AgingDisplayComponent } from './customer/aging/aging-display/aging-display.component';
import { MemoListComponent } from './customer/memo/memo-list/memo-list.component';
import { MemoDisplayComponent } from './customer/memo/memo-display/memo-display.component';
import { MemoDisplayFormComponent } from './customer/memo/memo-display-form/memo-display-form.component';
import { CusomerInquiryGuard } from './guards/cusomer-inquiry.guard';
import { CustomerSaleorderGuard } from './guards/customer-saleorder.guard';
import { InvoiceCreateComponent } from './customer/invoice/invoice-create/invoice-create.component';
import { InvoiceDisplayComponent } from './customer/invoice/invoice-display/invoice-display.component';
import { SalesDataComponent } from './customer/sales-data/sales-data.component';
import { DeliveryListDisplayFormComponent } from './customer/delivery-list/delivery-list-display-form/delivery-list-display-form.component';
import { VendorLoginComponent } from './vendor/profile/vendor-login/vendor-login.component';
import { VendorGuard } from './guards/vendor.guard';
import { VendorSalesService } from './service/vendor/vendor-sales.service';
import { VendorSalesComponent } from './vendor/vendor-sales/vendor-sales.component';
import { VendorFinanceComponent } from './vendor/vendor-finance/vendor-finance.component';
import { VendorViewComponent } from './vendor/profile/vendor-view/vendor-view.component';
import { VendorEditComponent } from './vendor/profile/vendor-edit/vendor-edit.component';
import { VendorRfqComponent } from './vendor/sales/vendor-rfq/vendor-rfq.component';
import { VendorRfqDisplayFormComponent } from './vendor/sales/vendor-rfq/vendor-rfq-display-form/vendor-rfq-display-form.component';
import { VendorRfqDisplayComponent } from './vendor/sales/vendor-rfq/vendor-rfq-display/vendor-rfq-display.component';
import { VendorPoComponent } from './vendor/sales/vendor-po/vendor-po.component';
import { VendorPoDisplayFormComponent } from './vendor/sales/vendor-po/vendor-po-display-form/vendor-po-display-form.component';
import { VendorPoDisplayComponent } from './vendor/sales/vendor-po/vendor-po-display/vendor-po-display.component';
import { VendorGrComponent } from './vendor/sales/vendor-gr/vendor-gr.component';
import { VendorGrDisplayFormComponent } from './vendor/sales/vendor-gr/vendor-gr-display-form/vendor-gr-display-form.component';
import { VendorGrDisplayComponent } from './vendor/sales/vendor-gr/vendor-gr-display/vendor-gr-display.component';
import { VendorAgingComponent } from './vendor/finance/vendor-aging/vendor-aging.component';
import { VendorUnauthorisedComponent } from './vendor/vendor-unauthorised/vendor-unauthorised.component';
import { VendorAgingDisplayComponent } from './vendor/finance/vendor-aging/vendor-aging-display/vendor-aging-display.component';
import { VendorInvoiceComponent } from './vendor/finance/vendor-invoice/vendor-invoice.component';
import { VendorInvoiceDisplayComponent } from './vendor/finance/vendor-invoice/vendor-invoice-display/vendor-invoice-display.component';
import { VendorMemoComponent } from './vendor/finance/vendor-memo/vendor-memo.component';
import { VendorMemoDisplayComponent } from './vendor/finance/vendor-memo/vendor-memo-display/vendor-memo-display.component';
import { VendorPoCreateComponent } from './vendor/sales/vendor-po/vendor-po-create/vendor-po-create.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { EmployeesGuard } from './guards/employees.guard';
import { EmployeeLoginComponent } from './employee/profile/employee-login/employee-login.component';
import { EmployeeDisplayComponent } from './employee/profile/employee-display/employee-display.component';
import { EmployeeEditComponent } from './employee/profile/employee-edit/employee-edit.component';
import { EmployeeLeaveCreateComponent } from './employee/employee-main/leave/employee-leave-create/employee-leave-create.component';
import { EmployeeLeaveListComponent } from './employee/employee-main/leave/employee-leave-list/employee-leave-list.component';
import { EmployeeQuotaComponent } from './employee/employee-main/leave/employee-quota/employee-quota.component';
import { EmployeeBasicPayComponent } from './employee/employee-main/employee-basic-pay/employee-basic-pay.component';
import { EmployeePayrollComponent } from './employee/employee-main/payslip/employee-payroll/employee-payroll.component';
import { EmployeeProjectComponent } from './employee/employee-main/employee-dashboard/employee-project/employee-project.component';
import { MemoDebitComponent } from './customer/memo/memo-debit/memo-debit.component';
import { EmployeeUnauthorisedComponent } from './employee/employee-unauthorised/employee-unauthorised.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'contact', component: AboutContactComponent },
  { path: 'company', component: AboutCompanyComponent },
  { path: 'code', component: AboutCodeComponent },
  { path: 'profile', component: AboutProfileComponent },

  { path: 'cust/login', component: LoginComponent },
  { path: 'cust/dashboard', component: DashboardComponent, canActivate:[CustomerGuardGuard] },
  { path: 'cust/finance', component: FinanceComponent, canActivate:[CustomerGuardGuard] },

  { path: 'cust/profile', component:ProfileDisplayComponent, canActivate:[CustomerGuardGuard] },
  { path: 'cust/profile/edit', component:ProfileEditComponent, canActivate:[CustomerGuardGuard] },

  // { path: 'cust/inquiry', component: InquiryComponent },
  { path: 'cust/inquiry/list', component: InquiryListComponent, canActivate:[CustomerGuardGuard]  },
  { path: 'cust/inquiry/display-form', component: DisplayFormComponent,canActivate:[CustomerGuardGuard]  },
  { path: 'cust/inquiry/display', component: DisplayComponent,canActivate:[CustomerGuardGuard,CusomerInquiryGuard]  },
  { path: 'cust/inquiry/create', component: InquiryCreateComponent, canActivate:[CustomerGuardGuard]  },

  // { path: 'cust/saleorder', component: SalesOrderComponent, canActivate:[CustomerGuardGuard]  },
  { path: 'cust/saleorder/display-form', component:SalesOrderDisplayFormComponent, canActivate:[CustomerGuardGuard] },
  { path: 'cust/saleorder/display', component: SalesOrderDisplayComponent,canActivate:[CustomerGuardGuard,CustomerSaleorderGuard]  },
  { path: 'cust/saleorder/list', component: SalesOrderListComponent,canActivate:[CustomerGuardGuard]  },
  { path: 'cust/saleorder/create', component: SalesOrderCreateComponent,canActivate:[CustomerGuardGuard]  },

  { path:'cust/deliverylist/list', component:ListComponent, canActivate:[CustomerGuardGuard] },
  { path:'cust/deliverylist/display-form', component:DeliveryListDisplayFormComponent, canActivate:[CustomerGuardGuard] },
  { path:'cust/deliverylist/display', component:DeliverydisplayComponent, canActivate:[CustomerGuardGuard] },

  { path:'cust/upload', component:UploadFormComponent, canActivate:[CustomerGuardGuard] },

  { path: 'cust/aging/list', component:AgingListComponent, canActivate:[CustomerGuardGuard]},
  { path:'cust/aging/display', component:AgingDisplayComponent, canActivate:[CustomerGuardGuard]},

  {path:'cust/memo/list/credit',component:MemoListComponent, canActivate:[CustomerGuardGuard]},
  {path:'cust/memo/list/debit',component:MemoDebitComponent, canActivate:[CustomerGuardGuard]},
  {path: 'cust/memo/display-form', component:MemoDisplayFormComponent, canActivate:[CustomerGuardGuard]},
  {path:'cust/memo/display', component:MemoDisplayComponent, canActivate:[CustomerGuardGuard]},

  {path:'cust/invoice/create', component:InvoiceCreateComponent, canActivate:[CustomerGuardGuard]},
  {path:'cust/invoice/display', component:InvoiceDisplayComponent, canActivate:[CustomerGuardGuard]},

  {path:'cust/sales-data', component:SalesDataComponent, canActivate:[CustomerGuardGuard]},

  {path:'cust/unauthorised', component:UnauthorisedComponent},


  {path:'vend/login', component:VendorLoginComponent},
  {path:'vend/sales', component:VendorSalesComponent, canActivate:[VendorGuard]},
  {path:'vend/finance', component:VendorFinanceComponent, canActivate:[VendorGuard]},

  {path:'vend/profile/view', component:VendorViewComponent, canActivate:[VendorGuard]},
  {path:'vend/profile/edit', component:VendorEditComponent, canActivate:[VendorGuard]},

  {path:'vend/sales/rfq/list', component:VendorRfqComponent, canActivate:[VendorGuard]},
  {path:'vend/sales/rfq/display-form', component:VendorRfqDisplayFormComponent, canActivate:[VendorGuard]},
  {path:'vend/sales/rfq/display', component:VendorRfqDisplayComponent, canActivate:[VendorGuard]},

  {path:'vend/sales/po/list', component:VendorPoComponent, canActivate:[VendorGuard]},
  {path:'vend/sales/po/display-form', component:VendorPoDisplayFormComponent, canActivate:[VendorGuard]},
  {path:'vend/sales/po/display', component:VendorPoDisplayComponent, canActivate:[VendorGuard]},
  {path:'vend/sales/po/create', component:VendorPoCreateComponent, canActivate:[VendorGuard]},

  {path:'vend/sales/gr/list', component:VendorGrComponent, canActivate:[VendorGuard]},
  {path:'vend/sales/gr/display-form', component:VendorGrDisplayFormComponent, canActivate:[VendorGuard]},
  {path:'vend/sales/gr/display', component:VendorGrDisplayComponent, canActivate:[VendorGuard]},

  {path:'vend/finance/aging/list',component:VendorAgingComponent,canActivate:[VendorGuard]},
  {path:'vend/finance/aging/display', component:VendorAgingDisplayComponent,canActivate:[VendorGuard]},

  {path:'vend/finance/invoice/list',component:VendorInvoiceComponent,canActivate:[VendorGuard]},
  {path:'vend/finance/invoice/display', component:VendorInvoiceDisplayComponent,canActivate:[VendorGuard]},

  {path:'vend/finance/memo/list',component:VendorMemoComponent,canActivate:[VendorGuard]},
  {path:'vend/finance/memo/display', component:VendorMemoDisplayComponent,canActivate:[VendorGuard]},

  {path:'vend/unauthorised', component:VendorUnauthorisedComponent},

  {path:'emp/login', component:EmployeeLoginComponent},
  {path:'emp/profile/display', component:EmployeeDisplayComponent, canActivate:[EmployeesGuard]},
  {path:'emp/profile/edit', component:EmployeeEditComponent, canActivate:[EmployeesGuard]},

  {path:'emp/dashboard', component:EmployeeMainComponent, canActivate:[EmployeesGuard]},

  {path:'emp/leave/create', component:EmployeeLeaveCreateComponent, canActivate:[EmployeesGuard]},
  {path:'emp/leave/list', component:EmployeeLeaveListComponent, canActivate:[EmployeesGuard]},
  {path:'emp/leave/quota', component:EmployeeQuotaComponent, canActivate:[EmployeesGuard]},

  {path:'emp/basicpay', component:EmployeeBasicPayComponent, canActivate:[EmployeesGuard]},
  {path:'emp/payroll', component:EmployeePayrollComponent, canActivate:[EmployeesGuard]},

  {path:'emp/unauthorised', component:EmployeeUnauthorisedComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
