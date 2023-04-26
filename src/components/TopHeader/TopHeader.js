import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HotelState } from "../MyContext/MyContext";
import { logOutSuccess } from "../../redux/slices/authSlice";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SeacrchModel from "../SearchModal/SeacrchModel";

function TopHeader() {
    
    const navigate = useNavigate();
    const isLogined = useSelector((state) => state.auth.isLogined);

    const StyledAppBar = styled(AppBar)({
        backgroundColor: "var(--primary-color)",
        color: "var(--white)",
        display: "flex",
        alignItems: "center",
    });
    const NavItem = styled("span")({
        fontSize: "1.4rem",
        lineHeight: "1.8rem",
        textTransform: "unset",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
    });
    const Separate = styled("div")({
        borderLeft: "1px solid #fff",
        height: "1.4rem",
        margin: "0 26px",
    });
    const StyledTypography = styled(Typography)({
        flex: "1",
        fontSize: "1.4rem",
    });
    const BookingButton = styled(Button)({
        backgroundColor: "var(--primary-color)",
        padding: "0",
        position: "absolute",
        flex: "2",
        top: "0",
        width: "105px",
        alignSelf: "flex-start",
        fontSize: "1.8rem",
        fontWeight: "bold",
        textTransform: "unset",
        zIndex: "100",
        "&:hover": {
            backgroundColor: "var(--primary-color)",
            filter: "brightness(1.1)",
        },
    });
    const { setAlert } = HotelState();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        dispatch(logOutSuccess());
        navigate("/login");
        window.scrollTo(0, 0);
        setAlert({
            open: true,
            message: "Đã đăng xuất tài khoản thành công!",
            type: "success",
        });
    };
    return (
        <StyledAppBar position="static">
            <ContainerComponent>
                <Toolbar
                    style={{ minHeight: "3.4rem", justifyContent: "flex-end" }}
                    sx={{ paddingRight: { md: "130px", lg: "155px" } }}
                >
                    <StyledTypography sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                        Chào mừng bạn đến với Bean Hotel!
                    </StyledTypography>
                    {!isLogined && (
                        <>
                            <Link to={"/register"}>
                                <NavItem>Đăng ký</NavItem>
                            </Link>
                            <Separate />
                            <Link to={"/login"}>
                                <NavItem>Đăng nhập</NavItem>
                            </Link>
                            <Separate />
                        </>
                    )}
                    {isLogined && (
                        <>
                            <NavItem
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={handleLogout}
                            >
                                Đăng xuất
                            </NavItem>
                            <Separate />
                            <Link to={"/account"}>
                                <NavItem>Tài khoản</NavItem>
                            </Link>
                            <Separate />
                        </>
                    )}

                    {isLogined && (
                        <>
                            <Link to={"/order"}>
                                <NavItem sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                                    <ShoppingCartIcon style={{ fontSize: "20px", marginRight: "6px" }} />
                                    Order
                                </NavItem>
                            </Link>
                            <Separate sx={{ display: { xs: "none", sm: "none", md: "block" } }} />
                        </>
                    )}
                    {isLogined && (
                        <>
                            <Link to={"/booking"}>
                                <NavItem sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                                    <MeetingRoomIcon style={{ fontSize: "20px", marginRight: "6px" }} />
                                    Phòng đã đặt
                                </NavItem>
                            </Link>
                            <Separate sx={{ display: { xs: "none", sm: "none", md: "block" } }} />
                        </>
                    )}
                    <SeacrchModel />
                    <BookingButton
                        variant="contained"
                        size="large"
                        sx={{
                            flexGrow: "1",
                            display: { xs: "none", md: "block", md2: "block", lg: "block" },
                            height: { md: "93px", md2: "101px", lg: "114px" },
                            right: { md: "0px", lg: "30px" },
                        }}
                    >
                        <Link
                            to={"/room"}
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <EventNoteIcon sx={{ width: "44px", height: "44px" }} />
                            Đặt phòng
                        </Link>
                    </BookingButton>
                </Toolbar>
            </ContainerComponent>
        </StyledAppBar>
    );
}

export default TopHeader;
