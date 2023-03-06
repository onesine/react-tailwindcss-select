import React, { createContext, useContext, useMemo } from "react";
export const SelectContext = createContext({
    value: null,
    handleValueChange: selected => {
        console.log("selected:", selected);
    },
    formatGroupLabel: null,
    formatOptionLabel: null,
    classNames: undefined
});
export const useSelectContext = () => {
    return useContext(SelectContext);
};
const SelectProvider = ({ value, handleValueChange, otherData, children }) => {
    const store = useMemo(() => {
        return {
            value,
            handleValueChange,
            formatGroupLabel: otherData && typeof otherData.formatGroupLabel === "function"
                ? otherData.formatGroupLabel
                : null,
            formatOptionLabel: otherData && typeof otherData.formatOptionLabel === "function"
                ? otherData.formatOptionLabel
                : null,
            classNames: otherData?.classNames || undefined
        };
    }, [handleValueChange, otherData, value]);
    return <SelectContext.Provider value={store}>{children}</SelectContext.Provider>;
};
export default SelectProvider;
//# sourceMappingURL=SelectProvider.jsx.map