import { useRef } from "react"

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps) {

    const productRef = useRef<HTMLInputElement>(null)
    const quantityRef = useRef<HTMLInputElement>(null)
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const newProduct = productRef.current!.value
        const quantity = parseInt(quantityRef.current!.value)
        onAddItem(newProduct, quantity)
        productRef.current!.value = ""
        quantityRef.current!.value = "1"

    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={productRef} />
        <input type="number" min={1} ref={quantityRef} />
        <button type="submit">Add Item</button>
    </form>
}

export default ShoppingListForm