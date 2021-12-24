
import { createContext, useState } from "react"; /* Le pedimos a react usar createContext */

const ThemeContext = createContext() /*Es muy recomendable ponerle el mismo nombre de la funcionalidad, esto lo vamos a usar con useContext*/

let initialTheme = "light" //Uso un valor inicial al useState

const Provider= ({children})=>{ //Como parametro desestructuro los hijos
    const [theme,setTheme] = useState(initialTheme) //Este useState lo voy a usar para pedir y cambiar el dato global
    const chgTheme = ()=>{ //Funcion que me va a cambiar el valor global
        setTheme(theme==="light" ? "dark" : "light")
        document.body.classList[theme==="light" ? "add" : "remove"]("dark")
    }
    const data = {theme,chgTheme} //Lo que le voy a pasar a los hijos lo pongo en un objeto. Cada uno de los valores que quiero pasar globalmente lo pongo en data
    //Provider significa que voy a proporcionar unos valores a todos los hijos que envuelva
    //Accedo a la propiedad del contexto que cree Provider y le paso la data a los hijos
    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}
export {Provider} //Exporto el provider para envolver los elementos hijos
export default ThemeContext //El themecontext lo voy a usar en los componentes hijos para reconocer el contexto