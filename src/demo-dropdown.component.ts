/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { PageViewElement } from '@components/page-view-element';
import { customElement, query, property} from 'lit-element';

import styles from './demo-dropdown.styles';
import template from './demo-dropdown.template';
import '@spectrum/sp-popover';


// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Dropdown } from '@spectrum/sp-dropdown';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

export type MenuElement = { id: String, text: String, role: String, disabled: Boolean };
export type NestableMenuElement = MenuElement | { [k: string]: MenuElement };

@customElement('demo-dropdown')
export class DemoDropdown extends PageViewElement {
  public static styles = [sharedStyles, styles];
  @property({ type: Number }) _clickCount = 0;
  @property({ type: Array }) _menu: MenuElement[] = [
    { id: "ballard", text: "Ballard", role: "option", disabled: false },
    { id: "fremont", text: "Fremont", role: "option", disabled: false },
    { id: "greenwood", text: "Greenwood", role: "option", disabled: false },
    { id: "", text: "", role: "separator", disabled: false },
    { id: "usa", text: "United States of America", role: "option", disabled: true },
  ];


  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-dropdown': DemoDropdown;
  }
}
