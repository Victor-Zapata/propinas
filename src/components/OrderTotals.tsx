import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
}

const OrderTotals = ({ order, tip }: OrderTotalsProps) => {

    const subTotalPriceEach = order.map((item) => {
        return item.price * item.quantity
    })
    const subTotalPrice = subTotalPriceEach.reduce((a, b) => a + b, 0)

    const totalTip = tip * subTotalPrice

    const totalPrice = subTotalPrice + totalTip

    return (
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas</h2>
            <p>Subtotal: <span className="font-bold">{formatCurrency(subTotalPrice)}</span></p>

            <p>Propina: <span className="font-bold">{formatCurrency(totalTip)}</span></p>
            <p>Total a pagar: <span className="font-bold">{formatCurrency(totalPrice)}</span></p>
        </div>

    )
}

export default OrderTotals