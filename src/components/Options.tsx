import React, {useCallback, useMemo} from "react";
import Item from "./Item";
import DisabledItem from "./DisabledItem";
import {Option} from "./type";

interface Props {
    list: Option[],
    noOptionsMessage: string,
    text: string,
    isMultiple: boolean,
    value: Option | Option[] | null,
}

const Options: React.FC<Props> = ({list, noOptionsMessage, text, isMultiple, value}) => {
    const filterByText = useCallback(() => {
        return list.filter(item => {
            return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    }, [text, list]);

    const removeValues = useCallback((array: Option[]) => {
        if (!isMultiple) {
            return array;
        }
        if (Array.isArray(value)) {
            const valueId = value.map(item => item.value);
            return array.filter(item => !valueId.includes(item.value));
        }
        return array;
    }, [isMultiple, value]);

    let filterResult = useMemo(() => {
        return removeValues(filterByText());
    }, [filterByText, removeValues]);

    return (
        <div role="options" className="max-h-72 px-2.5 overflow-y-auto overflow-y-scroll">
            {filterResult.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                />
            ))}

            {filterResult.length === 0 && (
                <DisabledItem>
                    {noOptionsMessage}
                </DisabledItem>
            )}
        </div>
    );
};

export default Options;