import { BillContext } from "../context/BillContext";
import { useContext, useState } from 'react'
import { Form, Button } from "react-bootstrap";

const AddBill = () => {

    const { addBill } = useContext(BillContext)

    const [newBill, setNewBill] = useState({
        name: "", description: "", transaction: "", amount: "", currency:"TRY"
    })

    const { name, description, transaction, amount , currency} = newBill



    const onInputChange = (e) => {
       
        setNewBill({ ...newBill, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addBill(name, description, transaction, amount,currency)
    }


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}


                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as='textarea'
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="date"
                    name="transaction"
                    value={transaction}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    value={amount}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
            <Form.Select name="currency" aria-label="Currency" onChange={onInputChange}>
                 
                <option value="TRY">TRY</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit" >
                Add New Bill
            </Button>
        </Form>
    )
}

export default AddBill