import React from 'react'

const SearchInput = ({placeholder = "", value = "", onChange, name = ""}) => {
    return (
        <div className="relative px-2.5 py-1">
            <svg className="absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
                className="w-full py-2 pl-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:ring-0 focus:border-gray-200"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus={true}
                name={name}
            />
        </div>
    );
};

export default SearchInput;