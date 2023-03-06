import React, { useCallback, useMemo } from "react";
import { COLORS, DEFAULT_THEME, THEME_DATA } from "../constants";
import DisabledItem from "./DisabledItem";
import { useSelectContext } from "./SelectProvider";
const Item = ({ item, primaryColor }) => {
    const { classNames, value, handleValueChange, formatOptionLabel } = useSelectContext();
    const isSelected = useMemo(() => {
        return value !== null && !Array.isArray(value) && value.value === item.value;
    }, [item.value, value]);
    const textHoverColor = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return THEME_DATA.textHover[primaryColor];
        }
        return THEME_DATA.textHover[DEFAULT_THEME];
    }, [primaryColor]);
    const bgColor = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return THEME_DATA.bg[primaryColor];
        }
        return THEME_DATA.bg[DEFAULT_THEME];
    }, [primaryColor]);
    const bgHoverColor = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return THEME_DATA.bgHover[primaryColor];
        }
        return THEME_DATA.bgHover[DEFAULT_THEME];
    }, [primaryColor]);
    const getItemClass = useCallback(() => {
        const baseClass = "block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded";
        const selectedClass = isSelected
            ? `text-white ${bgColor}`
            : `text-gray-500 ${bgHoverColor} ${textHoverColor}`;
        return classNames && classNames.listItem
            ? classNames.listItem({ isSelected })
            : `${baseClass} ${selectedClass}`;
    }, [bgColor, bgHoverColor, classNames, isSelected, textHoverColor]);
    return (<>
            {formatOptionLabel ? (<div onClick={() => handleValueChange(item)}>
                    {formatOptionLabel({ ...item, isSelected })}
                </div>) : (<>
                    {item.disabled ? (<DisabledItem>{item.label}</DisabledItem>) : (<li aria-selected={isSelected} role={"option"} onClick={() => handleValueChange(item)} className={getItemClass()}>
                            {item.label}
                        </li>)}
                </>)}
        </>);
};
export default Item;
//# sourceMappingURL=Item.jsx.map