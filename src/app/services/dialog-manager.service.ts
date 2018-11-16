import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditEventDialogComponent } from '../admin/Event/edit-event-dialog/edit-event-dialog.component';
import { Organization } from '../models/Organization';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  constructor(public dialog: MatDialog) { }

  openEditEvent(event: Organization): void {
    this.dialog.open(EditEventDialogComponent, {
      width: '250px',
      data: event,
      panelClass: 'dialog'
    });
  }
}
