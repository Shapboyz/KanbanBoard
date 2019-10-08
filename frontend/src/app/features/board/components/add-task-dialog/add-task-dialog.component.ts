import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-add-task-dialog",
  templateUrl: "add-task-dialog.component.html"
})
export class AddTaskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  filterData: any;

  ngOnInit() {
    this.filterData = this.data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
