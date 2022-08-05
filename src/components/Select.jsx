import React, {useState, useEffect, useCallback, useRef} from "react";
import PropTypes from 'prop-types';
import Spinner from "./Spinner.jsx";
import Options from "./Options.jsx";
import useOnClickOutside from "../hooks/use-onclick-outside.js";

const Select = ({options = [], value = null, onChange, placeholder="Select...", searchInputPlaceholder = "Search...", isMultiple = false, isClearable = true, isSearchable = true, isDisabled = false, loading = false, menuIsOpen = false, noOptionsMessage = "No results found"}) => {
    const [open, setOpen] = useState(menuIsOpen);
    const [listOption, setListOption] = useState(options);
    const ref = useRef();

    useEffect(() => {
        setListOption(options.map(item => {
            if ('disabled' in item)
                return item;
            return {
                ...item,
                disabled: false
            }
        }));
    }, [options]);

    const closeDropDown = useCallback(() => {
        if (open)
            setOpen(false);
    }, [open]);

    useOnClickOutside(ref, () => {
        closeDropDown();
    });

    const toggle = () => {
        if (!isDisabled) {
            setOpen(!open);
        }
    };

    const choseOption = useCallback((option) => {
        function update () {
            closeDropDown();
            onChange(!isMultiple ? option : (value === null ? [option] : [...value, option]));
        }
        if (value !== null) {
            if ( (option.value !== value.value)) {
                update();
            }
        } else {
            update();
        }
    }, [closeDropDown, isMultiple, onChange, value]);

    const closeOption = e => {
        e.stopPropagation();
        onChange(null);
    };

    const pressEnter = e => {
        if (e.code === "Enter")
            setOpen(!open);
    };

    const removeOptionOnValue = (e, option) => {
        if (!isDisabled) {
            e.stopPropagation();
            onChange(value.length > 1 ? value.filter(item => option.value !== item.value) : null);
        }
    };

    return (
        <div className="relative" ref={ref}>
            <div onFocus={toggle} onKeyDown={pressEnter} onClick={toggle} className={`flex items-stretch w-full h-full text-sm text-gray-500 border border-gray-300 rounded shadow-sm ring-2 ring-blue-500 transition duration-300 ${isDisabled ? 'bg-gray-200' : 'bg-white hover:border-gray-400'} ${!open ? 'ring-opacity-0' : ''}`}>
                <div className="w-full pl-2.5 py-2 pr-2 text-sm flex flex-wrap gap-1">
                    {!isMultiple ? (
                        value === null ? placeholder : value.label
                    ) : (
                        <>
                            {value === null ? (
                                placeholder
                            ) : (
                                value.map((item, index) => (
                                    <div className="bg-gray-200 rounded-sm flex space-x-1" key={index}>
                                        <div className="pl-1 text-gray-600">{item.label}</div>
                                        {!isDisabled && (
                                            <div onClick={e => removeOptionOnValue(e, item)} className={`flex items-center px-1 cursor-pointer rounded-r-sm hover:bg-red-200 hover:text-red-600`}>
                                                <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </>
                    )}
                </div>
                <div className="flex items-center">
                    {loading && (
                        <div className="mr-2">
                            <Spinner/>
                        </div>
                    )}

                    {((isClearable && value !== null && !isDisabled)) && (
                        <div className="px-1.5 py-1 cursor-pointer" onClick={closeOption}>
                            <svg className="w-5 h-5 p-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </div>
                    )}

                    <div className="py-1.5 h-full">
                        <div className="w-px h-full text-white bg-gray-300 text-opacity-0">.</div>
                    </div>

                    <div className="px-1.5 py-1">
                        <svg className={`transition duration-300 w-6 h-6 p-0.5 ${open ? 'transform rotate-90 text-gray-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </div>
                </div>
            </div>

            {(open && !isDisabled) && (
                <Options
                    isSearchable={isSearchable}
                    options={listOption}
                    value={value}
                    onChoseOption={choseOption}
                    searchInputPlaceholder={searchInputPlaceholder}
                    isMultiple={isMultiple}
                    noOptionsMessage={noOptionsMessage}
                />
            )}
        </div>
    );
};

const OptionsType = PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}));

Select.propTypes = {
    isClearable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isMultiple: PropTypes.bool,
    isSearchable: PropTypes.bool,
    loading: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
    noOptionsMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: OptionsType,
    placeholder: PropTypes.string,
    searchInputPlaceholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
        OptionsType,
    ]),
};

export default Select;