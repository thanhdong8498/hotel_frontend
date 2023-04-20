import { Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { HotelState } from "../../components/MyContext/MyContext";
import jwtdecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";

const StyledBox = styled(Box)({
    boxShadow: "0px 1px 69.16px 6.84px rgba(20,64,51,0.05)",
    width: "100%",
    borderRadius: "10px",
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
});
const StyledTextField = styled("input")`
    height: 45px;
    padding: 0 20px;
    color: #333;
    line-height: 45px;
    border: 1px solid #e1e1e1 !important;
    box-shadow: none;
    background: #fff;
    margin-bottom: 15px;
    width: 100%;
    outline: none;
    border: initial;
    font-size: 1.4rem;
`;
const Title = styled("h1")({
    fontWeight: "600",
    letterSpacing: "0",
    fontSize: "2.6rem",
    position: "relative",
    margin: "0",
    paddingBottom: "20px",
    marginBottom: "10px",
    textTransform: "uppercase",
    "&::after": {
        content: '" "',
        width: "100%",
        height: "5px",
        background: "#e5e9ed",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "0 auto",
        borderRadius: "3px",
    },
    "&::before": {
        content: '" "',
        width: "50px",
        height: "5px",
        background: "var(--primary-color)",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "1",
        margin: "0 auto",
        borderRadius: "3px",
    },
});

const Button = styled("button")`
    background: var(--primary-color);
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    text-transform: uppercase;
    border: 1px solid #cd9a2b;
    line-height: 42px;
    width: 100%;
    height: 45px;
`;

const StyledSpan = styled("span")({
    color: "#000",
    fontSize: "1.6rem",
    marginBottom: "20px",
    textAlign: "right",
    width: "100%",
    paddingRight: "12px",
    "&:hover": {
        color: "var(--primary-color)",
    },
});

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const { setAlert } = HotelState();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("api/auth/login", {
            email,
            password,
        });

        // save user login to store
        if (response.status === 200) {
            const accessToken = response.data.accessToken;
            const userLogin = jwtdecode(accessToken);
            // console.log(userLogin);
            // localStorage.setItem("firstName", userLogin.firstName);
            // localStorage.setItem("lastName", userLogin.lastName);
            // localStorage.setItem("role", userLogin.role);
            // localStorage.setItem('isLogin',)
            dispatch(
                loginSuccess({
                    ...userLogin,
                })
            );

            // save jwt to local storage
            localStorage.setItem("accessToken", accessToken);
            //set alert when login success
            setAlert({
                open: true,
                message: "Đăng nhập công!",
                type: "success",
            });
            // navigate to admin or homepage
            if (userLogin.role === "admin" || userLogin.role === "subadmin") {
                navigate("/admin");
            } else navigate("/");
        } else if (response.status === 201) {
            setAlert({
                open: true,
                message: response.data,
                type: "error",
            });
        }
    };

    return (
        <section style={{ marginTop: "20px" }}>
            <ContainerComponent>
                <Grid container>
                    <Grid item xs={12} sm={3} md={4} md2={4} lg={4}></Grid>
                    <Grid item xs={12} sm={6} md={4} md2={4} lg={4}>
                        <StyledBox onSubmit={handleSubmit} component="form" autoComplete="off">
                            <Title>
                                <span style={{ color: "var(--primary-color)" }}>đăng nhập</span>
                            </Title>

                            <StyledTextField
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                autoComplete="false"
                                onChange={handleChangeEmail}
                            />

                            <StyledTextField
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                placeholder="Mật khẩu"
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                            />
                            <StyledSpan>
                                <Link style={{}} to={"/register"}>
                                    Đăng ký tại đây
                                </Link>
                            </StyledSpan>
                            <Button type="submit">Đăng nhập</Button>
                        </StyledBox>
                    </Grid>
                </Grid>
            </ContainerComponent>
        </section>
    );
}

export default Login;
