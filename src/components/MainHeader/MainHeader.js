import { AppBar, Button, styled, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import RoomMenuComponent from "../RoomMenuComponent/RoomMenuComponent";
import CuisineMenuComponent from "../CuisineMenuComponent/CuisineMenuComponent";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
function MainHeader() {
    const getColor = (curr) => {
        if (window.location.pathname === curr) {
            return "var(--primary-color)";
        }
    };
    const StyledAppBar = styled(AppBar)({
        backgroundColor: "var(--white)",
    });

    const Logo = styled("img")({
        height: "57px",
        marginRight: "24px",
    });

    const StyledButton = styled(Button)({
        color: "#000",
        textTransform: "unset",
        backgroundColor: "transparent",
        fontSize: "1.5rem",
        fontWeight: "500",
        "&:hover": {
            backgroundColor: "transparent",
            color: "var(--primary-color)",
        },
        "&:hover .MuiPaper-root": {
            display: "block",
            transition: "all 2s",
        },
        ".MuiMenuItem-root:hover": {
            color: "var(--primary-color)",
            margin: "auto",
            height: "100%",
        },
    });
    const RightWrapper = styled("div")({
        display: "flex",
        alignItems: "center",
    });

    return (
        <StyledAppBar position="static">
            <ContainerComponent>
                <Toolbar
                    sx={{
                        paddingLeft: { xs: "10px", md: "10px", lg: "24px" },
                        minHeight: { md: "50px", md2: "67px", lg: "80px" },
                        justifyContent: { xs: "space-between", sm: "space-between", md: "unset" },
                        paddingRight: { xs: "0", sm: "14px", md: "14px", md2: "14px" },
                    }}
                >
                    <Link to={"/"}>
                        <Logo src="/images/logo.png" />
                    </Link>
                    <Link to={"/"}>
                        <StyledButton
                            style={{ color: getColor("/") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Trang chủ
                        </StyledButton>
                    </Link>
                    <Link to={"/about"}>
                        <StyledButton
                            style={{ color: getColor("/about") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Về chúng tôi
                        </StyledButton>
                    </Link>
                    <StyledButton
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                            padding: { md: "7px 8px", lg: "7px 15px" },
                        }}
                        disableRipple
                        endIcon={<KeyboardArrowDownIcon />}
                        style={{ color: getColor("/room") }}
                    >
                        <Link style={{ fontSize: "1.5rem", color: "inherit" }} to={"/room"}>
                            Phòng
                        </Link>
                        <RoomMenuComponent />
                    </StyledButton>
                    <StyledButton
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                            padding: { md: "7px 8px", lg: "7px 15px" },
                        }}
                        disableRipple
                        endIcon={<KeyboardArrowDownIcon />}
                        style={{ color: getColor("/cuisine") }}
                    >
                        <Link style={{ fontSize: "1.5rem", color: "inherit" }} to={"/cuisine"}>
                            Ẩm thực
                        </Link>
                        <CuisineMenuComponent />
                    </StyledButton>

                    <Link to={"/contact"}>
                        <StyledButton
                            style={{ color: getColor("/contact") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Liên hệ
                        </StyledButton>
                    </Link>
                    <Link to={"/gallery"}>
                        <StyledButton
                            style={{ color: getColor("/gallery") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Thư viện ảnh
                        </StyledButton>
                    </Link>
                    <RightWrapper
                        sx={{
                            visibility: { sm: "visible", md: "hidden" },
                        }}
                    >
                        <Link to={"/cart"}>
                            <ShoppingCartIcon
                                sx={{
                                    fill: "black",
                                    width: "26px",
                                    height: "24px",
                                }}
                            />
                        </Link>

                        <LeftDrawer />
                    </RightWrapper>
                </Toolbar>
            </ContainerComponent>
        </StyledAppBar>
    );
}

export default MainHeader;
