import React from "react";
import Item from "./Item";
import { useSelectContext } from "./SelectProvider";
const GroupItem = ({ item, primaryColor }) => {
    const { classNames, formatGroupLabel } = useSelectContext();
    return (React.createElement(React.Fragment, null, item.options.length > 0 && (React.createElement(React.Fragment, null,
        formatGroupLabel ? (React.createElement(React.Fragment, null, formatGroupLabel(item))) : (React.createElement("div", { className: classNames && classNames.listGroupLabel
                ? classNames.listGroupLabel
                : "pr-2 py-2 cursor-default select-none truncate font-bold text-gray-700" }, item.label)),
        item.options.map((item, index) => (React.createElement(Item, { primaryColor: primaryColor, key: index, item: item })))))));
};
export default GroupItem;
//# sourceMappingURL=GroupItem.js.map