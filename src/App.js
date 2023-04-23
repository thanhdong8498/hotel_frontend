import { createTheme, ThemeProvider } from "@mui/material";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlertComponent from "./components/AlertComponent/AlertComponent";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";

function App() {
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
