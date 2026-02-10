import {Link, Outlet} from "react-router-dom";
import type {RootState} from "../redux/store.ts";
import {connect, type ConnectedProps} from "react-redux";

function RootLayout({user}: ConnectedProps<typeof connector>) {
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

const mapStateToProps = (state: RootState) => ({
    user: state.user.currentUser,
})

const connector = connect(mapStateToProps, null)

export default connector(RootLayout);