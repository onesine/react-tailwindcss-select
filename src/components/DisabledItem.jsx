import React from "react";

const DisabledItem = ({children}) => {
    return (
        <div className={`px-2 py-2 cursor-not-allowed rounded text-gray-400`}>
            {children}
        </div>
    );
};

export default DisabledItem;