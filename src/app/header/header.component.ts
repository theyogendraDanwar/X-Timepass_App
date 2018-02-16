import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private privateImage: string;
  private getUsername: string;

  constructor(public dialog: MatDialog) {
    this.privateImage = 'https://assets.zapnito.com/assets/medium-default-avatar.png';
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogAddClient,{
      width:'250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getUsername = result;
    });
  }
}


@Component({
  selector: 'add-user-dialog',
  templateUrl: 'addUserDialog.html'
})
export class DialogAddClient {

  constructor( public dialogRef: MatDialogRef<DialogAddClient>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  addPerson(username){
    //console.log(Math.random().toString(36).substr(2, 10));
    this.dialogRef.close(username);
  }
}
