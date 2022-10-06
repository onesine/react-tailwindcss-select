import React, {useCallback, useMemo} from "react";
import Item from "./Item";
import DisabledItem from "./DisabledItem";
import {Option, Options as ListOption} from "./type";
import GroupItem from "./GroupItem";

interface OptionsProps {
    list: ListOption,
    noOptionsMessage: string,
    text: string,
    isMultiple: boolean,
    value: Option | Option[] | null,
}

const Options: React.FC<OptionsProps> = ({list, noOptionsMessage, text, isMultiple, value}) => {
    const filterByText = useCallback(() => {
        const filterItem = (item: Option) => {
            return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
        };

        let result = list.map(item => {
            if ("options" in item) {
                return  {
                    label: item.label,
                    options: item.options.filter(filterItem)
                }
            }
            return item;
        });

        result = result.filter(item => {
            if ("options" in item) {
                return  item.options.length > 0;
            }
            return filterItem(item);
        });

        return result;
    }, [text, list]);

    const removeValues = useCallback((array: ListOption) => {
        if (!isMultiple) {
            return array;
        }

        if (Array.isArray(value)) {
            const valueId = value.map(item => item.value);

            const filterItem = (item: Option) => !valueId.includes(item.value);

            let newArray = array.map(item => {
                if ("options" in item) {
                    return {
                        label: item.label,
                        options: item.options.filter(filterItem)
                    }
                }
                return item;
            });

            newArray =  newArray.filter(item => {
                if ("options" in item) {
                    return item.options.length > 0;
                } else {
                    return filterItem(item);
                }
            });

            return newArray;
        }
        return array;
    }, [isMultiple, value]);

    let filterResult = useMemo(() => {
        return removeValues(filterByText());
    }, [filterByText, removeValues]);

    return (
        <div role="options" className="max-h-72 overflow-y-auto overflow-y-scroll">
            {filterResult.map((item, index) => (
                <React.Fragment key={index}>
                    {"options" in item ? (
                        <>
                            <div className="px-2.5">
                                <GroupItem
                                    item={item}
                                />
                            </div>

                            {index + 1 < filterResult.length && (
                                <hr className="my-1"/>
                            )}
                        </>
                    ) : (
                        <div className="px-2.5">
                            <Item
                                item={item}
                            />
                        </div>
                    )}
                </React.Fragment>
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