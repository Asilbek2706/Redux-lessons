import {useEffect} from "react";
import {userSuccess} from "../redux/actions/user.actions.ts";
import {paymentSucceess} from "../redux/actions/payment.actions.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../redux/store.ts";

const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.currentUser);

    useEffect(() => {
        setTimeout(() => {
            dispatch(userSuccess({
                name: 'Asilbek',
                id: '1234',
                roles: ['admin'],
            }))
        }, 2000)
    }, [dispatch]);


    useEffect(() => {
        if (user) {
            dispatch(paymentSucceess([
                {
                    id: '1230',
                    amount: '200$',
                    date: '10.02.2026'
                },
                {
                    id: '1231',
                    amount: '300$',
                    date: '12.02.2026'
                },
            ]))
        }
    }, [user, dispatch]);

    return (
        <>
            <h1>Homepage</h1>
        </>
    )
}

export default Home;