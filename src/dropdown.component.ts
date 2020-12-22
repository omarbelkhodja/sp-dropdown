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

import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dropdownStyles from './dropdown.styles';
import template from './dropdown.template';

import { Menu } from '@spectrum/sp-menu';
import { Button } from '@spectrum/sp-button';
import { Popover } from '@spectrum/sp-popover';
import { DropdownItem } from '@spectrum/sp-dropdownitem';

export type MenuElement = { id: String, text: String, role: String, disabled: Boolean };
export type NestableMenuElement = MenuElement | { [k: string]: MenuElement };

@customElement('sp-dropdown')
export class Dropdown extends Base {
  public static componentStyles = [Menu.componentStyles, ...Button.componentStyles, ...Popover.componentStyles, dropdownStyles];

  @property({ type: String }) displayedItem = '';
  @property({ type: Boolean }) open = false;
  @property({ type: Array }) menu: MenuElement[] = [];
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) thumbnails = false;
  @property({ type: Boolean }) quiet = false;
  @property({ type: Boolean }) error = false;
  @property({ type: Boolean }) multilist = false;
  @property({ type: String }) width = false;
  @query('slot') private myslot!: HTMLElement;

  public updateSelected() {
    const items = this.getItems();
    const selected = items
      .filter((element: any) => !element.separator)
      .find((element: any) => element.selected);
    if (selected) {
      this.displayedItem = selected.text;
    } else if (items.length > 0) {
      this.displayedItem = items[0].text;
      items[0].selected = true;
    }
    this.requestUpdate();
  }

  protected firstUpdated() {
    this.updateSelected();
  }

  protected getItems(): DropdownItem[] {
    return (this.myslot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => (e instanceof DropdownItem)) as any as DropdownItem[];
  }

  protected handleSlotClick(e) {
    const currentElement = e.path.filter((e: Node) => (e instanceof DropdownItem));
    if (currentElement[0].disabled) {
      return;
    }
    this.displayedItem = currentElement[0].text;

    if (this.multilist) {
      currentElement[0].selected = !currentElement[0].selected;
    } else {
      currentElement[0].selected = true;
      this.getItems()
        .filter((item: any) => item.text !== currentElement[0].text)
        .forEach((item: any) => {
          item.selected = false;
        });
    }
  }

  protected handleSlotchange() {
    this.updateSelected();
  }

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-dropdown': Dropdown;
  }
}
