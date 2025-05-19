import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  apiurl = 'http://localhost:3000/user';

  RegisterUser(inputData: any) {
    return this.http.post(this.apiurl, inputData);
  }

  GetUserbyCode(id: any) {
    // Fixed endpoint to match JSON structure
    return this.http.get(`${this.apiurl}?id=${id}`);
  }

  Getall() {
    return this.http.get(this.apiurl);
  }

  updateuser(id: any, inputData: any) {
    return this.http.put(`${this.apiurl}/${id}`, inputData);
  }

  getuserrole() {
    return this.http.get('http://localhost:3000/role');
  }

  isloggedin() {
    return sessionStorage.getItem('username') != null;
  }

  getrole() {
    return sessionStorage.getItem('role') ?? '';
  }

  GetAllCustomer() {
    return this.http.get('http://localhost:3000/customer');
  }

  Getaccessbyrole(role: any, menu: any) {
    return this.http.get(`http://localhost:3000/roleaccess?role=${role}&menu=${menu}`);
  }
}
