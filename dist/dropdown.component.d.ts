import { Base } from '@spectrum/sp-base';
import { DropdownItem } from '@spectrum/sp-dropdownitem';
export declare type MenuElement = {
    id: String;
    text: String;
    role: String;
    disabled: Boolean;
};
export declare type NestableMenuElement = MenuElement | {
    [k: string]: MenuElement;
};
export declare class Dropdown extends Base {
    static componentStyles: (import("lit-element").CSSResult | import("lit-element").CSSResult[])[];
    displayedItem: string;
    open: boolean;
    menu: MenuElement[];
    disabled: boolean;
    thumbnails: boolean;
    quiet: boolean;
    error: boolean;
    multilist: boolean;
    width: boolean;
    private slot;
    constructor();
    protected firstUpdated(): void;
    protected getSteps(): DropdownItem[];
    protected handleSlotChange(e: any): void;
    protected _handleDocumentClick(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-dropdown': Dropdown;
    }
}
