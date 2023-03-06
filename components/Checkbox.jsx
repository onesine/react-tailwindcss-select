const Checkbox = ({children, checked, onChange, id}) => {
    return (
        <label htmlFor={id} className="space-x-2 inline-block mr-2">
            <input
                id={id}
                checked={checked}
                onChange={onChange}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                type="checkbox"
            />
            <span className="text-xs font-semibold cursor-pointer">{children}</span>
        </label>
    );
};

export default Checkbox;