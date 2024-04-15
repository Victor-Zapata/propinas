import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.findIndex((el) => el.id === item.id)
        if (itemExist === -1) {
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        } else if (itemExist >= 0) {
            const updateOrder = [...order]
            updateOrder[itemExist].quantity++
            setOrder(updateOrder)
        }
    }

    const removeItem = (item: OrderItem) => {
        const orderFilter = order.filter((el) => el.id !== item.id)
        setOrder(orderFilter)
    }

    const handleTip = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTip = e.target.value
        setTip(Number(newTip))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        addItem,
        order,
        removeItem,
        handleTip,
        tip,
        placeOrder
    }

}

export default useOrder