const Header = ({children}) => {
    return (
        <div className="flex justify-end mb-4">
            <div className="bg-slate-100 p-0.5 rounded-lg flex items-center">
                {children}
            </div>
        </div>
    );
};

export default Header;