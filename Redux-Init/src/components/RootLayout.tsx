import {Link, Outlet} from "react-router-dom";
import type {RootState} from "../redux/store.ts";
import {connect, type ConnectedProps} from "react-redux";

function RootLayout({user}: ConnectedProps<typeof connector>) {
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/admin">Admin</Link>
                <Link to={'/blog/angular-haqida'}>Angular haqida</Link>
                {
                    user && <a href={"#"}>{user.name}</a>
                }
            </nav>
            <Outlet />
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    user: state.currentUser,
})

const connector = connect(mapStateToProps, null)

export default connector(RootLayout);