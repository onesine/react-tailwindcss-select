import React from 'react'

interface Props {
    children: JSX.Element | string
}

const DisabledItem: React.FC<Props> = ({children}) => {
    return (
        <div className={`px-2 py-2 cursor-not-allowed truncate text-gray-400`}>
            {children}
        </div>
    );
};

export default DisabledItem;