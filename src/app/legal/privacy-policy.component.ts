import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-privacy-policy',
  template: `
    <main class="legal-page">
      <mat-card>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> November 13, 2026</p>
        <p>
          This Privacy Policy explains how Barcode Scanner and Validator ("the app") handles
          information when you use this website. For privacy questions, contact
          <a href="mailto:99shadow.friend99@gmail.com">99shadow.friend99@gmail.com</a>.
        </p>

        <h2>Information processed by the app</h2>
        <ul>
          <li>
            <strong>Camera scans:</strong> If you choose live scanning, your browser asks for
            camera permission. The camera stream is used by the scanner in your browser to read
            barcodes. The app does not intentionally upload or retain camera images.
          </li>
          <li>
            <strong>Selected images and barcode results:</strong> If you choose an image, the
            browser reads it to decode a barcode and may show an image preview and the decoded
            value. The app has no account or scan-history feature and does not intentionally save
            these images or values to an app-operated server.
          </li>
          <li>
            <strong>Service and security logs:</strong> The hosting and delivery providers used
            to make this website available may process connection and request information, such
            as IP address, browser details, and request time, for delivery, security, and
            troubleshooting. Their retention practices depend on the hosting configuration and
            their own policies.
          </li>
        </ul>

        <h2>Permissions and your choices</h2>
        <p>
          Camera access is optional. You can deny or revoke it in your browser or device
          settings and use image selection instead. Images you select are processed for barcode
          decoding when you use that feature.
        </p>

        <h2>Storage, sharing, and third parties</h2>
        <p>
          The app does not provide sign-in, an account profile, or a feature to save scan history.
          It does not intentionally sell your scan images or barcode results. Website hosting
          providers are third-party services and handle information under their own terms and
          privacy policies.
        </p>

        <h2>Children</h2>
        <p>
          This app is a general-purpose barcode utility and is not designed to collect personal
          information from children.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This policy may be updated when the app or its data practices change. The updated
          version will be posted on this page with a revised date.
        </p>

        <h2>Contact</h2>
        <p>
          For questions or privacy requests, email
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

    li {
      margin-bottom: 12px;
    }
  `],
})
export class PrivacyPolicyComponent {}
