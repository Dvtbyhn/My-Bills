import { useContext, useState } from "react";
import { Form,Button } from "react-bootstrap";
import { BillContext } from "../context/BillContext";

const EditBill = ({theBill}) => {
    const {updateBill} = useContext(BillContext)

    const bill = theBill
    const id = bill.id

    const [name,setName] = useState(bill.name)
    const [description,setDescription] = useState(bill.description)
    const [transaction,setTransaction] = useState(bill.transaction)
    const [amount,setAmount] = useState(bill.amount)
    const [currency,setCurrency] = useState(bill.currency)

 
    const handleSubmit = (e) => {
        const updatedBill = {id,name,description,transaction,amount,currency}

        e.preventDefault()
        updateBill(id,updatedBill)
    }

  return (
     <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                  onChange ={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="description *"
                    name="description"
                    value={description}
                    onChange ={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                   type="date"
                    name="transaction"
                    value={transaction}
                    onChange ={(e) => setTransaction(e.target.value)}
/>
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="amount"
                    name="amount"
                    value={amount}
                    onChange ={(e) => setAmount(e.target.value)}
                     onRateChange={(e) => setCurrency(e.target.value)}
                   
                />
            </Form.Group>

            <Button variant="success" type="submit" >
                Update Bill
            </Button>
        </Form>
  )
}

export default EditBill