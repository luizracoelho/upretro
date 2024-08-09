import { Outlet } from "react-router-dom";
import Header from "../../shared/components/header";

const DefaultLayout = () => {
    return (
        <>
            <div style={{ display: "flex", gap: 16 }}>
                <div style={{ backgroundColor: "#ddd" }}>
                    <Header />
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;