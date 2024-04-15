import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {

    //SOLUCION 1 DE SUBTOTAL

    const subTotalPrice = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

    //SOLUCION 2 PARA CALCULAR SUBTOTAL
    // const subTotalPriceEach = order.map((item) => {
    //     return item.price * item.quantity
    // })
    // const subTotalPrice = subTotalPriceEach.reduce((a, b) => a + b, 0)

    const totalTip = tip * subTotalPrice

    const totalPrice = useMemo(() => subTotalPrice + totalTip, [order, tip])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas</h2>
                <p>Subtotal: <span className="font-bold">{formatCurrency(subTotalPrice)}</span></p>

                <p>Propina: <span className="font-bold">{formatCurrency(totalTip)}</span></p>
                <p>Total a pagar: <span className="font-bold">{formatCurrency(totalPrice)}</span></p>
            </div>
            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalPrice === 0}
                onClick={placeOrder}
            >
                Guardar orden</button>
        </>


    )
}

export default OrderTotals