import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  apihost = 'api/v0/';
  getService(methodName: string, params: any = null) {
    if (params) {
      let i = 0;
      let parmsdet = '';
      let paramvariable = '';
      // tslint:disable-next-line: forin
      for (const key in params) {
        paramvariable = '';
        if (i > 0) {
          paramvariable = '&' + key + '=' + params[key];
        } else {
          paramvariable = '?' + key + '=' + params[key];
        }
        parmsdet = parmsdet + paramvariable;
        i++;
      }
      //console.log(parmsdet);

      return this.http.get(`${environment.serviceUrl}/` + this.apihost + methodName + parmsdet);
    } else {
      return this.http.get(`${environment.serviceUrl}/` + this.apihost + methodName);

    }
  }

  postservice(methodName: string, params: any = null) {
    console.log(params);
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    // JSON.stringify(data) 
    return this.http
      .post<any>(`${environment.serviceUrl}/` + this.apihost + methodName, params, { headers: reqHeader });

  }

  upload_service(methodName:string, params:any = null ,
     authenticate:boolean = false) {    
       this.apihost = 'api/v0/'
 

 // JSON.stringify(data) 
  return this.http
  .post<any>(`${environment.serviceUrl}/` +  this.apihost + methodName, params);
 
}



  getValidDateFromInput(dat1: any, dat2: any) {
    // let dt = this.f.txt_dt.value;
    let dt = dat1;   //this.f.txt_dt.value;
    let d = '';
    let m = '';
    let y = '';
    let str = '';
   console.log("string1-"+dt);

    str = dt.replace(/[^A-Za-z-. /\d]/g, "");
    str = str.replace(/  +/g, ' ');
    //console.log("str"+str);

    let x = str.split(/[ \(,-./\)]+/);  // str.split("-. /");  // str.split(" ");
    let created_date = '';
    let new_date = new Date();
    //console.log("length"+x.length+"-"+x);
    let date_val: any;
    let month_val: any;
    let year_val: any;

    switch (x.length) {

      case 1:
        let date = '';
        date = this.get_validdate(x[0], dat2);
        let split_val = date.split(/[,]+/);
        date_val = this.get_datedet(split_val[0]);
        month_val = this.get_monthdet(split_val[1]);
        year_val = this.get_yeardet(split_val[2], dat2);
        break;
      case 2:
        date_val = this.get_datedet(x[0]);
        month_val = this.get_monthdet(x[1]);
        year_val = new Date(dat2).getFullYear();
        break;
      case 3:
        if (x[0].length === 4 && x[2].length <= 2) {  // if year part specified first or not
          date_val = this.get_datedet(x[2]);
          year_val = this.get_yeardet(x[0], dat2);
        } else {
          date_val = this.get_datedet(x[0]);
          year_val = this.get_yeardet(x[2], dat2);
        }

        month_val = this.get_monthdet(x[1]);

        break;
      default: break;
    }
    // created_date = this.date_val + "-"+ this.month_val + "-" + this.year_val;
    created_date = year_val + "-" + month_val + "-" + date_val;


    let dt2 = new Date(created_date);
    let dt1 = new Date(dat2);
    console.log("dt1:-"+dt1);
    console.log("dt2:-"+dt2);
    if (dt2.toString() == 'Invalid Date') {
      dt2 = dt1;
    }

// alert(dt1)
// alert(dt2)

    if (dt1 <= dt2) {
      new_date = dt1;
    } else {
      new_date = dt2;
    }
  // alert(new_date)
    //this.f.txt_dt.setValue(this.getdateformat(new_date));
    let new_date_val = this.getdateformat(new_date);
     console.log(new_date_val);
     
    return new_date_val;
  }

  /************function to convert date in year-month- day format */
  getdateformat(dt: any) {
    const selYear = new Date(dt).getFullYear();
    const selMonth = new Date(dt).getMonth() + 1;
    const selDay = new Date(dt).getDate();
    const selectedDay = selDay < 10 ? '0' + selDay : selDay;
    const selectedMonth = selMonth < 10 ? '0' + selMonth : selMonth;
    const selDate = selectedDay + '-' + selectedMonth + '-' + selYear;
    return selDate;
  }

  get_validdate(det: any, dat: any) {
    let d = 0;
    let m = 0;
    let y = 0;
    let date = '';
    let today = new Date(dat);  // new Date(this.sys_date_info.CurrentDate);
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    // y= year;
    // m = month;
    for (let i = 1; i <= det.length; i++) {
      if (i <= 2) {  //first two digit as day
        d = det.substring(0, i);
      }
      else {
        if (i <= 4) {  //from third digit to fourth as month
          m = det.substring(2, i);
        } else { //from fourth to 8th as year
          y = det.substring(4, i);
        }
      }
      if (i > 8) break; //if more than 8 digit just skip from loop
    }
    m = m > 0 ? m : month;
    y = y > 0 ? y : year;
    date = d + ',' + m + ',' + y;
    return date;
  }

  get_datedet(det: any) {
    let d = 0;

    if (det.length < 2) {
      d = parseInt(det);
    }
    else {
      d = parseInt(det.substring(0, 2));
    }
    //  console.log("day-"+det+"/-"+det.length+"/-"+d);

    return d;
  }

  get_monthdet(det: any) {
    let m = 0;
    var monthArray = [
      { id: 1, shortname: 'jan', name_en: 'january' },
      { id: 2, shortname: 'feb', name_en: 'february' },
      { id: 3, shortname: 'mar', name_en: 'march' },
      { id: 4, shortname: 'apr', name_en: 'april' },
      { id: 5, shortname: 'may', name_en: 'may' },
      { id: 6, shortname: 'jun', name_en: 'june' },
      { id: 7, shortname: 'jul', name_en: 'july' },
      { id: 8, shortname: 'aug', name_en: 'august' },
      { id: 9, shortname: 'sep', name_en: 'september' },
      { id: 10, shortname: 'oct', name_en: 'october' },
      { id: 11, shortname: 'nov', name_en: 'november' },
      { id: 12, shortname: 'dec', name_en: 'december' },
    ]

    if (det.length > 2) {  ///month in character format
      var target = monthArray.find(temp => temp.shortname === det.toLowerCase() || temp.name_en === det.toLowerCase());
      if (target) {
        m = target.id;
      }
    }
    else {
      if (det.length < 2) m = det.substring(0, 2);
      else m = det;
    }
    // console.log("month-"+det+"/-"+det.length+"/-"+ m);

    return m;
  }
  get_yeardet(det: any, dt: any) {
    let today = new Date(dt);  // new Date(this.sys_date_info.CurrentDate);
    let year = today.getFullYear();
    let y = 0;
    let n = det.length;
    if (n >= 4) {
      y = parseInt(det.substring(0, 4));
    } else if (n <= 3) {
      y = 2000 + parseInt(det);
    }
    // console.log("yr-"+det+"/-"+det.length+"/-"+ y);

    return y;

  }


  /************function to convert date in year-month- day format */
  getdateformatinYMD(dt: any) {
   // console.log(dt);
    
    let split_val = dt.split("-");
    //console.log(split_val);

    let date_val = this.get_datedet(split_val[0]);
    let month_val = this.get_monthdet(split_val[1]);
    let year_val = split_val[2];



    // const selYear = new Date(dt).getFullYear();
    // const selMonth = new Date(dt).getMonth() + 1;
    // const selDay = new Date(dt).getDate();
    // const selectedDay = selDay < 10 ? '0' + selDay : selDay;
    // const selectedMonth = selMonth < 10 ? '0' + selMonth : selMonth;
    const selDate = year_val + '-' + month_val + '-' + date_val;
    return selDate;
  }



  getCheckDateFromInput(dat1: any, dat2: any) {
    // let dt = this.f.txt_dt.value;
    let dt = dat1;   //this.f.txt_dt.value;
    let d = '';
    let m = '';
    let y = '';
    let str = '';
    //console.log("string1-"+dt);

    str = dt.replace(/[^A-Za-z-. /\d]/g, "");
    str = str.replace(/  +/g, ' ');
    //console.log("str"+str);

    let x = str.split(/[ \(,-./\)]+/);  // str.split("-. /");  // str.split(" ");
    let created_date = '';
    let new_date = new Date();
    //console.log("length"+x.length+"-"+x);
    let date_val: any;
    let month_val: any;
    let year_val: any;

    switch (x.length) {

      case 1:
        let date = '';
        date = this.get_validdate(x[0], dat2);
        let split_val = date.split(/[,]+/);
        date_val = this.get_datedet(split_val[0]);
        month_val = this.get_monthdet(split_val[1]);
        year_val = this.get_yeardet(split_val[2], dat2);
        break;
      case 2:
        date_val = this.get_datedet(x[0]);
        month_val = this.get_monthdet(x[1]);
        year_val = new Date(dat2).getFullYear();
        break;
      case 3:
        if (x[0].length === 4 && x[2].length <= 2) {  // if year part specified first or not
          date_val = this.get_datedet(x[2]);
          year_val = this.get_yeardet(x[0], dat2);
        } else {
          date_val = this.get_datedet(x[0]);
          year_val = this.get_yeardet(x[2], dat2);
        }

        month_val = this.get_monthdet(x[1]);

        break;
      default: break;
    }
    // created_date = this.date_val + "-"+ this.month_val + "-" + this.year_val;
    created_date = year_val + "-" + month_val + "-" + date_val;




    let dt2 = new Date(created_date);
    let dt1 = new Date(dat2);
    console.log("dt1:-" + dt1);
    console.log("dt2:-" + dt2);
    if (dt2.toString() == 'Invalid Date') {
      dt2 = dt1;
    }


    // if(dt1<dt2){
    new_date = dt2;
    // } else {
    //   new_date=dt2;
    // }
    //alert(new_dathte)
    //this.f.txt_dt.setValue(this.getdateformat(new_date));
    let new_date_val = this.getdateformat(new_date);
    return new_date_val;
  }


  // public encryptdata(message: any) {
  //   // console.log(message);

  //   var password = "TechPool";

  //   var hash = CryptoJS.SHA1(password);
  //   var key = CryptoJS.lib.WordArray.create(hash.words.slice(0, 16 / 4));

  //   const encrypted = CryptoJS.AES.encrypt(message, key, {
  //     mode: CryptoJS.mode.ECB,
  //   });

  //   return encrypted;
  // }


  getParmService(methodName:string,param:any) {
  
    //let param = new HttpParams().set("keyword", query);
    return this.http.get<any>(`${environment.serviceUrl}/` +  this.apihost + methodName,
   { headers : {'Accept' : 'application/json'}, params:{req: param} });
  
  }
}