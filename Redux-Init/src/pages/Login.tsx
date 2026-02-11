import {userRequest, userSuccess} from "../redux/actions/user.actions.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../redux/store.ts";

const Login = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.user.isLoading);

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


export default Login