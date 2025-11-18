import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private apiUrl =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  private apiKey = environment.GEMINI_API_KEY;

  constructor(private http: HttpClient) {}

  generateEmail(prompt: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}`;
    const body = {
      contents: [
        { parts: [{ text: prompt }] }
      ]
    };

    return this.http.post<any>(url, body);
  }
}
