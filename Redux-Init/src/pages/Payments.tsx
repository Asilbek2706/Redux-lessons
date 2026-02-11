import {useSelector} from "react-redux";
import type {RootState} from "../redux/store.ts";

const Payments = () => {
    const payments = useSelector((state: RootState) => state.payment.payments)
    return (
        <table>
            {payments.map((payment) => (
                <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.date}</td>

                </tr>
            ))}
        </table>
    )
}

export default Payments;