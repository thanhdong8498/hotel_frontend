import { Box, Divider, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";

function OrderPage() {
    const [userOrder, setUserOrder] = useState([]);
    useEffect(() => {
        async function getUserOrder() {
            const orders = await axios.get("/api/order/user");

            setUserOrder(orders.data);
        }
        getUserOrder();
    }, []);
    console.log(userOrder);
    const orderList = userOrder.map((item, index) => {
        return (
            <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0" }}
                key={index}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "20%",
                        textAlign: "center",
                        fontSize: "1.6rem",
                        fontWeight: "600",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={`${process.env.REACT_APP_HOST_URL}${item.cover}`}
                        alt=""
                        style={{ width: "100%", userSelect: "none", marginBottom: "6px" }}
                    />
                    <h2>{item.cuisineName}</h2>
                </div>
                <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                    {item.promotionalPrice.toLocaleString()}đ
                </Typography>
                <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                    {item.quantity}
                </Typography>
                <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                    {item.totalPrice.toLocaleString()}đ
                </Typography>
                <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                    {item.isAccept === true ? "Đã xác nhận" : "Chưa xác nhận"}
                    <br />
                    {item.isDelivery === true ? "Đã giao" : "Chưa giao"}
                </Typography>
            </div>
        );
    });

    return (
        <ContainerComponent>
            <Box sx={{ padding: "0 30px", backgroundColor: "transparent" }}>
                <Paper
                    sx={{
                        padding: "10px",
                        margin: "20px 0",
                        backgroundColor: "#f7f8f9",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2 style={{ textTransform: "uppercase", fontSize: "1.8rem" }}>
                        Danh sách gọi món ăn, đồ uống của bạn
                    </h2>
                </Paper>
            </Box>
            <Box sx={{ padding: "0 30px", backgroundColor: "transparent" }}>
                <Paper
                    sx={{
                        padding: "10px",
                        margin: "20px 0",
                        backgroundColor: "#fff",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",

                            textTransform: "uppercase",
                            marginBottom: "6px",
                        }}
                    >
                        <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                            Thông tin sản phẩm
                        </Typography>
                        <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                            Đơn giá
                        </Typography>
                        <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                            Số lượng
                        </Typography>
                        <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                            Thành tiền
                        </Typography>
                        <Typography sx={{ width: "20%", textAlign: "center", fontSize: "1.6rem", fontWeight: "600" }}>
                            Trạng thái
                        </Typography>
                    </div>
                    <Divider variant="fullWidth" sx={{ width: "100%" }} orientation="horizontal" />
                    {orderList}
                </Paper>
            </Box>
        </ContainerComponent>
    );
}

export default OrderPage;
