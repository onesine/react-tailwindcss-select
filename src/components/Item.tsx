import React, { useCallback, useMemo } from "react";

import { COLORS, DEFAULT_THEME, THEME_DATA } from "../constants";

import DisabledItem from "./DisabledItem";
import { useSelectContext } from "./SelectProvider";
import { Option } from "./type";

interface ItemProps {
    item: Option;
    primaryColor: string;
    searchInputValue?: string;
    noHighLigthLabel: boolean;
}

const Item: React.FC<ItemProps> = ({ item, primaryColor, searchInputValue, noHighLigthLabel }) => {
    const { classNames, value, handleValueChange, formatOptionLabel } = useSelectContext();

    const isSelected = useMemo(() => {
        return value !== null && !Array.isArray(value) && value.value === item.value;
    }, [item.value, value]);

    const textHoverColor = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return THEME_DATA.textHover[primaryColor as keyof typeof THEME_DATA.textHover];
        }
        return THEME_DATA.textHover[DEFAULT_THEME];
    }, [primaryColor]);

    const bgColor = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return THEME_DATA.bg[primaryColor as keyof typeof THEME_DATA.bg];
        }
        return THEME_DATA.bg[DEFAULT_THEME];
    }, [primaryColor]);

    const bgHoverColor = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return THEME_DATA.bgHover[primaryColor as keyof typeof THEME_DATA.bgHover];
        }
        return THEME_DATA.bgHover[DEFAULT_THEME];
    }, [primaryColor]);

    const getItemClass = useCallback(() => {
        const baseClass =
            "block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded";
        const selectedClass = isSelected
            ? `text-white ${bgColor}`
            : `text-gray-500 ${bgHoverColor} ${textHoverColor}`;

        return classNames && classNames.listItem
            ? classNames.listItem({ isSelected })
            : `${baseClass} ${selectedClass}`;
    }, [bgColor, bgHoverColor, classNames, isSelected, textHoverColor]);

    const getLabel = useCallback(() => {
        if (!noHighLigthLabel && searchInputValue) {
            const start = item.label.toUpperCase().indexOf(searchInputValue.toUpperCase());
            const end = start + searchInputValue.length;
            return item.label.split("").map((label, idx) => {
                if (idx >= start && idx < end) {
                    return (
                        <span key={idx} className={`font-bold text-${primaryColor}-500`}>
                            {label}
                        </span>
                    );
                } else {
                    return <span key={idx}>{label}</span>;
                }
            });
        } else {
            return <span>{item.label}</span>;
        }
    }, [item.label, noHighLigthLabel, primaryColor, searchInputValue]);

    return (
        <>
            {formatOptionLabel ? (
                <div onClick={() => handleValueChange(item)}>
                    {formatOptionLabel({ ...item, isSelected })}
                </div>
            ) : (
                <>
                    {item.disabled ? (
                        <DisabledItem>{item.label}</DisabledItem>
                    ) : (
                        <li
                            aria-selected={isSelected}
                            role={"option"}
                            onClick={() => handleValueChange(item)}
                            className={getItemClass()}
                        >
                            {getLabel()}
                        </li>
                    )}
                </>
            )}
        </>
    );
};

export default Item;
