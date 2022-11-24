import React, {useMemo} from "react";
import DisabledItem from "./DisabledItem";
import {Option} from "./type";
import {useSelectContext} from "./SelectProvider";
import {COLORS, DEFAULT_THEME, THEME_DATA} from "../constants";

interface ItemProps {
    item: Option,
    primaryColor: string
}

const Item: React.FC<ItemProps> = ({item, primaryColor}) => {
    const {value, handleValueChange, formatOptionLabel} = useSelectContext();

    const isSelected = useMemo(() => {
        return value !== null && !Array.isArray(value) && value.value === item.value;
    }, [item.value, value]);

    const textHoverColor = useMemo(() => {
        // @ts-ignore
        return COLORS.includes(primaryColor) ? THEME_DATA.textHover[primaryColor] : THEME_DATA.textHover[DEFAULT_THEME];
    }, [primaryColor]);

    const bgColor = useMemo(() => {
        // @ts-ignore
        return COLORS.includes(primaryColor) ? THEME_DATA.bg[primaryColor] : THEME_DATA.bg[DEFAULT_THEME];
    }, [primaryColor]);

    const bgHoverColor = useMemo(() => {
        // @ts-ignore
        return COLORS.includes(primaryColor) ? THEME_DATA.bgHover[primaryColor] : THEME_DATA.bgHover[DEFAULT_THEME];
    }, [primaryColor]);

    return (
        <>
            {formatOptionLabel ? (
                <>
                    {formatOptionLabel(item)}
                </>
            ) : (
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
                            className={`block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${isSelected ? `text-white ${bgColor}` : `text-gray-500 ${bgHoverColor} ${textHoverColor}` }`}
                        >
                            {item.label}
                        </li>
                    )}
                </>
            )}
        </>
    );
};

export default Item;