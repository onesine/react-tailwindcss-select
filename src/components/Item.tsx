import React, {useMemo} from "react";
import DisabledItem from "./DisabledItem";
import {Option} from "./type";
import {useSelectContext} from "./SelectProvider";

interface Props {
    item: Option
}

const Item: React.FC<Props> = ({item}) => {
    const {value, handleValueChange} = useSelectContext();

    const isSelected = useMemo(() => {
        return value !== null && !Array.isArray(value) && value.value === item.value;
    }, [item.value, value]);

    return (
        <>
            {item.disabled ? (
                <DisabledItem>
                    {item.label}
                </DisabledItem>
            ) : (
                <li
                    aria-selected={isSelected}
                    role={"option"}
                    onClick={() => handleValueChange(item)}
                    className={`block transition duration-200 px-2 py-2 cursor-pointer truncate rounded ${isSelected ? 'text-white bg-blue-500' : 'text-gray-500 hover:bg-blue-100 hover:text-blue-500' }`}
                >
                    {item.label}
                </li>
            )}
        </>
    );
};

export default Item;