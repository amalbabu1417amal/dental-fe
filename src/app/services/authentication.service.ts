import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }
  login(data: any) {
    //  console.log("AuthenticationService:: Login");
    console.log(data);
    // sessionStorage.setItem("token", '');
    return this.http.post<any>(`${environment.serviceUrl}/authenticate`, data)
  }

  getusersession() {
    const token = sessionStorage.getItem('token');
    console.log('Token:', token); 
    return this.http.post<any>(`${environment.serviceUrl}/getSession`, token);
  }

  logout(data: any) {
    return this.http.post<any>(`${environment.serviceUrl}/api/v0/log_out`, data, {
    });
  }

  get_info() {
    return this.http.get(`${environment.serviceUrl}/api/v0/info`)
  }

  // getusersession(){
  //   return this.http.post<any>(`${environment.serviceUrl}/api/v0/getSession`,null)
  // }

  // getusersession() {
  //   const token = sessionStorage.getItem('token'); 
  //   const data = {
  //     jwt: token 
  //   };
  //   return this.http.post<any>(`${environment.serviceUrl}/getSession`, data);
  // }

  // getusersession() {
  //   const sample = "eyJyb2xlIjoiREdDQSBTdXBlcnZpc29yIiwiZGVzaWdJZCI6MCwicm9sZUlkIjoxNjAsInRybkRhdGUiOnsiZGF5T2ZXZWVrIjoiRlJJREFZIiwiaG91ciI6MTIsIm1vbnRoIjoiU0VQVEVNQkVSIiwieWVhciI6MjAyNCwiZGF5T2ZNb250aCI6NiwiZGF5T2ZZZWFyIjoyNTAsIm1vbnRoVmFsdWUiOjksIm5hbm8iOjM4NzAwMDAwMCwiY2hyb25vbG9neSI6eyJjYWxlbmRhclR5cGUiOiJpc284NjAxIiwiaWQiOiJJU08ifSwibWludXRlIjo1Nywic2Vjb25kIjoxOH0sInVzZXJOYW1lIjoiQkEiLCJ1c2VySWQiOjIsImVtYWlsIjoiYmFzdXBlcnZpc29yQGthbm51cmFpcnBvcnQuYWVybyJ9";

  //   const key = JSON.parse(window.atob(sample));

  //   console.log(key);
  //   sessionStorage.setItem('key', JSON.stringify(key));
  //   return sessionStorage;

  //   // const roleId = parsedKey.roleId;
  //   // const userName = parsedKey.userName;

  //   // console.log('Role ID:', roleId);
  //   // console.log('User Name:', userName);

  // }
  // getusersession() {
  //   const sample = "eyJyb2xlIjoiREdDQSBTdXBlcnZpc29yIiwiZGVzaWdJZCI6MCwicm9sZUlkIjoxNjAsInRybkRhdGUiOnsiZGF5T2ZXZWVrIjoiRlJJREFZIiwiaG91ciI6MTIsIm1vbnRoIjoiU0VQVEVNQkVSIiwieWVhciI6MjAyNCwiZGF5T2ZNb250aCI6NiwiZGF5T2ZZZWFyIjoyNTAsIm1vbnRoVmFsdWUiOjksIm5hbm8iOjM4NzAwMDAwMCwiY2hyb25vbG9neSI6eyJjYWxlbmRhclR5cGUiOiJpc284NjAxIiwiaWQiOiJJU08ifSwibWludXRlIjo1Nywic2Vjb25kIjoxOH0sInVzZXJOYW1lIjoiQkEiLCJ1c2VySWQiOjIsImVtYWlsIjoiYmFzdXBlcnZpc29yQGthbm51cmFpcnBvcnQuYWVybyJ9";

  //   // Decode the base64 string to a JSON object
  //   const key = JSON.parse(window.atob(sample));

  //   // Log the key to verify it is parsed correctly
  //   console.log(key);

  //   // Store the parsed object as a string in sessionStorage
  //   sessionStorage.setItem('key', JSON.stringify(key));

  //   return sessionStorage; // Return sessionStorage if needed for further operations
  // }

}