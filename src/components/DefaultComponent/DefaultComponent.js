import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function DefaultComponent({ children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        async function getUserLogin() {
            try {
                const response = await axios.get("api/auth/me");
                const user = response.data;
                dispatch(loginSuccess({ ...user }));
            } catch (error) {
                console.log(error);
            }
        }
        getUserLogin();
    }, []);
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultComponent;
