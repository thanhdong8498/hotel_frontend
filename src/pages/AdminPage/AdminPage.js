import { useSelector } from "react-redux";
import DefaultAdminLayout from "./DefaultAdminLayout";

function AdminPage() {
    const isLogined = useSelector((state) => state.auth.isLogined);
    console.log(isLogined);
    return (
        <DefaultAdminLayout>
            <h1> Admin home Content</h1>
        </DefaultAdminLayout>
    );
}

export default AdminPage;
