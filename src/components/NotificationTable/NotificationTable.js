import React, { useState } from "react";
import { Box, Popover, Tab, Typography } from "@mui/material";
import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import moment from "moment";
import "moment/locale/vi";
import styled from "@emotion/styled";

const NotificationTable = ({ unreadAmount, unreadNotifications, notifications }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleRowClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const open = Boolean(anchorEl);
    const id = open ? "notification-popover" : undefined;
    moment.locale("vi");
    const NotificationItem = styled("div")({
        display: "flex",
        padding: "6px 8px",
        "&:hover": {
            backgroundColor: "#f4f4f4",
        },
    });
    return (
        <div>
            {/* Clickable row */}
            <div onClick={handleRowClick}>Thông báo ({unreadAmount})</div>

            {/* Popover */}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                sx={{ top: "10px" }}
            >
                <Box sx={{ width: "500px", typography: "body1" }}>
                    <TabContext value={value}>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: "divider",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <TabList
                                sx={{
                                    "& .MuiTab-root": {
                                        fontSize: "1.8rem !important",
                                        fontWeight: "500 ",
                                    },
                                    "& .Mui-selected": {
                                        color: "var(--primary-color) !important",
                                        fontWeight: "500 !important",
                                        fontSize: "1.8rem !important",
                                    },
                                    "& .MuiTabs-indicator": {
                                        backgroundColor: "var(--primary-color)",
                                    },
                                }}
                                onChange={handleChange}
                                aria-label=""
                            >
                                <Tab label="Chưa đọc" sx={{ textTransform: "unset" }} value="1" />
                                <Tab label="Tất cả" sx={{ textTransform: "unset" }} value="2" />
                            </TabList>
                        </Box>
                        <TabPanel
                            sx={{
                                "&.MuiTabPanel-root": {
                                    padding: "0",
                                },
                            }}
                            value="1"
                        >
                            {unreadNotifications.length > 0 &&
                                unreadNotifications.map((item, index) => {
                                    const timeAgo = moment(item.createdAt).fromNow();
                                    return (
                                        <NotificationItem key={index}>
                                            <img
                                                style={{ width: "76px", height: "76px", borderRadius: "50%" }}
                                                src={`${process.env.REACT_APP_HOST_URL}${item.image}`}
                                                alt="avatar"
                                            />
                                            <div style={{ padding: "8px 8px 0 8px", position: "relative" }}>
                                                <Typography sx={{ marginBottom: "6px" }}>{item.message}</Typography>
                                                <span
                                                    style={{
                                                        color: "var(--primary-color)",
                                                        fontSize: "15px",
                                                    }}
                                                >
                                                    {timeAgo}
                                                </span>
                                            </div>
                                        </NotificationItem>
                                    );
                                })}
                            {unreadNotifications.length === 0 && (
                                <Typography sx={{ p: 2 }}>Bạn không có thông báo nào</Typography>
                            )}
                        </TabPanel>
                        <TabPanel
                            sx={{
                                "&.MuiTabPanel-root": {
                                    padding: "0",
                                },
                            }}
                            value="2"
                        >
                            {notifications.length > 0 &&
                                notifications.map((item, index) => {
                                    const timeAgo = moment(item.createdAt).fromNow();
                                    return (
                                        <NotificationItem key={index}>
                                            <img
                                                style={{ width: "76px", height: "76px", borderRadius: "50%" }}
                                                src={`${process.env.REACT_APP_HOST_URL}${item.image}`}
                                                alt="avatar"
                                            />
                                            <div style={{ padding: "8px 8px 0 8px", position: "relative" }}>
                                                <Typography sx={{ marginBottom: "6px" }}>{item.message}</Typography>
                                                <span
                                                    style={{
                                                        color: "var(--primary-color)",
                                                        fontSize: "15px",
                                                    }}
                                                >
                                                    {timeAgo}
                                                </span>
                                            </div>
                                        </NotificationItem>
                                    );
                                })}
                            {notifications.length === 0 && (
                                <Typography sx={{ p: 2 }}>Bạn không có thông báo nào</Typography>
                            )}
                        </TabPanel>
                    </TabContext>
                </Box>
            </Popover>
        </div>
    );
};

export default NotificationTable;
