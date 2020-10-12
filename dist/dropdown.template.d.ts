import { Dropdown } from './dropdown.component';
import '@spectrum/sp-popover';
import '@spectrum/sp-button';
import '@spectrum/sp-icon';
export declare type MenuElement = {
    id: String;
    text: String;
    role: String;
    disabled: Boolean;
};
export default function template(this: Dropdown): import("lit-element").TemplateResult;
