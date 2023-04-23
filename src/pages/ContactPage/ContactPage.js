import {
    Avatar,
    Button,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { deepOrange } from "@mui/material/colors";
import RestoreIcon from "@mui/icons-material/Restore";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { HotelState } from "../../components/MyContext/MyContext";

function ContactPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState();
    const firstName = useSelector((state) => state.auth.user.firstName);
    const lastName = useSelector((state) => state.auth.user.lastName);
    const emailAuth = useSelector((state) => state.auth.user.email);
    useEffect(() => {
        if (firstName && lastName && emailAuth) {
            setFullName(lastName + " " + firstName);
            setEmail(emailAuth);
        }
    }, [firstName, lastName, emailAuth]);
    const [message, setMessage] = useState();
    const Contact = styled(ListItemText)({
        ".MuiListItemText-primary": {
            fontSize: "1.6rem",
            color: "#fff",
        },
        ".MuiListItemText-primary:hover": {
            color: deepOrange[500],
        },
    });
    const StyledListItemText = styled(ListItemText)({
        ".MuiListItemText-primary": {
            fontSize: "1.6rem",
            color: "#fff",
        },
    });
    const { setAlert } = HotelState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("/api/contact/create", {
            fullName,
            email,
            message,
        });
        if (response.status === 200) {
            setAlert({
                open: true,
                message: "Gửi thông tin liên hệ thành công!",
                type: "success",
            });
            setMessage("");
        }
    };

    return (
        <ContainerComponent>
            <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={10}>
                    <Box
                        sx={{
                            padding: "70px 0px 40px 100px",
                            margin: "20px 0px 50px",
                            boxShadow: "10px 0px 40px 0px #b4b4b4",
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item lg={6}>
                                <Typography sx={{ fontSize: "1.6rem", marginBottom: "12px" }}>
                                    Thông tin liên hệ
                                </Typography>
                                <Typography sx={{ fontSize: "1.6rem", marginBottom: "20px" }}>
                                    Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ
                                    trả lời bạn sau khi nhận được.
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        value={fullName}
                                        label="Họ và tên"
                                        sx={{ width: "100%", marginBottom: "20px" }}
                                        variant="standard"
                                        onChange={(e) => {
                                            setFullName(e.target.value);
                                        }}
                                        required
                                    />
                                    <TextField
                                        value={email}
                                        label="Email"
                                        sx={{ width: "100%", marginBottom: "20px" }}
                                        variant="standard"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        required
                                    />
                                    <TextField
                                        label="Nội dung"
                                        sx={{ width: "100%" }}
                                        multiline
                                        variant="standard"
                                        rows={1}
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                        }}
                                        required
                                    />
                                    <Button type="submit" sx={{ width: "100%", marginTop: "20px" }} variant="contained">
                                        gửi thông tin liên hệ
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item lg={6}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        backgroundImage: "url('/images/bg_footer_1.png')",
                                        backgroundSize: "cover",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {" "}
                                    <div>
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: "2.2rem",
                                                fontWeight: "600",
                                                margin: "8px 0 0 12px",
                                            }}
                                        >
                                            Thông tin
                                        </Typography>
                                        <List
                                            sx={{
                                                bgcolor: "transparent",
                                            }}
                                        >
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <LocationOnIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <StyledListItemText primary="772 Điện Biên Phủ, Phường 1, Bình Thạnh, TP.HCM" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <CallIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <a href="tel:+8482847974">
                                                    <Contact primary="0982.847.974"></Contact>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <EmailIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <StyledListItemText primary="support@bean_hotel.vn" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <RestoreIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <StyledListItemText primary="Mở cửa 24/24" />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={1}></Grid>
                <Grid item lg={12} sx={{ margin: "20px 0" }}>
                    <Box sx={{ width: "100%" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.217475812755!2d106.71729528496013!3d10.794648831427116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a9eaf5a43b%3A0x1ecf860d2e567770!2zNzcyIMSQLiDEkGnhu4duIEJpw6puIFBo4bunLCBQaMaw4budbmcgMSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1682163352441!5m2!1svi!2sus"
                            width="100%"
                            height="450"
                            title="map"
                            style={{ border: "0" }}
                            allowfullscreen
                        ></iframe>
                    </Box>
                </Grid>
            </Grid>
        </ContainerComponent>
    );
}
export default ContactPage;
