const SelectContainer = ({children}) => {
    return (
        <div className="w-full mt-10 md:mt-14 flex items-center justify-center">
            <div className="w-full md:w-3/4 lg:w-4/6 xl:w-2/4">
                {children}
            </div>
        </div>
    );
};

export default SelectContainer;