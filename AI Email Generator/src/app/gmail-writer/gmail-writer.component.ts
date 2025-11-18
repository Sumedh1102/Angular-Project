import { Component } from '@angular/core';
import { GeminiService } from '../services/gemini.service';

@Component({
  selector: 'app-gmail-writer',
  templateUrl: './gmail-writer.component.html',
  styleUrls: ['./gmail-writer.component.css']
})
export class GmailWriterComponent {

  description = '';
  generatedEmail = '';
  loading = false;

  constructor(private geminiService: GeminiService) {}

  createEmail() {
    this.loading = true;

    const prompt = `
You are an AI Gmail Email Writer.
Write a **complete professional Gmail email** based ONLY on the user's description.

The email must include:
- A suitable subject line
- A proper greeting (like "Hi," / "Hello," / "Dear Sir/Madam,")
- A well-structured email body based on the description
- A polite closing line
- Sender name: "Regards"

User description: ${this.description}

Return only the email in clean text format. Do NOT add explanation.
`;

    this.geminiService.generateEmail(prompt).subscribe(res => {
      let text = res?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      text = text.replace(/```/g, '').trim();
      this.generatedEmail = text;
      this.loading = false;
    });
  }
}
