import React from "react";

export interface Option {
    value: string;
    label: string;
    disabled?: boolean;
    isSelected?: boolean;
}

export interface GroupOption {
    label: string;
    options: Option[];
}

export type Options = Array<Option | GroupOption>;

export interface ClassNames {
    menuButton?: (defaultClassName: string, value?: { isDisabled?: boolean }) => string;
    menu?: (defaultClassName: string) => string;
    tagItem?: (defaultClassName: string, value?: { item?: Option; isDisabled?: boolean }) => string;
    tagItemText?: (defaultClassName: string) => string;
    tagItemIconContainer?: (defaultClassName: string) => string;
    tagItemIcon?: (defaultClassName: string) => string;
    list?: (defaultClassName: string) => string;
    listGroupLabel?: (defaultClassName: string) => string;
    listItem?: (defaultClassName: string, value?: { isSelected?: boolean }) => string;
    listDisabledItem?: (defaultClassName: string) => string;
    ChevronIcon?: (value?: { open?: boolean }) => string;
    searchContainer?: (defaultClassName: string) => string;
    searchBox?: (defaultClassName: string) => string;
    searchIcon?: (defaultClassName: string) => string;
    closeIcon?: (defaultClassName: string) => string;
}

export type SelectValue = Option | Option[] | null;

export interface SelectProps {
    options: Options;
    value: SelectValue;
    onChange: (value: SelectValue) => void;
    onSearchInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    isMultiple?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
    isDisabled?: boolean;
    loading?: boolean;
    menuIsOpen?: boolean;
    searchInputPlaceholder?: string;
    noOptionsMessage?: string;
    primaryColor: string;
    formatGroupLabel?: ((data: GroupOption) => JSX.Element) | null;
    formatOptionLabel?: ((data: Option) => JSX.Element) | null;
    classNames?: ClassNames;
}
