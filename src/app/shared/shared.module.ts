import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { DataService } from './data.service';
import { CalculateService } from './calculate.service';

@NgModule({
  exports: [
    ClarityModule,
  ],
  imports: [
  ],
  declarations: [
  ],
  providers: [DataService, CalculateService],
})
export class SharedModule {}
