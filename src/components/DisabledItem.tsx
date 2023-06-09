import React, { useContext } from "react";

import { SelectContext } from "./SelectProvider";
import { DEFAULT_CLASSNAMES } from "../constants";

interface DisabledItemProps {
    children: JSX.Element | string;
}

const DisabledItem: React.FC<DisabledItemProps> = ({ children }) => {
    const { classNames } = useContext(SelectContext);
    return (
        <div
            className={
                classNames && classNames.listDisabledItem
                    ? classNames.listDisabledItem(DEFAULT_CLASSNAMES.listDisabledItem)
                    : DEFAULT_CLASSNAMES.listDisabledItem
            }
        >
            {children}
        </div>
    );
};

export default DisabledItem;
