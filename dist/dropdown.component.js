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
        super();
        this.displayedItem = "";
        this.open = false;
        this.menu = [];
        this.disabled = false;
        this.thumbnails = false;
        this.quiet = false;
        this.error = false;
        this.multilist = false;
        this.width = false;
        //document.addEventListener('click', this._handleDocumentClick.bind(this));
    }
    firstUpdated() {
        let selectable = this.getSteps()
            .filter((element) => element.separator == false)
            .find((element) => element.selected == true);
        if (selectable) {
            this.displayedItem = selectable.text;
        }
        else {
            this.displayedItem = this.getSteps()[0].text;
        }
    }
    getSteps() {
        return this.slot
            .assignedNodes({ flatten: true })
            .filter((e) => (e instanceof DropdownItem));
    }
    handleSlotChange(e) {
        let currentElement = e.path.filter((e) => (e instanceof DropdownItem));
        let selectedItems = [];
        if (this.slot) {
            const items = this.getSteps();
            if (this.multilist) {
                items.forEach((item) => {
                    if (item.selected) {
                        selectedItems.push(item.text);
                    }
                });
                if (selectedItems.length > 0) {
                    this.displayedItem = selectedItems[0];
                }
                else {
                    this.displayedItem = items[0].text;
                }
            }
            else {
                if (currentElement[0].selected) {
                    this.displayedItem = currentElement[0].text;
                    selectedItems.push(currentElement[0].text);
                    items
                        .filter((item) => item.text != currentElement[0].text)
                        .forEach((item) => {
                        item.selected = false;
                    });
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
    _handleDocumentClick(e) {
        if ((!this.open) && e.path.some((el) => el === this) && (this != e.path[0])) {
            this.open = true;
        }
        else {
            this.open = false;
        }
    }
    render() {
        return template.call(this);
    }
};
Dropdown.componentStyles = [Menu.componentStyles, Button.componentStyles, Popover.componentStyles, dropdownStyles];
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
], Dropdown.prototype, "slot", void 0);
Dropdown = __decorate([
    customElement('sp-dropdown'),
    __metadata("design:paramtypes", [])
], Dropdown);
export { Dropdown };
//# sourceMappingURL=dropdown.component.js.map