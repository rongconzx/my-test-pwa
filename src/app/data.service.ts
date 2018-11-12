import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsic2FnLXJlc3QiXSwidXNlcl9uYW1lIjoiNjAyODMiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwic2FsZXNfb25iZWhhbGYiOm51bGwsImV4cCI6MTU0MDk5ODQxMywiYXV0aG9yaXRpZXMiOlsiVVNFUl9BRE1JTiJdLCJqdGkiOiI3Y2JkNGZiNi0xN2NiLTRjMGMtYjQyYS05MWJmZjc3NDVkZjkiLCJjbGllbnRfaWQiOiJlc2hvcC13ZWIifQ.3C1KtQgPflYl-AII6V0tepqyELJ6rPnQsQQcfD94W3U'
  constructor(private http: HttpClient) { }

  getCategory() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', this.token);

    return this.http.get('http://ax.sib-services.ch/rest-ax/categories/V58944M27193/all', {
      headers: headers
    })
  }
}
