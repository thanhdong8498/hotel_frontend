import DefaultAdminLayout from "./DefaultAdminLayout";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

import { useEffect, useState } from "react";
import axios from "axios";
import { HotelState } from "../../components/MyContext/MyContext";

function AdminBookingPage() {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        async function getBookingList() {
            const response = await axios.get("api/booking/list");
            setBooking(response.data);
        }
        getBookingList();
    }, [booking]);
    const { setAlert } = HotelState();

    const handleCheckout = async (id) => {
        const response = await axios.put(`api/booking/checkout/${id}`);
        if (response.status === 200) {
            setAlert({
                open: true,
                message: "Đã thực hiện trả phòng thành công!",
                type: "success",
            });
            setBooking([]);
        }
    };
    console.log(booking);
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: "250",
        },
        {
            field: "fullname",
            headerName: "Họ và tên",
            width: 200,
        },
        {
            field: "phone",
            headerName: "Số điện thoại",
            width: 200,
        },
        {
            field: "receiveDate",
            headerName: "Ngày nhận",
            width: 200,
        },
        {
            field: "checkoutDate",
            headerName: "Ngày trả",
            width: 200,
        },
        {
            field: "roomNo",
            headerName: "Phòng số",
            width: 300,
        },
        {
            field: "createAt",
            headerName: "Ngày đặt",
            width: "250",
        },
        {
            field: "summaryPrice",
            headerName: "Tiền phòng",
            width: 250,
        },
        {
            field: "isCheckedOut",
            headerName: "Trạng thái",
            width: 250,
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "action",
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            handleCheckout(params.id);
                        }}
                        variant="contained"
                        disabled={params.row.isCheckedOut === "Đã trả phòng"}
                    >
                        Trả phòng
                    </Button>
                );
            },
            width: 250,
        },
    ];
    const rows = booking.map((item) => ({
        id: item._id,
        fullname: item.fullname,
        phone: item.phone,
        receiveDate: moment(item.receiveDate).format("DD/MM/YYYY"),
        checkoutDate: moment(item.checkoutDate).format("DD/MM/YYYY"),
        roomNo: item.roomNo,
        summaryPrice: item.summaryPrice.toLocaleString() + "đ",
        createAt: moment(item.createAt).format("DD/MM/YYYY"),
        isCheckedOut: item.isCheckedOut === false ? "Chưa trả phòng" : "Đã trả phòng",
    }));
    return (
        <DefaultAdminLayout>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ padding: "20px", fontSize: "2.4rem" }}>
                        Danh sách đặt phòng
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

export default AdminBookingPage;
