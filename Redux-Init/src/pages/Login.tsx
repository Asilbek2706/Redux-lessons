import type {RootState} from "../redux/store.ts";
import {userRequest, userSuccess} from "../redux/actions.ts";
import {connect, type ConnectedProps} from "react-redux";

const Login = ({ isLoading,
               dispatch
               }: ConnectedProps<typeof connector>) => {

    console.log(isLoading);

    const handleLogin = () => {
        dispatch(userRequest());
        setTimeout(() => {
            dispatch(
                userSuccess({
                    id: '12345',
                    name: 'Asilbek',
                    roles: ['admin'],
                })
            )
        }, 3000)
    }

    return (
            isLoading ? <h3>Loading...</h3> :
            <form>
                <input type="text" />
                <input type="password" />
                <button type='button' onClick={handleLogin}>Login</button>
            </form>
    )
}

const mapStateToProps = (state: RootState) => ({
    isLoading: state.isLoading,
});

const connector = connect(mapStateToProps);

export default connector(Login)