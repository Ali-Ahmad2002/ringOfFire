import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {

  name: string = '';
  static afterClosed: any;
  dialog: any;

  constructor() { }

  ngOnInit(): void {
  }

  onNoClick() {

    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: any) => {
      console.log('The dialog was closed', name);
    });
  }

}
