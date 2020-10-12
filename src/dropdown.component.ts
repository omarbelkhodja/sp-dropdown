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
  public static componentStyles = [ Menu.componentStyles, Button.componentStyles, Popover.componentStyles, dropdownStyles ];

  @property({ type: String }) displayedItem = "";
  @property({ type: Boolean }) open = false;
  @property({ type: Array }) menu: MenuElement[] = [];
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) thumbnails = false;
  @property({ type: Boolean }) quiet = false;
  @property({ type: Boolean }) error = false;
  @property({ type: Boolean }) multilist = false;
  @property({ type: String }) width = false;
  @query('slot') private slot!: HTMLElement;

  constructor() {
    super();
    //document.addEventListener('click', this._handleDocumentClick.bind(this));
  }

  protected firstUpdated() {
    let selectable = this.getSteps()
      .filter((element: any) => element.separator == false)
      .find((element: any) => element.selected == true)
    if (selectable) {
      this.displayedItem = selectable.text;
    } else {
      this.displayedItem = this.getSteps()[0].text;
    }
  }

  protected getSteps(): DropdownItem[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => (e instanceof DropdownItem)) as any as DropdownItem[];
  }

  protected handleSlotChange(e) {
    let currentElement = e.path.filter((e: Node) => (e instanceof DropdownItem));
    let selectedItems = [];
    if (this.slot) {
      const items = this.getSteps();
      if (this.multilist) {
        items.forEach((item: any) => {
          if (item.selected) {
            selectedItems.push(item.text)
          }
        })
        if (selectedItems.length > 0) {
          this.displayedItem = selectedItems[0];
        } else {
          this.displayedItem = items[0].text;
        }
      } else {
        if (currentElement[0].selected) {
          this.displayedItem = currentElement[0].text;
          selectedItems.push(currentElement[0].text);
          items
            .filter((item: any) => item.text != currentElement[0].text)
            .forEach((item: any) => {
              item.selected = false
            })
        }
      }
    }
    let changedEvent = new CustomEvent('slectionChanged', {
      detail: {
        selectedItems: selectedItems
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changedEvent);
  }

  protected _handleDocumentClick(e: any) {
    if ((!this.open) && e.path.some((el: any) => el === this) && (this != e.path[0])) {
      this.open = true;
    }
    else {
      this.open = false;
    }
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
