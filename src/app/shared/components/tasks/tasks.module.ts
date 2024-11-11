import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxTaskComponent } from './checkbox-task/checkbox-task.component';

@NgModule({
  declarations: [CheckBoxTaskComponent],
  imports: [CommonModule, FormsModule],
})
export class TasksModule {}
