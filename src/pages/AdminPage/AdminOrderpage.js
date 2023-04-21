import DefaultAdminLayout from "./DefaultAdminLayout";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

import { useEffect, useState } from "react";
import axios from "axios";
import { HotelState } from "../../components/MyContext/MyContext";

function AdminOrderpage() {
    const [flag, setFlag] = useState(false);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        async function getBookingList() {
            const response = await axios.get("api/order/list");
            setOrder(response.data);
        }
        getBookingList();
    }, [flag]);
    const { setAlert } = HotelState();

    const handleAccept = async (id) => {
        const response = await axios.put(`api/order/accept/${id}`);
        if (response.status === 200) {
            setAlert({
                open: true,
                message: "Đã chấp nhận thành công!",
                type: "success",
            });
            setFlag(!flag);
        }
    };
    const handleDeliveried = async (id) => {
        const response = await axios.put(`api/order/deliveried/${id}`);
        if (response.status === 200) {
            setAlert({
                open: true,
                message: "Đã xác nhận hoàn tất giao hàng!",
                type: "success",
            });
            setFlag(!flag);
        }
    };
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 250,
        },
        {
            field: "userName",
            headerName: "Họ và tên",
            width: 250,
        },
        {
            field: "phone",
            headerName: "Số điện thoại",
            width: 200,
        },

        {
            field: "createAt",
            headerName: "Thời gian đặt",
            width: 250,
        },
        {
            field: "cuisineName",
            headerName: "Tên đồ ăn",
            width: 250,
        },
        {
            field: "quantity",
            headerName: "Số lượng",
            width: 150,
        },
        {
            field: "totalPrice",
            headerName: "Tổng tiền",
            width: 250,
        },
        {
            field: "isAccept",
            headerName: "Trạng thái xác nhận",
            width: 250,
        },
        {
            field: "isDelivery",
            headerName: "Trạng thái giao hàng",
            width: 250,
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "action",
            renderCell: (params) => {
                return (
                    <>
                        <Button
                            sx={{ marginRight: "12px" }}
                            onClick={() => {
                                handleAccept(params.id);
                            }}
                            variant="contained"
                            disabled={params.row.isAccept === "Đã xác nhận"}
                        >
                            chấp nhận
                        </Button>
                        <Button
                            onClick={() => {
                                handleDeliveried(params.id);
                            }}
                            variant="contained"
                            disabled={
                                params.row.isDelivery === "Đã giao hàng" || params.row.isAccept === "Chưa xác nhận"
                            }
                        >
                            giao xong
                        </Button>
                    </>
                );
            },
            width: 250,
        },
    ];
    const rows = order.map((item) => ({
        id: item._id,
        userName: item.userName,
        phone: item.phone,
        createAt: moment(item.createAt).format("HH:MM DD/MM/YYYY"),
        cuisineName: item.cuisineName,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
        isAccept: item.isAccept === true ? "Đã xác nhận" : "Chưa xác nhận",
        isDelivery: item.isDelivery === true ? "Đã giao hàng" : "Chưa giao hàng",
    }));
    console.log(rows);

    return (
        <DefaultAdminLayout>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ padding: "20px", fontSize: "2.4rem" }}>
                        Danh sách đặt đồ ăn
                    </Typography>
                </div>
                <Divider />
                <Box sx={{ height: 754, width: "100%" }}>
                    <DataGrid
                        sx={{ fontSize: "1.6rem" }}
                        rows={rows}
                        columns={columns}
                        hideFooterSelectedRowCount
                        disableSelectionOnClick
                    />
                </Box>
            </Paper>
        </DefaultAdminLayout>
    );
}

export default AdminOrderpage;
