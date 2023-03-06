import React, { forwardRef, useContext } from "react";
import { SearchIcon } from "./Icons";
import { SelectContext } from "./SelectProvider";
const SearchInput = forwardRef(function SearchInput({ placeholder = "", value = "", onChange, name = "" }, ref) {
    const { classNames } = useContext(SelectContext);
    return (React.createElement("div", { className: classNames && classNames.searchContainer
            ? classNames.searchContainer
            : "relative py-1 px-2.5" },
        React.createElement(SearchIcon, { className: classNames && classNames.searchIcon
                ? classNames.searchIcon
                : "absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-gray-500" }),
        React.createElement("input", { ref: ref, className: classNames && classNames.searchBox
                ? classNames.searchBox
                : "w-full py-2 pl-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none", type: "text", placeholder: placeholder, value: value, onChange: onChange, name: name })));
});
export default SearchInput;
//# sourceMappingURL=SearchInput.js.map