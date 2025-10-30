import { createContext } from "react";

export const shopContext = createContext()

const shopContextProvider = () =>{
    const value = {

    }

    return (
        <shopContext.Provider>
            {}
        </shopContext.Provider>
    )
}