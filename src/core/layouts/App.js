import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const hideNavbarPages = ["/success", "/login"];

export default function AppLayout({ children }) {
    const router = useRouter();
    const hideNavbar = hideNavbarPages.includes(router.asPath);
    return (
        <>
            <Meta />
            {!hideNavbar && <Navbar />}
            {children}
        </>
    );
}
