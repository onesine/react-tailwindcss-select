import React from 'react'

interface DisabledItemProps {
    children: JSX.Element | string
}

const DisabledItem: React.FC<DisabledItemProps> = ({children}) => {
    return (
        <div className={`px-2 py-2 cursor-not-allowed truncate text-gray-400 select-none`}>
            {children}
        </div>
    );
};

export default DisabledItem;