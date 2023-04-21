import styled from "@emotion/styled";
import { Button, Divider, Grid, selectClasses, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, useParams } from "react-router-dom";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { HotelState } from "../../components/MyContext/MyContext";
import parse from "html-react-parser";

const TagItem = styled("li")({
    display: "inline-block",
    listStyleType: "none",
});
const StyledSpan = styled("span")({
    display: "inline-block",
    borderLeft: "3px solid #c40025",
    backgroundColor: "#e2e2e2",
    color: "#323c42",
    padding: "4px 9px",
    margin: "5px",
    fontSize: "1.6rem",
    position: "relative",
    "&::before": {
        left: "0",
        top: "10px",
        border: "solid transparent",
        content: '" "',
        height: "0",
        width: "0",
        position: "absolute",
        pointerEvent: "none",
        borderColor: "rgba(136, 183, 213, 0)",
        borderLeftColor: "#c40025",
        borderWidth: "4px",
    },
});
const StyledTextField = styled("input")`
    height: 45px;
    padding: 0 20px;
    color: #333;
    line-height: 45px;
    border: 1px solid #e1e1e1 !important;
    box-shadow: none;
    background: #fff;

    width: 100px;
    outline: none;
    border: initial;
    font-size: 1.4rem;
`;
function CuisineDetailPage() {
    const navigate = useNavigate();

    const params = useParams();
    const cuisineId = params.id;
    const { setAlert } = HotelState();

    useEffect(() => {
        async function getDetail() {
            const detail = await axios.get(`api/cuisine/detail/${cuisineId}`);
            setDetail(detail.data);
        }
        getDetail();
    }, []);
    const [quantity, setQuantity] = useState(0);
    const [detail, setDetail] = useState();

    const caroselItem =
        detail &&
        detail.images.map((item, index) => {
            return (
                <div key={index}>
                    <img
                        src={`${process.env.REACT_APP_HOST_URL}${item}`}
                        alt=""
                        style={{ width: "100%", userSelect: "none" }}
                    />
                </div>
            );
        });

    const handleOrder = async () => {
        const response = await axios.post("/api/order/create", {
            cuisineName: detail.title,
            promotionalPrice: detail.promotionalPrice,
            totalPrice: Number(quantity * detail.promotionalPrice),
            quantity: quantity,
            cuisineId: cuisineId,
        });
        if (response.status === 200) {
            setAlert({
                open: true,
                message: "Đã thực hiện trả phòng thành công!",
                type: "success",
            });
            navigate("/order");
        }
    };
    return (
        detail && (
            <ContainerComponent>
                <Grid
                    container
                    sx={{
                        padding: "12px 0",
                        width: "100%",
                    }}
                    spacing={2}
                >
                    <Grid item lg={6}>
                        <Carousel>{caroselItem}</Carousel>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h2">{detail && detail.title}</Typography>
                        <div style={{ marginTop: "20px", paddingLeft: "10px" }}>
                            <span
                                style={{
                                    fontSize: "2.4rem",
                                    fontWeight: "600",
                                    color: "var(--primary-color)",
                                }}
                            >
                                {detail && detail.promotionalPrice.toLocaleString() + "₫"}
                            </span>
                            {detail && detail.listedPrice && (
                                <span
                                    style={{
                                        fontSize: "1.6rem",
                                        marginLeft: "6px",
                                        textDecoration: "line-through",
                                        color: "#acacac",
                                    }}
                                >
                                    {detail && detail.listedPrice.toLocaleString() + "₫"}
                                </span>
                            )}
                        </div>
                        <Divider sx={{ margin: "20px 0" }} variant="fullWidth" orientation="horizontal" />
                        <p style={{ margin: "12px 0", fontSize: "1.8rem", textAlign: "justify" }}>
                            {detail && detail.summary}
                        </p>
                        <Divider sx={{ margin: "20px 0" }} variant="fullWidth" orientation="horizontal" />
                        <div
                            style={{
                                margin: "20px 0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                style={{
                                    margin: "20px 0",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <StyledTextField
                                    type="number"
                                    value={quantity}
                                    onChange={(event) => {
                                        setQuantity(event.target.value);
                                    }}
                                />
                                <Button
                                    onClick={handleOrder}
                                    variant="contained"
                                    color="error"
                                    size="large"
                                    sx={{ marginLeft: "20px" }}
                                >
                                    đặt hàng
                                </Button>
                            </div>
                            <div>
                                <span style={{ fontSize: "2rem" }}>Tổng tiền: </span>
                                <span style={{ fontSize: "2rem", color: "var(--primary-color)" }}>
                                    {Number(quantity * detail.promotionalPrice).toLocaleString()}đ
                                </span>
                            </div>
                        </div>
                        <Divider />

                        <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                            <span style={{ fontSize: "1.6rem" }}>Tags:</span>
                            <ul style={{ listStyle: "none", marginBottom: "0", marginLeft: "0" }}>
                                {detail &&
                                    detail.tags.map((item) => {
                                        return (
                                            <TagItem key={item}>
                                                <StyledSpan>{item}</StyledSpan>
                                            </TagItem>
                                        );
                                    })}
                            </ul>
                        </div>
                    </Grid>

                    <Grid item lg={12}>
                        <div
                            style={{
                                color: "white",
                                backgroundColor: "var(--primary-color)",
                                marginLeft: "10px",
                                fontSize: "1.8rem",
                                borderRadius: "10px 10px 0px 0px",
                                display: "inline-block",
                                height: "40px",
                                lineHeight: "40px",
                                padding: "0 15px",
                            }}
                        >
                            Mô tả sản phẩm
                        </div>
                        <div
                            style={{
                                border: "1px solid #cd9a2b",
                                padding: "5px 10px",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "space-around",
                                flexWrap: "wrap",
                                marginBottom: "20px",
                            }}
                        >
                            <div
                                style={{ width: "100%", fontSize: "1.8rem", textAlign: "justify" }}
                                className="ql-editor"
                                datagramm="false"
                            >
                                {detail && parse(detail.description)}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </ContainerComponent>
        )
    );
}

export default CuisineDetailPage;
