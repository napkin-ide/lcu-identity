import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { LcuIdentityPlatformUsageElementComponent } from './elements/platform-usage/platform-usage.component';

@NgModule({
  declarations: [LcuComponent, LcuDirective, LcuIdentityPlatformUsageElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LcuComponent, LcuDirective, LcuIdentityPlatformUsageElementComponent],
  entryComponents: [LcuIdentityPlatformUsageElementComponent]
})
export class LcuIdentityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuIdentityModule,
      providers: [LcuService]
    };
  }
}
