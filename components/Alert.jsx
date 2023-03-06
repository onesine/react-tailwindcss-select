const Alert = ({children, title, type = "info"}) => {
    return (
        <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-2 md:px-4 py-3 shadow-md" role="alert">
            <div className="flex">
                <div className="py-0.5 md:py-1">
                    {type === "info" && (
                        <svg className="h-5 md:h-6 h-5 md:w-6 text-blue-500 mr-2 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                </div>

                <div>
                    <p className="font-bold">{title}</p>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Alert;