import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";

function AboutPage() {
    return (
        <div style={{ margin: "20px 0" }}>
            <ContainerComponent>
                <Box sx={{ padding: "0 30px" }}>
                    <Typography sx={{ fontWeight: "600", marginBottom: "10px" }} fontSize="1.6rem" variant="h2">
                        VỀ CHÚNG TÔI
                    </Typography>
                    <Typography sx={{ marginBottom: "15px" }} fontSize="1.4rem">
                        Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như
                        trái tim và trung tâm của TP. Hồ Chí Minh.
                        <img src="/images/alper-gio-thieu.webp" alt="" width="100%" style={{ marginTop: "15px" }} />
                    </Typography>
                    <Typography sx={{ marginBottom: "15px" }} fontSize="1.4rem">
                        Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng
                        tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ
                        ngơi thư giãn hay trong chuyến công tác.
                    </Typography>
                    <Typography sx={{ marginBottom: "15px" }} fontSize="1.4rem">
                        <strong>Bean Hotel</strong> tích hợp đầy đủ tất cả các dịch vụ cho Quý khách có một chuyến công
                        tác hoặc kỳ nghỉ thật sự tiện ích như nhà hàng, phòng hội nghị, hồ bơi, dịch vụ đón tiễn sân
                        bay, các tour du lịch, chơi golf, vé máy bay với chất lượng tốt nhất do những nhân viên chuyên
                        nghiệp của khách sạn đảm nhiệm . Đảm bảo tuyệt đối chất lượng dịch vụ do khách sạn cung cấp là
                        cam kết hàng đầu của chúng tôi. Điều này góp phần tạo nên sự khác biệt của hệ thống Khách sạn{" "}
                        <strong>Bean Hotel</strong>.
                    </Typography>
                    <Typography sx={{ marginBottom: "15px" }} fontSize="1.4rem">
                        Cùng với đội ngũ nhân viên được tuyển chọn và đào tạo chuyên nghiệp, chu đáo và thân thiện,{" "}
                        <strong>Bean Hotel</strong> hứa hẹn sẽ mang đến cho Quý khách sự thoải mái và hài lòng nhất.
                    </Typography>
                    <Typography sx={{ marginBottom: "15px" }} fontSize="1.4rem">
                        Đến với <strong>Bean Hotel</strong> là đến với sư tinh tế nhất về chất lượng, dịch vụ và sự thân
                        thiện như chính ngôi nhà của bạn.
                    </Typography>
                    <Typography
                        sx={{ fontWeight: "600", marginBottom: "10px", fontStyle: "italic" }}
                        fontSize="1.6rem"
                        variant="h2"
                    >
                        HÃY ĐẾN BEAN HOTEL ĐỂ TRẢI NGHIỆM SỰ KHÁC BIỆT!
                    </Typography>
                </Box>
            </ContainerComponent>
        </div>
    );
}

export default AboutPage;
