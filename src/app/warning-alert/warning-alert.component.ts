import { Component } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  standalone: false,
  templateUrl: './warning-alert.component.html',
  // styleUrl: './warning-alert.component.css',
  styles: [
    `
      p {
        color: red;
        font-weight: bold;
        background-color: #f8d7da;
        padding: 10px;
        border: 1px solid red;
        border-radius: 5px;
      }
    `,
  ]
})
export class WarningAlertComponent {}
