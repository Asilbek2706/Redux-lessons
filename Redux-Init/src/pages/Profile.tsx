import {connect, type ConnectedProps} from "react-redux";
import {useEffect} from "react";
import type {RootState} from "../redux/store.ts";
import {setUser} from "../redux/actions.ts";

type ReduxProps = ConnectedProps<typeof connector>;
type ComponentProps = {
    isActive: boolean;
}

type Props = ReduxProps & ComponentProps

function Profile(props: Props) {
    console.log(props)

    useEffect(() => {
        setTimeout(() => {
            props.setUser({
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
    setUser,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Profile);