import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-po-create',
  templateUrl: './vendor-po-create.component.html',
  styleUrls: ['./vendor-po-create.component.css']
})
export class VendorPoCreateComponent implements OnInit {

  tot = 1
  s_i = 0
  item = {
    "PO_NUMBER": "",
    "PO_ITEM": "",
    "ADDRESS": "",
    "MATERIAL": "",
    "PUR_MAT": "",
    "INFO_REC": "",
    "ITEM_CAT": "",
    "ACCTASSCAT": "",
    "AGREEMENT": "",
    "AGMT_ITEM": "",
    "STORE_LOC": "",
    "MAT_GRP": "",
    "SHORT_TEXT": "",
    "DISTRIB": "",
    "PART_INV": "",
    "KANBAN_IND": "",
    "PLANT": "",
    "ALLOC_TBL": "",
    "AT_ITEM": "",
    "UNIT": "",
    "NET_PRICE": "",
    "PRICE_UNIT": "",
    "CONV_NUM1": "",
    "CONV_DEN1": "",
    "ORDERPR_UN": "",
    "PCKG_NO": "",
    "PROMOTION": "",
    "ACKN_REQD": "",
    "TRACKINGNO": "",
    "PLAN_DEL": "",
    "RET_ITEM": "",
    "AT_RELEV": "",
    "VEND_MAT": "",
    "MANUF_PROF": "",
    "MANU_MAT": "",
    "MFR_NO": "",
    "MFR_NO_EXT": "",
    "PO_PRICE": "",
    "SHIPPING": "",
    "ITEM_CAT_EXT": "",
    "PO_UNIT_ISO": "",
    "ORDERPR_UN_ISO": "",
    "PREQ_NAME": "",
    "DISP_QUAN": "",
    "QUAL_INSP": "",
    "NO_MORE_GR": "",
    "DELETE_IND": "",
    "NO_ROUNDING": "",
    "TAX_CODE": "",
    "MATERIAL_EXTERNAL": "",
    "MATERIAL_GUID": "",
    "MATERIAL_VERSION": "",
    "PUR_MAT_EXTERNAL": "",
    "PUR_MAT_GUID": "",
    "PUR_MAT_VERSION": "",
    "VAL_TYPE": "",
    "PR_CLOSED": "",
    "ACKNOWL_NO": "",
    "REQ_SEGMENT": "",
    "STK_SEGMENT": ""
  }
  items = []
  header = {
    "DOC_DATE": "",
    "DOC_TYPE": "",
    "DOC_CAT": "",
    "CO_CODE": "",
    "PURCH_ORG": "",
    "PUR_GROUP": "",
    "AGREEMENT": "",
    "VENDOR": "",
    "PO_NUMBER": "",
    "SUPPL_PLNT": "",
    "CREATED_BY": "",
    "LANGU": "",
    "LANGU_ISO": ""
  }
  item_s_t = {
    "PO_ITEM": "",
    "SERIAL_NO": "",
    "DEL_DATCAT": "",
    "DELIV_DATE": "",
    "DELIV_TIME": "",
    "QUANTITY": "",
    "PREQ_NO": "",
    "PREQ_ITEM": "",
    "CREATE_IND": "",
    "QUOTA_NO": "",
    "QUOTA_ITEM": "",
    "BOMEXPL_NO": "",
    "RESERV_NO": "",
    "BATCH": "",
    "VEND_BATCH": "",
    "VERSION": "",
    "DEL_DATCAT_EXT": ""
  }
  items_s = []
  constructor(private poService: VendorSalesService, private router: Router,private cookieService:CookieService) {
    this.items.push(JSON.parse(JSON.stringify(this.item)));
    this.items[0].id = 0
  }

  ngOnInit(): void {
  }
  onClick(i) {
    this.s_i = i;
  }
  addRow() {
    this.items.push(JSON.parse(JSON.stringify(this.item)));
    this.items_s.push(JSON.parse(JSON.stringify(this.item_s_t)));
    this.tot += 1
    console.log(this.items)
  }
  delRow() {
    this.tot -= 1
    this.items = this.items.filter((item) => item.id == this.tot.toString())
  }
  onSubmit() {
    for (let i = 0; i < this.items_s.length; i++) {
      this.items_s[0].PO_ITEM = this.items[0].PO_ITEM
    }
    console.log(this.header)
    console.log(this.items)
    console.log(this.items_s)
    this.header["VENDOR"] = this.cookieService.get("v_username")
    this.poService.createPO({ "PO_HEADER": this.header, "PO_ITEMS": { "item": this.items }, "PO_ITEM_SCHEDULES": { "item": this.items_s },"RETURN":"" }).subscribe((data)=>{
      if(data["PURCHASEORDER"]!=''){
        alert('PO Creation notification sent to manager')
        this.poService.setPO(data["PURCHASEORDER"])
        this.router.navigateByUrl('/vend/sales/po/display')
      }
      else{
        alert('Error in PO Creation ')
      }
    })
  }
  onCancel() {
    this.router.navigateByUrl('/vend/sales/po/create')
  }
}

type item = {
  'id': '',
  'PO_ITEM': '',
  'SHORT_TEXT': '',
  'STATUS': '',
  'ITEM_CAT': '',
  'QUANTITY': '',
  'UNIT': '',
  'ORDERPER_UN': '',
  'NET_PRICE': '',
  'PRICE_UNIT': '',
  'NET_WEIGHT': '',
  'WEIGHTUNIT': '',
  'MAT_GRP': '',
  'PLANT': '',
  'STORE_LOC': '',
  'PRICE_DATE': '',
  'CUSTOMER': '',
  'ADDRESS': '',
  'COMMENT': ''

}
