/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    afterRender: function (component, helper) {
        helper.lib.interactive.addDomEvents(component);

        //add title when there's ellipsis
        var label = component.get("v.label");
        if (label) {
            var innerLabel = component.find("label");
            if (innerLabel) {
                var innerLabelElement = innerLabel.getElement();
                if (innerLabelElement && innerLabelElement.offsetWidth < innerLabelElement.scrollWidth) {
                    component.getElement().title = label;
                }
            }
        }
        return this.superAfterRender();
    }
})// eslint-disable-line semi