import { useEffect, useRef, useState } from "react";
import DefaultAdminLayout from "./DefaultAdminLayout";
import { useReactToPrint } from "react-to-print";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import VNnum2words from "vn-num2words";

function AdminBillPage() {
    const get_day_of_time = (d1, d2) => {
        let ms1 = new Date(d1).getTime();
        let ms2 = new Date(d2).getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };
    const [detail, setDetail] = useState();
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        async function getDetails() {
            const details = await axios.get(`api/booking/detail/${id}`);
            setDetail(details.data);
        }
        getDetails();
    }, []);
    
    const handlePrint = useReactToPrint({
        content: () => componetRef.current,
        documentTitle: "Hóa đơn-" + id,
    });
    const componetRef = useRef();
    return (
        <DefaultAdminLayout>
            <Grid container spacing={2}>
                <Grid item lg={2}></Grid>
                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item lg={8}>
                    <Typography>Hóa đơn</Typography>
                    <Box
                        sx={{ outline: "1px solid #000", outlineOffset: "-10px", padding: "20px" }}
                        ref={componetRef}
                        style={{ width: "559px", height: "794px" }}
                    >
                        <Grid container columnSpacing={2} rowSpacing={0}>
                            <Grid item lg={4}>
                                <img style={{ width: "95%" }} src="/images/logo.png" alt="logo" />
                            </Grid>
                            <Grid item lg={4}>
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        textTransform: "uppercase",
                                        fontSize: "1.8rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    Hóa đơn giá trị gia tăng
                                </Typography>
                            </Grid>
                            <Grid item lg={4}>
                                <Typography
                                    sx={{
                                        fontSize: "1.6rem",
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    Số:{id}
                                </Typography>
                            </Grid>
                            <Grid item lg={12}>
                                <Divider sx={{ height: "2px", backgroundColor: "#000" }} />
                            </Grid>
                            <Grid sx={{ marginTop: "6px" }} item lg={12}>
                                <div style={{ display: "flex" }}>
                                    <Typography
                                        sx={{
                                            width: "25%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        ĐƠN VỊ BÁN HÀNG:
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: "75%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        CÔNG TY TNHH NHÀ HÀNG KHÁCH SẠN BEEN HOTEL
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Typography
                                        sx={{
                                            width: "25%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        MÃ SỐ THUẾ:
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: "75%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        0123456789
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Typography
                                        sx={{
                                            width: "25%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        SỐ ĐIỆN THOẠI:
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: "75%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        0982.847.974
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Typography
                                        sx={{
                                            width: "25%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        ĐỊA CHỈ:
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: "75%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        772 Điện Biên Phủ, Phường 1, Bình Thạnh, TP.HCM
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Typography
                                        sx={{
                                            width: "25%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        SỐ TÀI KHOẢN:
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: "75%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        109870685410 - VIETINBANK
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item lg={12}>
                                <Divider sx={{ height: "2px", backgroundColor: "#000", margin: "6px" }} />
                            </Grid>
                            <Grid item lg={12}>
                                <div style={{ display: "flex", width: "100%", margin: "6px" }}>
                                    <Typography
                                        sx={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        Họ tên người mua hàng: {detail && detail.fullname}
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", width: "100%", margin: "6px" }}>
                                    <Typography
                                        sx={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        Số điện thoại: {detail && detail.phone}
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", width: "100%", margin: "6px" }}>
                                    <Typography
                                        sx={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "500",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        Thời gian: {detail && moment(detail.checkoutDate).format("DD/MM/YYYY")}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item lg={12}>
                                <Divider sx={{ height: "2px", backgroundColor: "#000", margin: "6px" }} />
                            </Grid>
                            <Grid item lg={12}>
                                <table style={{ width: "100%", border: "1px solid #ccc", borderCollapse: "collapse" }}>
                                    <thead>
                                        <tr>
                                            <th
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    padding: "6px",
                                                }}
                                            >
                                                STT
                                            </th>
                                            <th
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    padding: "6px",
                                                }}
                                            >
                                                Tên hàng hóa, dịch vụ
                                            </th>
                                            <th
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    padding: "6px",
                                                }}
                                            >
                                                Số lượng
                                            </th>
                                            <th
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    padding: "6px",
                                                    width: "150px",
                                                }}
                                            >
                                                Đơn giá
                                            </th>
                                            <th
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    padding: "6px",
                                                    width: "200px",
                                                }}
                                            >
                                                Thành tiền
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                }}
                                            >
                                                1
                                            </td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                }}
                                            >
                                                {detail && detail.roomTitle}
                                            </td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                }}
                                            >
                                                {detail &&
                                                    detail.roomNo.length +
                                                        " Phòng x " +
                                                        (get_day_of_time(detail.receiveDate, detail.checkoutDate) + 1) +
                                                        " Đêm"}
                                            </td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                }}
                                            >
                                                {detail && detail.roomPrice.toLocaleString() + "đ"}
                                            </td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                }}
                                            >
                                                {detail && detail.summaryPrice.toLocaleString() + "đ"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "50px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "400px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    width: "150px",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "150px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                            <td
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderCollapse: "collapse",
                                                    fontSize: "1.2rem",
                                                    textAlign: "center",
                                                    padding: "6px",
                                                    width: "200px",
                                                    height: "25px",
                                                }}
                                            ></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Grid>
                            <Grid item sx={{ marginTop: "12px" }} lg={12}>
                                <Typography sx={{ fontWeight: "600", fontSize: "1.3rem" }}>
                                    Số tiền viết bằng chữ:{" "}
                                    <span style={{ textTransform: "capitalize" }}>
                                        {detail && VNnum2words(detail.summaryPrice) + " Đồng"}
                                    </span>
                                </Typography>
                            </Grid>
                            <Grid item lg={4}>
                                <p style={{ fontSize: "1.4rem", textAlign: "center", width: "100%" }}>
                                    Người mua hàng
                                    <br />
                                    <span style={{ fontSize: "1.2rem" }}>(Ký, ghi rõ họ tên)</span>
                                </p>
                            </Grid>
                            <Grid item lg={4}></Grid>
                            <Grid item lg={4}>
                                <p style={{ fontSize: "1.4rem", textAlign: "center", width: "100%" }}>
                                    Người bán hàng
                                    <br />
                                    <span style={{ fontSize: "1.2rem" }}>(Ký, ghi rõ họ tên)</span>
                                </p>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center" }} item lg={12}>
                    <Button variant="contained" onClick={handlePrint}>
                        In hóa đơn
                    </Button>
                </Grid>
            </Grid>
        </DefaultAdminLayout>
    );
}

export default AdminBillPage;
