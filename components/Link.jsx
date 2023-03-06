export const DarkLink = ({children, url}) => {
    return (
        <a target="_blank" rel="noreferrer" className="text-slate-100 hover:underline active:text-blue-700 font-semibold" href={url}>{children}</a>
    );
};

export const LightLink = ({children, url}) => {
    return (
        <a target="_blank" rel="noreferrer" className="hover:underline active:text-blue-700 font-semibold" href={url}>{children}</a>
    );
};