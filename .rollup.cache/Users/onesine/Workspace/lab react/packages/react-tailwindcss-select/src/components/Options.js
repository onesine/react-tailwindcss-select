import React, { useCallback, useContext, useMemo } from "react";
import { DEFAULT_THEME } from "../constants";
import DisabledItem from "./DisabledItem";
import GroupItem from "./GroupItem";
import Item from "./Item";
import { SelectContext } from "./SelectProvider";
const Options = ({ list, noOptionsMessage, text, isMultiple, value, primaryColor = DEFAULT_THEME }) => {
    const { classNames } = useContext(SelectContext);
    const filterByText = useCallback(() => {
        const filterItem = (item) => {
            return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
        };
        let result = list.map(item => {
            if ("options" in item) {
                return {
                    label: item.label,
                    options: item.options.filter(filterItem)
                };
            }
            return item;
        });
        result = result.filter(item => {
            if ("options" in item) {
                return item.options.length > 0;
            }
            return filterItem(item);
        });
        return result;
    }, [text, list]);
    const removeValues = useCallback((array) => {
        if (!isMultiple) {
            return array;
        }
        if (Array.isArray(value)) {
            const valueId = value.map(item => item.value);
            const filterItem = (item) => !valueId.includes(item.value);
            let newArray = array.map(item => {
                if ("options" in item) {
                    return {
                        label: item.label,
                        options: item.options.filter(filterItem)
                    };
                }
                return item;
            });
            newArray = newArray.filter(item => {
                if ("options" in item) {
                    return item.options.length > 0;
                }
                else {
                    return filterItem(item);
                }
            });
            return newArray;
        }
        return array;
    }, [isMultiple, value]);
    const filterResult = useMemo(() => {
        return removeValues(filterByText());
    }, [filterByText, removeValues]);
    return (React.createElement("div", { role: "options", className: classNames && classNames.list ? classNames.list : "max-h-72 overflow-y-auto" },
        filterResult.map((item, index) => (React.createElement(React.Fragment, { key: index }, "options" in item ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "px-2.5" },
                React.createElement(GroupItem, { primaryColor: primaryColor || DEFAULT_THEME, item: item })),
            index + 1 < filterResult.length && React.createElement("hr", { className: "my-1" }))) : (React.createElement("div", { className: "px-2.5" },
            React.createElement(Item, { primaryColor: primaryColor || DEFAULT_THEME, item: item })))))),
        filterResult.length === 0 && React.createElement(DisabledItem, null, noOptionsMessage)));
};
export default Options;
//# sourceMappingURL=Options.js.map