import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { LoginComponent } from './customer/login/login.component';
import { LoginHeaderComponent } from './customer/login-header/login-header.component';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';
import { AboutCompanyComponent } from './landing/landing-about/about-company/about-company.component';
import { AboutCodeComponent } from './landing/landing-about/about-code/about-code.component';
import { AboutContactComponent } from './landing/landing-about/about-contact/about-contact.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './customer/dashboard/dashboard-header/dashboard-header.component';
import { InquiryListComponent } from './customer/inquiry/inquiry-list/inquiry-list.component';
import { InquiryCreateComponent } from './customer/inquiry/inquiry-create/inquiry-create.component';
import { DisplayComponent } from './customer/inquiry/display/display.component';
import { DisplayMiddleComponent } from './customer/inquiry/display/display-middle/display-middle.component';
import { CommonModule } from '@angular/common';
import { SalesOrderDisplayComponent } from './customer/sales-order/sales-order-display/sales-order-display.component';
import { SalesOrderListComponent } from './customer/sales-order/sales-order-list/sales-order-list.component';
import { SalesOrderCreateComponent } from './customer/sales-order/sales-order-create/sales-order-create.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { AboutProfileComponent } from './landing/landing-about/about-profile/about-profile.component';
import { FinanceComponent } from './customer/finance/finance.component';
import { DisplayFormComponent } from './customer/inquiry/display-form/display-form.component';
import { ListComponent } from './customer/delivery-list/list/list.component';
import { DeliverydisplayComponent } from './customer/delivery-list/deliverydisplay/deliverydisplay.component';
import { ProfileDisplayComponent } from './customer/profile/profile-display/profile-display.component';
import { UploadFormComponent } from './customer/upload-form/upload-form.component';
import { SalesOrderDisplayFormComponent } from './customer/sales-order/sales-order-display-form/sales-order-display-form.component';
import { ProfileEditComponent } from './customer/profile/profile-edit/profile-edit.component';
import { AgingListComponent } from './customer/aging/aging-list/aging-list.component';
import { UnauthorisedComponent } from './customer/unauthorised/unauthorised.component';
import { AgingDisplayComponent } from './customer/aging/aging-display/aging-display.component';
import { MemoListComponent } from './customer/memo/memo-list/memo-list.component';
import { MemoDisplayComponent } from './customer/memo/memo-display/memo-display.component';
import { MemoDisplayFormComponent } from './customer/memo/memo-display-form/memo-display-form.component';
import { InvoiceCreateComponent } from './customer/invoice/invoice-create/invoice-create.component';
import { InvoiceDisplayComponent } from './customer/invoice/invoice-display/invoice-display.component';
import { UploadDisplayComponent } from './customer/upload-form/upload-display/upload-display.component';
import { SalesDataComponent } from './customer/sales-data/sales-data.component';
import { DeliveryListDisplayFormComponent } from './customer/delivery-list/delivery-list-display-form/delivery-list-display-form.component';
import { VendorLoginComponent } from './vendor/profile/vendor-login/vendor-login.component';
import { VendorViewComponent } from './vendor/profile/vendor-view/vendor-view.component';
import { VendorEditComponent } from './vendor/profile/vendor-edit/vendor-edit.component';
import { VendorRfqComponent } from './vendor/sales/vendor-rfq/vendor-rfq.component';
import { VendorPoComponent } from './vendor/sales/vendor-po/vendor-po.component';
import { VendorGrComponent } from './vendor/sales/vendor-gr/vendor-gr.component';
import { VendorInvoiceComponent } from './vendor/finance/vendor-invoice/vendor-invoice.component';
import { VendorAgingComponent } from './vendor/finance/vendor-aging/vendor-aging.component';
import { VendorMemoComponent } from './vendor/finance/vendor-memo/vendor-memo.component';
import { VendorFinanceComponent } from './vendor/vendor-finance/vendor-finance.component';
import { VendorSalesComponent } from './vendor/vendor-sales/vendor-sales.component';
import { VendorRfqDisplayFormComponent } from './vendor/sales/vendor-rfq/vendor-rfq-display-form/vendor-rfq-display-form.component';
import { VendorRfqDisplayComponent } from './vendor/sales/vendor-rfq/vendor-rfq-display/vendor-rfq-display.component';
import { VendorPoDisplayFormComponent } from './vendor/sales/vendor-po/vendor-po-display-form/vendor-po-display-form.component';
import { VendorPoDisplayComponent } from './vendor/sales/vendor-po/vendor-po-display/vendor-po-display.component';
import { VendorGrDisplayFormComponent } from './vendor/sales/vendor-gr/vendor-gr-display-form/vendor-gr-display-form.component';
import { VendorGrDisplayComponent } from './vendor/sales/vendor-gr/vendor-gr-display/vendor-gr-display.component';
import { VendorUnauthorisedComponent } from './vendor/vendor-unauthorised/vendor-unauthorised.component';
import { VendorHeaderComponent } from './vendor/vendor-header/vendor-header.component';
import { VendorAgingDisplayComponent } from './vendor/finance/vendor-aging/vendor-aging-display/vendor-aging-display.component';
import { VendorInvoiceDisplayComponent } from './vendor/finance/vendor-invoice/vendor-invoice-display/vendor-invoice-display.component';
import { VendorMemoDisplayComponent } from './vendor/finance/vendor-memo/vendor-memo-display/vendor-memo-display.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VendorPoCreateComponent } from './vendor/sales/vendor-po/vendor-po-create/vendor-po-create.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { EmployeeHeaderComponent } from './employee/employee-header/employee-header.component';
import { EmployeeUnauthorisedComponent } from './employee/employee-unauthorised/employee-unauthorised.component';
import { EmployeeLoginComponent } from './employee/profile/employee-login/employee-login.component';
import { EmployeeDisplayComponent } from './employee/profile/employee-display/employee-display.component';
import { EmployeeEditComponent } from './employee/profile/employee-edit/employee-edit.component';
import { EmployeeLeaveCreateComponent } from './employee/employee-main/leave/employee-leave-create/employee-leave-create.component';
import { EmployeeLeaveListComponent } from './employee/employee-main/leave/employee-leave-list/employee-leave-list.component';
import { EmployeeQuotaComponent } from './employee/employee-main/leave/employee-quota/employee-quota.component';
import { EmployeeBasicPayComponent } from './employee/employee-main/employee-basic-pay/employee-basic-pay.component';
import { EmployeePayrollComponent } from './employee/employee-main/payslip/employee-payroll/employee-payroll.component';
import { EmployeeSettlementComponent } from './employee/employee-main/employee-settlement/employee-settlement.component';
import { EmployeeDashboardComponent } from './employee/employee-main/employee-dashboard/employee-dashboard.component';
import { EmployeeDisplayPayslipComponent } from './employee/employee-main/payslip/employee-display-payslip/employee-display-payslip.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EmployeeProjectComponent } from './employee/employee-main/employee-dashboard/employee-project/employee-project.component';
import { EmployeePerformanceComponent } from './employee/employee-main/employee-dashboard/employee-performance/employee-performance.component';
// import { EmployeeDisplayFormPayslipComponent } from './employee/payslip/employee-display-form-payslip/employee-display-form-payslip.component';
import { EmployeeProfileShortComponent } from './employee/employee-main/employee-profile-short/employee-profile-short.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { EmployeeDisplayFormPayslipComponent } from './employee/employee-main/payslip/employee-display-form-payslip/employee-display-form-payslip.component';
import { MemoDebitComponent } from './customer/memo/memo-debit/memo-debit.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingHeaderComponent,
    LoginComponent,
    LoginHeaderComponent,
    LandingAboutComponent,
    AboutCompanyComponent,
    AboutCodeComponent,
    AboutContactComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    InquiryListComponent,
    InquiryCreateComponent,
    DisplayComponent,
    DisplayMiddleComponent,
    SalesOrderDisplayComponent,
    SalesOrderListComponent,
    SalesOrderCreateComponent,
    CopyrightComponent,
    AboutProfileComponent,
    FinanceComponent,
    DisplayFormComponent,
    ListComponent,
    DeliverydisplayComponent,
    ProfileDisplayComponent,
    UploadFormComponent,
    SalesOrderDisplayFormComponent,
    ProfileEditComponent,
    AgingListComponent,
    UnauthorisedComponent,
    AgingDisplayComponent,
    MemoListComponent,
    MemoDisplayComponent,
    MemoDisplayFormComponent,
    InvoiceCreateComponent,
    InvoiceDisplayComponent,
    UploadDisplayComponent,
    SalesDataComponent,
    DeliveryListDisplayFormComponent,
    VendorLoginComponent,
    VendorViewComponent,
    VendorEditComponent,
    VendorRfqComponent,
    VendorPoComponent,
    VendorGrComponent,
    VendorInvoiceComponent,
    VendorAgingComponent,
    VendorMemoComponent,
    VendorFinanceComponent,
    VendorSalesComponent,
    VendorRfqDisplayFormComponent,
    VendorRfqDisplayComponent,
    VendorPoDisplayFormComponent,
    VendorPoDisplayComponent,
    VendorGrDisplayFormComponent,
    VendorGrDisplayComponent,
    VendorUnauthorisedComponent,
    VendorHeaderComponent,
    VendorAgingDisplayComponent,
    VendorInvoiceDisplayComponent,
    VendorMemoDisplayComponent,
    VendorPoCreateComponent,
    EmployeeMainComponent,
    EmployeeHeaderComponent,
    EmployeeUnauthorisedComponent,
    EmployeeLoginComponent,
    EmployeeDisplayComponent,
    EmployeeEditComponent,
    EmployeeLeaveCreateComponent,
    EmployeeLeaveListComponent,
    EmployeeQuotaComponent,
    EmployeeBasicPayComponent,
    EmployeePayrollComponent,
    EmployeeSettlementComponent,
    EmployeeDashboardComponent,
    EmployeeDisplayPayslipComponent,
    EmployeeProjectComponent,
    EmployeePerformanceComponent,
    EmployeeProfileShortComponent,
    EmployeeDisplayFormPayslipComponent,
    MemoDebitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    PdfViewerModule,
    SlickCarouselModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
