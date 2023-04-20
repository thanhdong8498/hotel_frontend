import { FormControl, Grid, MenuItem, Pagination, Paper, Select } from "@mui/material";
import { Box } from "@mui/system";
import SortIcon from "@mui/icons-material/Sort";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { useEffect, useState } from "react";
import axios from "axios";

import { useSearchParams } from "react-router-dom";
import DoubleRoomList from "../../components/DoubleRoomList/DoubleRoomList";
function DoubleRoom() {
    const [sortBy, setSortBy] = useState("price,asc");

    useEffect(() => {
        async function getRoom() {
            const room = await axios.get(`api/room/double?sort=${sortBy}`);
            setRooms(room.data);
        }

        getRoom();
    }, [sortBy]);
    const [page, setPage] = useState(1);
    const [rooms, setRooms] = useState();
    console.log(sortBy);
    const handleChange = (event) => {
        setSortBy(event.target.value);
        search.set("sort", sortBy);
        setSearch(search);
    };

    const [search, setSearch] = useSearchParams();
    return (
        <>
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
                        <h2 style={{ textTransform: "uppercase", fontSize: "1.8rem" }}>Phòng đôi</h2>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <SortIcon />
                            <span style={{ fontSize: "1.5rem", marginRight: "12px" }}>Sắp xếp: </span>
                            <FormControl size="small" sx={{ border: "none" }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sortBy}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"title,Asc"}>Tên A → Z</MenuItem>
                                    <MenuItem value={"title,desc"}>Tên Z → A</MenuItem>
                                    <MenuItem value={"price,asc"}>Giá tăng dần</MenuItem>
                                    <MenuItem value={"price,desc"}>Giá giảm dần</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Paper>
                </Box>
                <Box sx={{ padding: "0 30px", marginBottom: "20px" }}>
                    <Grid container spacing={2}>
                        {rooms && <DoubleRoomList doubleRooms={rooms.slice((page - 1) * 8, (page - 1) * 8 + 8)} />}
                    </Grid>
                </Box>
                {rooms && Math.floor(Number(rooms?.length / 4)) + 1 > 1 && (
                    <Pagination
                        sx={{
                            paddimg: 20,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "20px",
                            "& .MuiPaginationItem-root": {
                                color: "var(--primary-color)",
                            },
                        }}
                        variant="outlined"
                        onChange={(_, value) => {
                            setPage(value);
                        }}
                        shape="rounded"
                        count={Math.floor(Number(rooms?.length / 4)) + 1}
                    />
                )}
            </ContainerComponent>
        </>
    );
}

export default DoubleRoom;
