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


export default function template(this: DemoDropdown) {
  return html`
    <sp-container>  
      <sp-rule medium label="Dropdown - Standard"></sp-rule>
      <sp-demo width="320">
        <pre>
        <sp-dropdown width="300">
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
          <sp-dropdownitem separator></sp-dropdownitem>
          <sp-dropdownitem text="Cameroon" disabled></sp-dropdownitem>
        </sp-dropdown>
        </pre>
      </sp-demo>
      <sp-rule medium label="Dropdown - Error"></sp-rule>
      <sp-demo width="320">
        <pre>
        <sp-dropdown width="300" error>
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
          <sp-dropdownitem separator></sp-dropdownitem>
          <sp-dropdownitem text="Cameroon" disabled></sp-dropdownitem>
        </sp-dropdown>
        </pre>
      </sp-demo>
      <sp-rule medium label="Dropdown - Disabled"></sp-rule>
      <sp-demo width="320">
        <pre>
        <sp-dropdown width="300" disabled>
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
          <sp-dropdownitem separator></sp-dropdownitem>
          <sp-dropdownitem text="Cameroon" disabled></sp-dropdownitem>
        </sp-dropdown>
        </pre>
      </sp-demo>
      <sp-rule medium label="Dropdown - Multilist"></sp-rule>
      <sp-demo width="320">
        <pre>
        <sp-dropdown width="300" multilist>
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
          <sp-dropdownitem separator></sp-dropdownitem>
          <sp-dropdownitem text="Cameroon" disabled></sp-dropdownitem>
        </sp-dropdown>
        </pre>
      </sp-demo>
      <sp-rule medium label="Dropdown - Thumbnails"></sp-rule>
      <sp-demo width="320">
        <pre>
        <sp-dropdown width="300" thumbnails>
          <sp-dropdownitem text="Brazil" thumbnails></sp-dropdownitem>
          <sp-dropdownitem text="Peru" thumbnails></sp-dropdownitem>
          <sp-dropdownitem text="Iceland" thumbnails></sp-dropdownitem>
          <sp-dropdownitem separator></sp-dropdownitem>
          <sp-dropdownitem text="Cameroon" disabled thumbnails></sp-dropdownitem>
        </sp-dropdown>
        </pre>
      </sp-demo>
      <sp-rule medium label="Dropdown - Quiet"></sp-rule>
      <sp-demo width="320">
        <pre>
        <sp-dropdown width="150" quiet>
          <sp-dropdownitem text="Brazil"></sp-dropdownitem>
          <sp-dropdownitem text="Peru"></sp-dropdownitem>
          <sp-dropdownitem text="Iceland"></sp-dropdownitem>
          <sp-dropdownitem separator></sp-dropdownitem>
          <sp-dropdownitem text="Cameroon" disabled></sp-dropdownitem>
        </sp-dropdown>
        </pre>
      </sp-demo>
    </sp-container>
  `;
}
