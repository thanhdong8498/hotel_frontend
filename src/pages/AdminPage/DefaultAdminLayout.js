import { Box } from "@mui/material";
import NavComponent from "./NavComponent";
import Sidenav from "./Sidenav";

function DefaultAdminLayout({ children }) {
    return (
        <>
            <NavComponent />
            <Box height={64} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                {children}
            </Box>
        </>
    );
}

export default DefaultAdminLayout;
