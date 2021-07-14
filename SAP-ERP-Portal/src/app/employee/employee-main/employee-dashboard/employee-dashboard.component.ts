import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft,faChevronRight,faCircle} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';
import { EmployeeProfileService } from 'src/app/service/employee/employee-profile.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router, private employeeService:EmployeeMainService, private profileService:EmployeeProfileService) { }
  items
  prof
  perf;
  s_i = 0;
  p_i = 0;
  p_n = 4;
  n = 0;
  ngOnInit(): void {
    this.employeeService.getProjList({'PERNR':this.cookieService.get("e_username")}).subscribe((data)=>{
      console.log(data)
      if(Array.isArray(data["IT_PROJ"]["item"])){
        this.items = data["IT_PROJ"]["item"]
      }
      else{
        this.items = [data["IT_PROJ"]["item"]]
      }
      this.n = this.items.length;
    })
    // this.profileService.getDetails({"PERNR":"6"}).subscribe((data)=>{
    //   console.log(data)
    //   this.prof = data["P0002"];
    // })
    // this.employeeService.getPerfList({}).subscribe((data)=>{
    //   this.perf = data["IT_LIST"];
    // })
  }

  onClickProj(wbs){
    this.employeeService.setProj(wbs);
    this.employeeService.bool = true;
    // this.router.navigateByUrl('emp/dashboard/proj')
  }
  prev_proj(){
    if(this.s_i-1 < 0){
      this.s_i = this.n-1
    }
    else{
      this.s_i -= 1
    }
  }
  next_proj(){
    if(this.s_i+1 >= this.n){
      this.s_i = 0
    }
    else{
      this.s_i += 1
    }
  }
   clickedIndex_proj(i){
    this.s_i = i;
  }

  onClickPerf(appr){
    this.employeeService.setPerf(appr);
    this.router.navigateByUrl('emp/dashboard/perf')
  }
  p_next(){
    if(this.p_i-3 < 0){
      this.p_i = this.p_n-3
    }
    else{
      this.p_i -= 3
    }
  }
  p_prev(){
    if(this.p_i+3 > this.p_n){
      this.p_i = 0
    }
    else{
      this.p_i += 3
    }
  }
  counter(i: number) {
    return new Array(i);
}


}
