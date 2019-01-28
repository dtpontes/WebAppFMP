import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})



export class DialogService {
  constructor(private dialog:MatDialog) { }

  openConfirmDialog(msg)
  {
    return this.dialog.open(ConfirmDialogComponent,{
      width:'390px',
      panelClass: "confirm-dialog-container",
      disableClose: true,
      data:{
        message : msg
      }
    })
  }
  
}
