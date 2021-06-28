import React from 'react';

function ThemeSwitch(props) {
    return (
        <div className="toggleThemeContainer">
            <button className="toggleThemeBtn" onClick={props.toggleTheme}/>
        </div>
    )
};

export default ThemeSwitch;
