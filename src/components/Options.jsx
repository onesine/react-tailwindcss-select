import React, {useState, useMemo, useCallback} from "react";
import Item from "./Item.jsx";
import SearchInput from "./SearchInput.jsx";
import DisabledItem from "./DisabledItem.jsx";

const Options = ({options, value, onChoseOption, searchInputPlaceholder = "", isSearchable, isMultiple, noOptionsMessage}) => {
    const [inputValue, setInputValue] = useState("");

    const filterByText = useCallback(() => {
        return options.filter(item => {
            return item.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
        });
    }, [inputValue, options]);

    const removeValues = useCallback((array) => {
        if (!isMultiple || value === null) {
            return array;
        }
        const valueId = value.map(item => item.value);
        return array.filter(item => !valueId.includes(item.value));
    }, [isMultiple, value]);

    let filterOptions = useMemo(() => {
        return removeValues(filterByText());
    }, [filterByText, removeValues]);

    return (
        <div tabIndex="-1" role="options" className="absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700">
            {isSearchable && (
                <SearchInput
                    value={inputValue}
                    placeholder={searchInputPlaceholder}
                    onChange={e => setInputValue(e.target.value)}
                />
            )}

            <div className="max-h-72 px-2.5 overflow-y-auto overflow-y-scroll">
                {filterOptions.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        value={value}
                        onSelect={onChoseOption}
                    />
                ))}

                {filterOptions.length === 0 && (
                    <DisabledItem>
                        {noOptionsMessage}
                    </DisabledItem>
                )}
            </div>
        </div>
    );
};

export default Options;