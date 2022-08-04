import React from "react";
import DisabledItem from "./DisabledItem.jsx";

const Item = ({item, value, onSelect}) => {
    return (
        <>
            {item.disabled ? (
                <DisabledItem>
                    {item.label}
                </DisabledItem>
            ) : (
                <div onClick={() => onSelect(item)} className={`transition duration-200 px-2 py-2 cursor-pointer rounded ${(value !== null && value.value === item.value) ? 'text-white bg-blue-500' : 'text-gray-500 hover:bg-blue-100 hover:text-blue-500' }`}>
                    {item.label}
                </div>
            )}
        </>
    );
};

export default Item;