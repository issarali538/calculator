import React,{useContext} from 'react';
import {ThemeContext} from './ThemContext';

function ThemSwitcher() {
    const {theme,themes,toggleTheme} = useContext(ThemeContext);
    return ( 
        <>
            <button onClick={toggleTheme}>
                { ( theme === themes.light )?  "Light Theme" : "dark Theme"}
            </button>
        </>
     );
}

export default ThemSwitcher;