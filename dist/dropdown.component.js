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
import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dropdownStyles from './dropdown.styles';
import template from './dropdown.template';
import { Menu } from '@spectrum/sp-menu';
import { Button } from '@spectrum/sp-button';
import { Popover } from '@spectrum/sp-popover';
import { DropdownItem } from '@spectrum/sp-dropdownitem';
let Dropdown = class Dropdown extends Base {
    constructor() {
        super(...arguments);
        this.displayedItem = '';
        this.open = false;
        this.menu = [];
        this.disabled = false;
        this.thumbnails = false;
        this.quiet = false;
        this.error = false;
        this.multilist = false;
        this.width = false;
    }
    updateSelected() {
        const items = this.getItems();
        const selected = items
            .filter((element) => !element.separator)
            .find((element) => element.selected);
        if (selected) {
            this.displayedItem = selected.text;
        }
        else if (items.length > 0) {
            this.displayedItem = items[0].text;
            items[0].selected = true;
        }
        this.requestUpdate();
    }
    firstUpdated() {
        this.updateSelected();
    }
    getItems() {
        return this.myslot
            .assignedNodes({ flatten: true })
            .filter((e) => (e instanceof DropdownItem));
    }
    handleSlotClick(e) {
        const currentElement = e.path.filter((e) => (e instanceof DropdownItem));
        if (currentElement[0].disabled) {
            return;
        }
        this.displayedItem = currentElement[0].text;
        if (this.multilist) {
            currentElement[0].selected = !currentElement[0].selected;
        }
        else {
            currentElement[0].selected = true;
            this.getItems()
                .filter((item) => item.text !== currentElement[0].text)
                .forEach((item) => {
                item.selected = false;
            });
        }
    }
    handleSlotchange() {
        this.updateSelected();
    }
    render() {
        return template.call(this);
    }
};
Dropdown.componentStyles = [Menu.componentStyles, ...Button.componentStyles, ...Popover.componentStyles, dropdownStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Dropdown.prototype, "displayedItem", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Dropdown.prototype, "open", void 0);
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], Dropdown.prototype, "menu", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Dropdown.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Dropdown.prototype, "thumbnails", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Dropdown.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Dropdown.prototype, "error", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Dropdown.prototype, "multilist", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Dropdown.prototype, "width", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], Dropdown.prototype, "myslot", void 0);
Dropdown = __decorate([
    customElement('sp-dropdown')
], Dropdown);
export { Dropdown };
//# sourceMappingURL=dropdown.component.js.map