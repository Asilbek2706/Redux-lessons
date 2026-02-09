import {connect, type ConnectedProps} from "react-redux";
import {useEffect} from "react";
import type {RootState} from "../redux/store.ts";
import { userSuccess } from "../redux/actions.ts";

type ReduxProps = ConnectedProps<typeof connector>;

type IProps = ReduxProps;

function Profile(props: IProps) {
    console.log(props)

    useEffect(() => {
        setTimeout(() => {
            props.userSuccess({
                name: 'Asilbek',
                id: '123',
                roles: ['admin'],
            })
        }, 5000)
    }, [])

    return (
        <h1>Asilbek Karomatov's Profile page</h1>
    );
}

const mapStateToProps = (state: RootState) => state;

const mapDispatchToProps = {
    userSuccess,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Profile);