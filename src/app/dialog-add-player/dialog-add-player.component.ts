import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {

  name: string = '';
  static afterClosed: any;

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick() {

    // const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    // dialogRef.afterClosed().subscribe((name: any) => {
    //   console.log('The dialog was closed', name);
    // });

    this.dialogRef.close();
  }

}
