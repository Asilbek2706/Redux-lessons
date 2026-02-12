import { useEffect } from 'react';
import { paymentSucceess } from '../redux/actions/payment.actions.ts';
import { fetchUser } from '../redux/actions/user.actions.ts';
import { useAppDispatch, useAppSelector } from '../hooks/thunk.hooks.tsx';
const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.currentUser);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(
        paymentSucceess([
          {
            id: '1230',
            amount: '200$',
            date: '10.02.2026',
          },
          {
            id: '1231',
            amount: '300$',
            date: '12.02.2026',
          },
        ])
      );
    }
  }, [user, dispatch]);

  return isLoading ? <h3>Loading...</h3> : <h1>Asilbek's HomePage</h1>;
};

export default Home;
