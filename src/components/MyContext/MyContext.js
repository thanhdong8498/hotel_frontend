import { createContext, useContext, useState } from "react";

const Hotel = createContext();
function MyContext({ children }) {
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });

    return <Hotel.Provider value={{ alert, setAlert }}>{children}</Hotel.Provider>;
}

export default MyContext;
export const HotelState = () => {
    return useContext(Hotel);
};
