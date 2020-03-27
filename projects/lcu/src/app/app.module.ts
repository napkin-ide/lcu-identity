import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuIdentityModule, LcuIdentityPlatformUsageElementComponent, SELECTOR_LCU_IDENTITY_PLATFORM_USAGE_ELEMENT } from '@napkin-ide/lcu-identity-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuIdentityModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuIdentityModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const platformUsage = createCustomElement(LcuIdentityPlatformUsageElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_IDENTITY_PLATFORM_USAGE_ELEMENT, platformUsage);
	}
}
