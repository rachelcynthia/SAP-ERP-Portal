import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { VendorFinanceService } from 'src/app/service/vendor/vendor-finance.service';
import { VendorFinanceComponent } from 'src/app/vendor/vendor-finance/vendor-finance.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-vendor-invoice-display',
  templateUrl: './vendor-invoice-display.component.html',
  styleUrls: ['./vendor-invoice-display.component.css']
})
export class VendorInvoiceDisplayComponent implements OnInit {
  name="invoice"
  PDF;
  pdfSrc;
  
  constructor(private financeService:VendorFinanceService) { }

ngOnInit(): void {
this.financeService.getInvDet({
  "YEAR": this.financeService.getFisc(),
  "INVOICE":this.financeService.getInv()})
  .subscribe((data)=>{
    this.PDF = data["PDF"]
    this.pdfSrc = 'data:application/pdf;base64,' + this.PDF;
  })
  
  
}

onClick(){
  FileSaver.saveAs(this.pdfSrc, "Invoice-" + String(this.financeService.getInv())+ ".pdf");
}
}
