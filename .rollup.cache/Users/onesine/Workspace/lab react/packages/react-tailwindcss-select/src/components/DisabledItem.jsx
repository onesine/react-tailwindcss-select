import React, { useContext } from "react";
import { SelectContext } from "./SelectProvider";
const DisabledItem = ({ children }) => {
    const { classNames } = useContext(SelectContext);
    return (<div className={classNames && classNames.listDisabledItem
            ? classNames.listDisabledItem
            : "px-2 py-2 cursor-not-allowed truncate text-gray-400 select-none"}>
            {children}
        </div>);
};
export default DisabledItem;
//# sourceMappingURL=DisabledItem.jsx.map