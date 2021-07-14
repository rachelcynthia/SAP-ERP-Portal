import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProfileService } from 'src/app/service/vendor/profile.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  prof1: {
    "MANDT": "",
    "LIFNR": "",
    "LAND1": "",
    "NAME1": "",
    "NAME2": "",
    "NAME3": "",
    "NAME4": "",
    "ORT01": "",
    "ORT02": "",
    "PFACH": "",
    "PSTL2": "",
    "PSTLZ": "",
    "REGIO": "",
    "SORTL": "",
    "STRAS": "",
    "ADRNR": "",
    "MCOD1": "",
    "MCOD2": "",
    "MCOD3": "",
    "ANRED": "",
    "BAHNS": "",
    "BBBNR": "",
    "BBSNR": "",
    "BEGRU": "",
    "BRSCH": "",
    "BUBKZ": "",
    "DATLT": "",
    "DTAMS": "",
    "DTAWS": "",
    "ERDAT": "",
    "ERNAM": "",
    "ESRNR": "",
    "KONZS": "",
    "KTOKK": "",
    "KUNNR": "",
    "LNRZA": "",
    "LOEVM": "",
    "SPERR": "",
    "SPERM": "",
    "SPRAS": "",
    "STCD1": "",
    "STCD2": "",
    "STKZA": "",
    "STKZU": "",
    "TELBX": "",
    "TELF1": "",
    "TELF2": "",
    "TELFX": "",
    "TELTX": "",
    "TELX1": "",
    "XCPDK": "",
    "XZEMP": "",
    "VBUND": "",
    "FISKN": "",
    "STCEG": "",
    "STKZN": "",
    "SPERQ": "",
    "GBORT": "",
    "GBDAT": "",
    "SEXKZ": "",
    "KRAUS": "",
    "REVDB": "",
    "QSSYS": "",
    "KTOCK": "",
    "PFORT": "",
    "WERKS": "",
    "LTSNA": "",
    "WERKR": "",
    "PLKAL": "",
    "DUEFL": "",
    "TXJCD": "",
    "SPERZ": "",
    "SCACD": "",
    "SFRGR": "",
    "LZONE": "",
    "XLFZA": "",
    "DLGRP": "",
    "FITYP": "",
    "STCDT": "",
    "REGSS": "",
    "ACTSS": "",
    "STCD3": "",
    "STCD4": "",
    "STCD5": "",
    "IPISP": "",
    "TAXBS": "",
    "PROFS": "",
    "STGDL": "",
    "EMNFR": "",
    "LFURL": "",
    "J_1KFREPRE": "",
    "J_1KFTBUS": "",
    "J_1KFTIND": "",
    "CONFS": "",
    "UPDAT": "",
    "UPTIM": "",
    "NODEL": "",
    "QSSYSDAT": "",
    "PODKZB": "",
    "FISKU": "",
    "STENR": "",
    "CARRIER_CONF": "",
    "MIN_COMP": "",
    "TERM_LI": "",
    "CRC_NUM": "",
    "CVP_XBLCK": "",
    "RG": "",
    "EXP": "",
    "UF": "",
    "RGDATE": "",
    "RIC": "",
    "RNE": "",
    "RNEDATE": "",
    "CNAE": "",
    "LEGALNAT": "",
    "CRTN": "",
    "ICMSTAXPAY": "",
    "INDTYP": "",
    "TDT": "",
    "COMSIZE": "",
    "DECREGPC": "",
    "DUNSP4": "",
    "J_SC_CAPITAL": "",
    "J_SC_CURRENCY": "",
    "ALC": "",
    "PMT_OFFICE": "",
    "PPA_RELEVANT": "",
    "PSOFG": "",
    "PSOIS": "",
    "PSON1": "",
    "PSON2": "",
    "PSON3": "",
    "PSOVN": "",
    "PSOTL": "",
    "PSOHS": "",
    "PSOST": "",
    "BORGR_DATUN": "",
    "BORGR_YEAUN": "",
    "TRANSPORT_CHAIN": "",
    "STAGING_TIME": "",
    "SCHEDULING_TYPE": "",
    "SUBMI_RELEVANT": "",
    "ZZMATKL": ""
 }
 prof
  constructor(private vendorService:ProfileService, private router:Router,private cookieService:CookieService) { }

  ngOnInit(): void {
    this.vendorService.getDetails({"VENDOR_NUMBER":this.cookieService.get("v_username")}).subscribe((data)=>{
      this.prof = data["TY_LFA1"]
    })
  }

  onSubmit(){
    console.log(this.prof)
    this.vendorService.editDetails({"TY_LFA1":this.prof}).subscribe((data)=>{
      if(data["RETURN"]["TYPE"]=="S"){
        alert("Details Updated")
        this.router.navigateByUrl('/vend/profile/view')
      }
      else{
        alert("Error Uodating the details, Try again later.")
     }
    })
  }

  onCancel() {
    this.router.navigateByUrl('/vend/profile/view')
 }
 onNum(d){
  if(isNaN(d*1)){
     return d
  }
  return d*1
}

}
