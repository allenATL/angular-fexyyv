import {Component} from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { Observable } from 'rxjs';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'dialog-animations-example',
  styleUrls: ['dialog-animations-example.css'],
  templateUrl: 'dialog-animations-example.html',
})
export class DialogAnimationsExample {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): Observable<any> {
    const config = new MatDialogConfig();
    config.disableClose = true; //you cannot click backdrop to close the dialog//
    config.panelClass = 'modal-panel';
    config.width = '250px';
    config.backdropClass = "backdrop-modal-panel";
    config.enterAnimationDuration = enterAnimationDuration;
    config.exitAnimationDuration =  exitAnimationDuration;
    config.hasBackdrop = false; 

    //   {
    //   width: '250px',
    //   enterAnimationDuration,
    //   exitAnimationDuration,
    // });

    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, config);
    return dialogRef.afterClosed();
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {


  }
  close(){
    this.dialogRef.close();
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */