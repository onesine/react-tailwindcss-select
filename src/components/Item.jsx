import React from 'react'
import DisabledItem from "./DisabledItem.jsx";

const Item = ({item, value, onSelect}) => {
    return (
        <>
            {item.disabled ? (
                <DisabledItem>
                    {item.label}
                </DisabledItem>
            ) : (
                <li
                    aria-selected={(value !== null && value.value === item.value)}
                    role={"option"}
                    onClick={() => onSelect(item)}
                    className={`block transition duration-200 px-2 py-2 cursor-pointer truncate rounded ${(value !== null && value.value === item.value) ? 'text-white bg-blue-500' : 'text-gray-500 hover:bg-blue-100 hover:text-blue-500' }`}
                >
                    {item.label}
                </li>
            )}
        </>
    );
};

export default Item;