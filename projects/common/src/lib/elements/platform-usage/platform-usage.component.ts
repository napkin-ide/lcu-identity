import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuIdentityPlatformUsageElementState {}

export class LcuIdentityPlatformUsageContext extends LCUElementContext<LcuIdentityPlatformUsageElementState> {}

export const SELECTOR_LCU_IDENTITY_PLATFORM_USAGE_ELEMENT = 'lcu-identity-platform-usage-element';

@Component({
  selector: SELECTOR_LCU_IDENTITY_PLATFORM_USAGE_ELEMENT,
  templateUrl: './platform-usage.component.html',
  styleUrls: ['./platform-usage.component.scss']
})
export class LcuIdentityPlatformUsageElementComponent extends LcuElementComponent<LcuIdentityPlatformUsageContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
