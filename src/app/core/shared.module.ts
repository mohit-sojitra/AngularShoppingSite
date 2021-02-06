import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, CommonModule],
})
export class SharedModule {}
