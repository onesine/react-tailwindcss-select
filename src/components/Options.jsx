import React, {useState, useMemo, useCallback} from "react";
import Item from "./Item.jsx";
import SearchInput from "./SearchInput.jsx";
import DisabledItem from "./DisabledItem.jsx";

const Options = ({options, value, onChoseOption, searchInputPlaceholder = "", isSearchable, isMultiple, name = "", noOptionsMessage}) => {
    const [inputValue, setInputValue] = useState("");

    const filterByText = useCallback(() => {
        return options.filter(item => {
            return item.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
        });
    }, [inputValue, options]);

    const removeValues = useCallback((array) => {
        if (!isMultiple) {
            return array;
        }
        if (value === null) {
            return array;
        }
        const valueId = value.map(item => item.value);
        return array.filter(item => !valueId.includes(item.value));
    }, [isMultiple, value]);

    const handleSearchInputChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    let filterOptions = useMemo(() => {
        return filterByText()
    }, [filterByText]);
    filterOptions = useMemo(() => {
        return removeValues(filterOptions);
    }, [filterOptions, removeValues]);

    return (
        <div className="absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700">
            {isSearchable && (
                <SearchInput
                    name={name}
                    value={inputValue}
                    placeholder={searchInputPlaceholder}
                    onChange={handleSearchInputChange}
                />
            )}

            <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full">
                <div className="px-2.5">
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
        </div>
    );
};

export default Options;