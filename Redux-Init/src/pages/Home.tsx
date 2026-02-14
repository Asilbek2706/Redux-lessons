import type {AppDispatch, RootState} from "../redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUser} from "../redux/reducers/user.reducer.ts";
import {paymentSuccess} from "../redux/reducers/payment.reducer.ts";

const Home = () => {
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser('123'))
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      dispatch(paymentSuccess([
        {
          id: '123',
          amount: '400$',
          date: '2000-01-01',
        },
      ]));
    }
  }, [currentUser, dispatch]);

  return isLoading ? <h3>Loading...</h3> : <h1>Asilbek's HomePage</h1>;
};

export default Home;
