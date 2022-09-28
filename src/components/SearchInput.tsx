import React from 'react'
import {SearchIcon} from "./Icons";

interface Props {
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string
}

const SearchInput: React.FC<Props> = ({placeholder = "", value = "", onChange, name = ""}) => {
    return (
        <div className="relative py-1 px-2.5">
            <SearchIcon className="absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-gray-500"/>
            <input
                className="w-full py-2 pl-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default SearchInput;