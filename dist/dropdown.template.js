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
    var classes3 = {
        'is-disabled': this.disabled,
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
            <slot @click="${this.handleSlotChange}"></slot>
        </ul>
        </sp-popover>
    </div>
        `;
}
//# sourceMappingURL=dropdown.template.js.map