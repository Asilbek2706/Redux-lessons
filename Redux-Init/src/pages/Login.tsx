import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../redux/store.ts";
import {fetchUser} from "../redux/reducers/user.reducer.ts";

const Login = () => {

    const dispatch: AppDispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.user.isLoading);

    const handleLogin = () => {
        dispatch(fetchUser('123'))
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