import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-terms-of-service',
  template: `
    <main class="legal-page">
      <mat-card>
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> November 13, 2026</p>
        <p>
          These Terms of Service apply to your use of Barcode Scanner and Validator ("the app").
          By using the app, you agree to these terms. If you do not agree, do not use the app.
          Questions can be sent to
          <a href="mailto:99shadow.friend99@gmail.com">99shadow.friend99@gmail.com</a>.
        </p>

        <h2>What the app does</h2>
        <p>
          The app provides browser-based barcode scanning using your camera or an image you
          select. Scanning requires a compatible browser and, for camera scanning, your
          permission. You are responsible for deciding whether to grant that permission.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Use the app only for lawful purposes and in a way that does not interfere with its
          operation or other users' access. Do not attempt to disrupt, damage, or gain
          unauthorized access to the app or its infrastructure.
        </p>

        <h2>Scan results and availability</h2>
        <p>
          Barcode recognition can be incomplete or incorrect because of image quality, barcode
          condition, device, or browser limitations. Results are provided for convenience and
          should be checked before you rely on them. Do not use the app as the sole basis for
          safety-critical, medical, financial, or other high-consequence decisions.
        </p>
        <p>
          The app is provided without a promise of uninterrupted availability or compatibility
          with every device. Features may change or become unavailable.
        </p>

        <h2>Disclaimer and liability</h2>
        <p>
          To the extent permitted by applicable law, the app is provided "as is" and "as
          available," without warranties of any kind. To the extent permitted by law, the
          operator is not liable for indirect or consequential loss arising from use of, or
          inability to use, the app. Nothing in these terms limits rights or liability that
          cannot legally be excluded.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          These terms may be updated as the app changes. Continued use after an updated version
          is posted means you accept the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, email
          <a href="mailto:99shadow.friend99@gmail.com">99shadow.friend99@gmail.com</a>.
        </p>
      </mat-card>
    </main>
  `,
  styles: [`
    .legal-page {
      max-width: 900px;
      margin: 0 auto;
      line-height: 1.6;
    }

    h1, h2 {
      line-height: 1.3;
    }
  `],
})
export class TermsOfServiceComponent {}
