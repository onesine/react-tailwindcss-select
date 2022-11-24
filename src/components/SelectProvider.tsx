import React, {createContext, useContext, useMemo} from "react";
import {GroupOption, Option} from "./type";

interface Store {
    value: Option | Option[] | null,
    handleValueChange: (selected: Option) => void,
    formatGroupLabel: ((data: GroupOption) => JSX.Element) | null
    formatOptionLabel: ((data: Option) => JSX.Element) | null
}

interface Props {
    value: Option | Option[] | null,
    handleValueChange: (selected: Option) => void,
    children: JSX.Element,
    otherData: {
        formatGroupLabel: ((data: GroupOption) => JSX.Element) | null
        formatOptionLabel: ((data: Option) => JSX.Element) | null
    }
}

export const SelectContext = createContext<Store>({
    value: null,
    handleValueChange: (selected) => {},
    formatGroupLabel: null,
    formatOptionLabel: null
});

export const useSelectContext = (): Store => {
    return useContext(SelectContext);
};

const SelectProvider: React.FC<Props> = ({value, handleValueChange, otherData, children}) => {
    const store = useMemo(() => {
        return {
            value,
            handleValueChange,
            formatGroupLabel: (otherData && typeof otherData.formatGroupLabel === "function") ? otherData.formatGroupLabel : null,
            formatOptionLabel: (otherData && typeof otherData.formatOptionLabel === "function") ? otherData.formatOptionLabel : null
        };
    }, [handleValueChange, otherData, value]);

    return (
        <SelectContext.Provider value={store}>
            {children}
        </SelectContext.Provider>
    );
};

export default SelectProvider;