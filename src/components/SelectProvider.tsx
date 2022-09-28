import React, {createContext, useContext, useMemo} from "react";
import {Option} from "./type";

interface Store {
    value: Option | Option[] | null,
    handleValueChange: (selected: Option) => void,
}

interface Props {
    value: Option | Option[] | null,
    handleValueChange: (selected: Option) => void,
    children: JSX.Element
}

export const SelectContext = createContext<Store>({
    value: null,
    handleValueChange: (selected) => {}
});

export const useSelectContext = (): Store => {
    return useContext(SelectContext);
};

const SelectProvider: React.FC<Props> = ({value, handleValueChange, children}) => {
    const store = useMemo(() => {
        return {
            value,
            handleValueChange
        };
    }, [handleValueChange, value]);

    return (
        <SelectContext.Provider value={store}>
            {children}
        </SelectContext.Provider>
    );
};

export default SelectProvider;