import React from "react";

import Item from "./Item";
import { useSelectContext } from "./SelectProvider";
import { GroupOption } from "./type";
import { DEFAULT_CLASSNAMES } from "../constants";

interface GroupItemProps {
    item: GroupOption;
    primaryColor: string;
}

const GroupItem: React.FC<GroupItemProps> = ({ item, primaryColor }) => {
    const { classNames, formatGroupLabel } = useSelectContext();

    return (
        <>
            {item.options.length > 0 && (
                <>
                    {formatGroupLabel ? (
                        <>{formatGroupLabel(item)}</>
                    ) : (
                        <div
                            className={
                                classNames?.listGroupLabel
                                    ? classNames.listGroupLabel(DEFAULT_CLASSNAMES.listGroupLabel)
                                    : DEFAULT_CLASSNAMES.listGroupLabel
                            }
                        >
                            {item.label}
                        </div>
                    )}

                    {item.options.map((item, index) => (
                        <Item primaryColor={primaryColor} key={index} item={item} />
                    ))}
                </>
            )}
        </>
    );
};

export default GroupItem;
