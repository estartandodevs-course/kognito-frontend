import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxTaskComponent } from './checkbox-task/checkbox-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckBoxTaskComponent],
  imports: [CommonModule, FormsModule],
})
export class TasksModule {}
