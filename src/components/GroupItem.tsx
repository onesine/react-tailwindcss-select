import React from "react";
import {GroupOption} from "./type";
import Item from "./Item";

interface GroupItemProps {
    item: GroupOption
}

const GroupItem: React.FC<GroupItemProps> = ({item}) => {
    return (
        <>
            {item.options.length > 0 && (
                <>
                    <div className={`pr-2 py-2 cursor-default select-none truncate text-gray-400 font-bold text-gray-700`}>
                        {item.label}
                    </div>

                    {item.options.map((item, index) => (
                        <Item
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