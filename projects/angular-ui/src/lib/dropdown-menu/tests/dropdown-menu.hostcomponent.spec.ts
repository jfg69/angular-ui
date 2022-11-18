/*
 * Copyright (c) 2022 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

import { Component } from '@angular/core';

@Component({
  template: `
    <button [baoDropdownMenuTriggerFor]="testMenu">
      <span>Actions</span>
      <bao-icon svgIcon="icon-chevron-down"></bao-icon>
    </button>
    <bao-dropdown-menu #testMenu></bao-dropdown-menu>
  `
})
export class TestButtonMenuHostComponent {}

@Component({
  template: `
    <bao-dropdown-menu>
      <a bao-dropdown-menu-item [disabled]="disabled">
        <bao-icon svgIcon="icon-chevron-down"></bao-icon>
        <bao-dropdown-menu-item-label>Libellé</bao-dropdown-menu-item-label>
      </a>
    </bao-dropdown-menu>
  `
})
export class TestDropdownMenuHostComponent {
  disabled: boolean;
}