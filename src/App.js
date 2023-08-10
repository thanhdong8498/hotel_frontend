import { createTheme, ThemeProvider } from "@mui/material";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlertComponent from "./components/AlertComponent/AlertComponent";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { HotelState } from "./components/MyContext/MyContext";
const ENDPOINT = process.env.REACT_APP_HOST_URL;
export const socket = io(ENDPOINT);
function App() {
    const notificationSound = new Audio(process.env.PUBLIC_URL + "/audio/notification.mp3");
    const userId = useSelector((state) => state.auth.user._id);
    socket.on("connect", () => {
        console.log("Connected to server");
        console.log("Socket ID:", socket.id);
        if (userId) {
            socket.emit("updateSocketId", userId);
        }
    });
    const { setAlert } = HotelState();
    socket.on("deliverySuccessfully", (message) => {
        notificationSound.play();
        setAlert({
            open: true,
            message: message,
            type: "success",
            origin: { vertical: "top", horizontal: "right" },
        });
    });

    const theme = createTheme({
        typography: {
            fontSize: 24,
        },
        breakpoints: {
            values: {
                xs: 0,
                ms: 393,
                sm: 767,
                md: 991,
                md2: 1025,
                lg: 1199,
                xl: 1536,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Router>
                    <Routes>
                        {routes.map((route) => {
                            const Page = route.page;
                            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                    <AlertComponent />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
