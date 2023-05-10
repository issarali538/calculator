import { createContext , useState} from "react";

const ThemeContext = createContext();
const themes = {
    light : {
        backgroundColor : "white",
        color : "black"
    },
    dark : {
        backgroundColor : "black",
        color:"white"
    }
}
function Theme({children}) {
    const [theme,setTheme] = useState(themes.light);
    const toggleTheme = function(){
        setTheme(theme => (theme === themes.light)? themes.dark : themes.light);
    }
    return ( 
        <>
            <ThemeContext.Provider value={{theme,themes,toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
     );
}

export default Theme;
export { ThemeContext };