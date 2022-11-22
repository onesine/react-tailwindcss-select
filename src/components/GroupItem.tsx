import React from "react";
import {GroupOption} from "./type";
import Item from "./Item";

interface GroupItemProps {
    item: GroupOption,
    primaryColor: string
}

const GroupItem: React.FC<GroupItemProps> = ({item, primaryColor}) => {
    return (
        <>
            {item.options.length > 0 && (
                <>
                    <div className={`pr-2 py-2 cursor-default select-none truncate font-bold text-gray-700`}>
                        {item.label}
                    </div>

                    {item.options.map((item, index) => (
                        <Item
                            primaryColor={primaryColor}
                            key={index}
                            item={item}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default GroupItem;