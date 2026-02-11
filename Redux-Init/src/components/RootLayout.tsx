import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../redux/store.ts";

function RootLayout() {

    const user = useSelector((state: RootState) => state.user.currentUser);

    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                {
                    user && <Link to={'/profile/payments'}>{user.name} (payments) </Link>
                }
            </nav>
            <Outlet />
        </>
    )
}

export default RootLayout