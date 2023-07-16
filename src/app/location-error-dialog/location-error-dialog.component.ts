import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-location-error-dialog',
  templateUrl: './location-error-dialog.component.html',
  styleUrls: ['./location-error-dialog.component.scss']
})
export class LocationErrorDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LocationErrorDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  closeLocationErrorDialog(): void {
    this.dialogRef.close();
  }
}
