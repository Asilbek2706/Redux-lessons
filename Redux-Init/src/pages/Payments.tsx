import type {RootState} from "../redux/store.ts";
import {connect, type ConnectedProps} from "react-redux";
import type {IPayment} from "../shared/interfaces/payment.interface.ts";

const Payments = ({ payments }: ConnectedProps<typeof connector>) => {
    return (
        <>
            <table>
                {payments.map((payment: IPayment) => (
                    <tr key={payment.id}>
                        <td>{payment.id}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.date}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    payments: state.payment.payments
});

const connector = connect(mapStateToProps);

export default connector(Payments)