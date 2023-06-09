import React, { forwardRef, useContext } from "react";

import { SearchIcon } from "./Icons";
import { SelectContext } from "./SelectProvider";
import { DEFAULT_CLASSNAMES } from "../constants";

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
    { placeholder = "", value = "", onChange, name = "" },
    ref
) {
    const { classNames } = useContext(SelectContext);
    return (
        <div
            className={
                classNames && classNames.searchContainer
                    ? classNames.searchContainer(DEFAULT_CLASSNAMES.searchContainer)
                    : DEFAULT_CLASSNAMES.searchContainer
            }
        >
            <SearchIcon
                className={
                    classNames && classNames.searchIcon
                        ? classNames.searchIcon(DEFAULT_CLASSNAMES.searchIcon)
                        : DEFAULT_CLASSNAMES.searchIcon
                }
            />
            <input
                ref={ref}
                className={
                    classNames && classNames.searchBox
                        ? classNames.searchBox(DEFAULT_CLASSNAMES.searchBox)
                        : DEFAULT_CLASSNAMES.searchBox
                }
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
});

export default SearchInput;
