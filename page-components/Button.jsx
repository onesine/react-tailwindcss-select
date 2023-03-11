const Button = ({ children, icon = null, active = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`transition duration-75 flex items-center space-x-2 ${
                active ? "shadow bg-white" : ""
            } py-1.5 lg:py-2 rounded-lg px-2 lg:px-3 text-xs lg:text-sm text-gray-600 font-bold`}
        >
            {icon !== null && icon === "eyes" && (
                <svg
                    className={`w-4 h4 lg:w-5 lg:h-5 ${active ? "text-blue-500" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                </svg>
            )}

            {icon !== null && icon === "code" && (
                <svg
                    className={`w-4 h4 lg:w-5 lg:h-5 ${active ? "text-blue-500" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                </svg>
            )}

            <span className={`${active ? "text-gray-700" : "text-gray-500"}`}>{children}</span>
        </button>
    );
};

export default Button;
