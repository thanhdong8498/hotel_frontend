import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";

function AccountPage() {
    const firstName = useSelector((state) => state.auth.user.firstName);
    const lastName = useSelector((state) => state.auth.user.lastName);
    const phone = useSelector((state) => state.auth.user.phone);
    const email = useSelector((state) => state.auth.user.email);

    return (
        <ContainerComponent>
            <Box sx={{ margin: "100px 0" }}>
                <Typography variant="h4" sx={{ fontSize: "2rem", marginBottom: "30px" }}>
                    Thông tin tài khoản
                </Typography>
                <Divider />
                <Typography variant="h4" sx={{ fontSize: "1.8rem", margin: "30px 0" }}>
                    <strong>Họ và tên: </strong>
                    {lastName + " " + firstName}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "1.8rem", margin: "30px 0" }}>
                    <strong>Email: </strong>
                    {email}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "1.8rem", margin: "30px 0" }}>
                    <strong>Số điện thoại: </strong>
                    {phone}
                </Typography>
            </Box>
        </ContainerComponent>
    );
}

export default AccountPage;
