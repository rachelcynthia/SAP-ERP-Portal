import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ProfileService } from 'src/app/service/customer/profile.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  file: File;
  arrayBuffer;
  data = {};
  form=true;
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
  }

  uploadedFile(event) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data1 = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data1.length; ++i) arr[i] = String.fromCharCode(data1[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      console.log(workbook)
      for (let x of workbook.SheetNames) {
        this.data[x] = {};
        for (let y in workbook.Sheets[x]) {

          if (y != '!margins' && y != '!ref' && y.charAt(y.length - 1) == '1') {
            if (workbook.Sheets[x][y.replace('1', '2')] != undefined) {
              this.data[x][workbook.Sheets[x][y]['v']] = workbook.Sheets[x][y.replace('1', '2')]['v'];
              console.log(y, workbook.Sheets[x][y.replace('1', '2')]['v']);
            }
            else {
              this.data[x][workbook.Sheets[x][y]['v']] = '';
            }
          }
        }
      }
      console.log(this.data);
      this.data["CONSUMEREN"] = ""
      this.data["CREDIT_CONTROL_FLAG"] = ""
    }
  }
  customer;
  onSubmit(form: NgForm) {
    this.profileService.uploadDetails(this.data).subscribe((data)=>{
      console.log(data)
      if(data["RETURN"]["TYPE"]!='E'){
        alert('DATA UPLOADED')
       this.profileService.viewDetails({'CUSTOMERNO': data['CUSTOMERNO']}).subscribe((data)=>{
         console.log(data)
         this.customer = data['WA_KNA1']
       })
       this.form = false;
      }
      else{
        alert("ERROR MESSAGE \n" + data["RETURN"]["MESSAGE"]);
        window.location.reload();
      }
    })
  }

}
