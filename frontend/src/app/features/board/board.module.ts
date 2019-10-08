import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

import {
  boardPageRoute,
  BoardPageComponent,
  TaskListComponent,
  TaskComponent,
  AddTaskDialogComponent
} from ".";

const ENTITY_STATES = [...boardPageRoute];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    BoardPageComponent,
    TaskListComponent,
    TaskComponent,
    AddTaskDialogComponent
  ],
  entryComponents: [BoardPageComponent, AddTaskDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoardModule {
  constructor() {}
}