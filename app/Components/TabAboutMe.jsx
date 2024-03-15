import React from "react";

const TabAboutMe = ({ active, selectTab, children }) => {
    const buttonClass = () => {
        return active ? "border-b border-[#0abdc6] text-white" : "text-[#ADB7BE]";
    };

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClass()}`}>
                {children}
            </p>
        </button>
    );
};

export default TabAboutMe;