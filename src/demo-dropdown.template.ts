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
import { DemoDropdown } from './demo-dropdown.component';

import '@spectrum/sp-dropdown';
import '@spectrum/sp-dropdown';
import '@spectrum/sp-button';

import '@spectrum/sp-container';
import '@spectrum/sp-textfield';


export default function template(this: DemoDropdown) {
  return html`
      <div>
      <sp-dropdown width="100">
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
        </sp-dropdown>
      </div>
      <sp-group style="display: flex;">
        <sp-dropdown width="100">
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
        </sp-dropdown>
        <sp-textfield>
        </sp-textfield>
        <sp-dropdown width="100">
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
        </sp-dropdown>        
        <sp-dropdown width="100">
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
        </sp-dropdown>
      </sp-group>
  `;
}
