import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VolunteerComponent } from '../../dialog/volunteer/volunteer.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private dialog: MatDialog) { }

  onDialog(): void {
    const dialogRef = this.dialog.open(VolunteerComponent, {
      width: '70%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
