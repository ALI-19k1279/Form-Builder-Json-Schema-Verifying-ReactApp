import {Form} from '@formio/react'
import './App.css';

function App() {
  const form = {
    "components": [
      {
        "label": "username",
        "labelPosition": "top",
        "placeholder": "",
        "description": "",
        "tooltip": "",
        "prefix": "",
        "suffix": "",
        "widget": {
          "type": "input"
        },
        "inputMask": "",
        "displayMask": "",
        "allowMultipleMasks": false,
        "customClass": "",
        "tabindex": "",
        "autocomplete": "",
        "hidden": false,
        "hideLabel": false,
        "showWordCount": false,
        "showCharCount": false,
        "mask": false,
        "autofocus": false,
        "spellcheck": true,
        "disabled": false,
        "tableView": true,
        "modalEdit": false,
        "multiple": false,
        "persistent": true,
        "inputFormat": "plain",
        "protected": false,
        "dbIndex": false,
        "case": "",
        "truncateMultipleSpaces": false,
        "encrypted": false,
        "redrawOn": "",
        "clearOnHide": true,
        "customDefaultValue": "",
        "calculateValue": "",
        "calculateServer": false,
        "allowCalculateOverride": false,
        "validateOn": "change",
        "validate": {
          "required": false,
          "pattern": "",
          "customMessage": "",
          "custom": "",
          "customPrivate": false,
          "json": "",
          "minLength": 5,
          "maxLength": 10,
          "strictDateValidation": false,
          "multiple": false,
          "unique": false
        },
        "unique": false,
        "errorLabel": "",
        "errors": "",
        "key": "username",
        "tags": [],
        "properties": {},
        "conditional": {
          "show": null,
          "when": null,
          "eq": "",
          "json": ""
        },
        "customConditional": "",
        "logic": [],
        "attributes": {},
        "overlay": {
          "style": "",
          "page": "",
          "left": "",
          "top": "",
          "width": "",
          "height": ""
        },
        "type": "textfield",
        "input": true,
        "refreshOn": "",
        "dataGridLabel": false,
        "addons": [],
        "inputType": "text",
        "id": "esvp8qm",
        "defaultValue": ""
      },
      {
        "label": "Submit",
        "action": "submit",
        "showValidations": false,
        "theme": "primary",
        "size": "md",
        "block": false,
        "leftIcon": "",
        "rightIcon": "",
        "shortcut": "",
        "description": "",
        "tooltip": "",
        "customClass": "btn btn-warning2",
        "tabindex": "",
        "disableOnInvalid": true,
        "hidden": false,
        "autofocus": false,
        "disabled": false,
        "tableView": false,
        "modalEdit": false,
        "key": "submit",
        "tags": [],
        "properties": {},
        "conditional": {
          "show": null,
          "when": null,
          "eq": "",
          "json": ""
        },
        "customConditional": "",
        "logic": [],
        "attributes": {},
        "overlay": {
          "style": "",
          "page": "",
          "left": "",
          "top": "",
          "width": "",
          "height": ""
        },
        "type": "button",
        "input": true,
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": null,
        "protected": false,
        "unique": false,
        "persistent": false,
        "clearOnHide": true,
        "refreshOn": "",
        "redrawOn": "",
        "dataGridLabel": true,
        "labelPosition": "top",
        "errorLabel": "",
        "hideLabel": false,
        "dbIndex": false,
        "customDefaultValue": "",
        "calculateValue": "",
        "calculateServer": false,
        "widget": {
          "type": "input"
        },
        "validateOn": "change",
        "validate": {
          "required": false,
          "custom": "",
          "customPrivate": false,
          "strictDateValidation": false,
          "multiple": false,
          "unique": false
        },
        "allowCalculateOverride": false,
        "encrypted": false,
        "showCharCount": false,
        "showWordCount": false,
        "allowMultipleMasks": false,
        "addons": [],
        "id": "erxdjg7",
        "saveOnEnter": false
      }
    ]
  }
  return (
    <div className="App">
       <Form form={form}/>
    </div>
  );
}

export default App;
