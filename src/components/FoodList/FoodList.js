import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function FoodList({ food }) {
    return (
        <>
            {food &&
                food.map((item, index) => {
                    return (
                        <Grid key={index} item lg={3}>
                            <Card
                                sx={{
                                    "& .MuiCardContent-root:last-child": {
                                        paddingBottom: "16px",
                                    },
                                }}
                            >
                                <CardMedia
                                    sx={{ height: "225px" }}
                                    image={`${process.env.REACT_APP_HOST_URL}${item.images[0]}`}
                                />
                                <CardContent>
                                    <Typography
                                        fontSize="1.4rem"
                                        sx={{
                                            width: "100%",
                                            textTransform: "uppercase",

                                            fontWeight: "600",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "var(--primary-color)",
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <div style={{ marginTop: "6px" }}>
                                        <span
                                            style={{
                                                color: "var(--primary-color)",
                                                fontWeight: "600",
                                                fontSize: "1.8rem",
                                            }}
                                        >
                                            {item.promotionalPrice.toLocaleString()}₫
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "1.6rem",
                                                marginLeft: "6px",
                                                textDecoration: "line-through",
                                                color: "#acacac",
                                            }}
                                        >
                                            {item.listedPrice && item.listedPrice.toLocaleString() + "₫"}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
        </>
    );
}

export default FoodList;
