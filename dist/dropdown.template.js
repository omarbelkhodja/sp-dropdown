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
import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@spectrum/sp-popover';
import '@spectrum/sp-button';
import '@spectrum/sp-icon';
export default function template() {
    var classes1 = {
        'is-invalid': this.error,
        'is-selected': this.open,
        'spectrum-FieldButton--quiet': this.quiet
    };
    var classes2 = {
        'is-disabled': this.disabled,
        'spectrum-Dropdown--quiet': this.quiet
    };
    const selectThumbnails = [];
    if (this.thumbnails) {
        selectThumbnails.push(html `
            <sp-icon name="ThumbnailSmall" style="width: 20px; height: 20px; display: inline-block; margin-right: 8px;"></sp-icon>
        `);
    }
    const selectError = [];
    if (this.error) {
        selectError.push(html `
            <sp-icon name="AlertSmall" class="spectrum-Icon--sizeS"></sp-icon>
        `);
    }
    return html `
    <div class='spectrum-Dropdown ${classMap(classes2)}' style="${styleMap({ width: this.width + 'px', minWidth: this.width + 'px' })}">
        <sp-popover style="${styleMap({ width: this.width + 'px', minWidth: this.width + 'px' })}" ?disabled=${this.disabled}>
        <button
            slot="dropdown-trigger"
            ?disabled="${this.disabled}"
            class="spectrum-FieldButton spectrum-Dropdown-trigger ${classMap(classes1)}" 
            aria-haspopup="listbox"
            style="${styleMap({ width: this.width + 'px', minWidth: this.width + 'px' })}">
            ${selectThumbnails}
            <span class="spectrum-Dropdown-label">${this.displayedItem}</span>
                ${selectError}
            <sp-icon name="ChevronDownMedium" class="spectrum-Dropdown-icon"></sp-icon>
        </button>
        <ul slot="dropdown-content" class="spectrum-Menu" role="listbox" style="${styleMap({ width: Number(this.width) - 20 + 'px', overflow: 'inherit' })}">
            <slot @click="${this.handleSlotClick}" @slotchange="${this.handleSlotchange}"></slot>
        </ul>
        </sp-popover>
    </div>
        `;
}
//# sourceMappingURL=dropdown.template.js.map