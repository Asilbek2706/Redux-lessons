import {connect} from "react-redux";
import type {RootState} from "../redux/store.ts";
import { userSuccess } from "../redux/actions/user.actions.ts";
import {Outlet} from "react-router-dom";


function Profile() {
    return <Outlet />
}

const mapStateToProps = (state: RootState) => state;

const mapDispatchToProps = {
    userSuccess,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Profile);