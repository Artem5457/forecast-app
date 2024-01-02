import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-location-error-dialog',
  templateUrl: './location-error-dialog.component.html',
  styleUrls: ['./location-error-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationErrorDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<LocationErrorDialogComponent>
  ) { }

  closeLocationErrorDialog(): void {
    this.dialogRef.close();
  }
}
