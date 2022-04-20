import { useContext, useState, useEffect } from "react";
import { BillContext } from "../context/BillContext";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import EditBill from "./EditBill";
import { Util } from "../helpers/index";




const Bill = ({ bill }) => {


    const { deleteBill } = useContext(BillContext)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    useEffect(() => {
        handleClose()
    }, [bill])

    return (
        <>


            <td>{bill.name}</td>
            <td>{bill.description}</td>
            <td>{bill.transaction}</td>
            <td>{Util.formatCurrency(bill.amount,bill.currency)}</td>
            <td>
                <button onClick={handleShow} className="btn btn-outline-info" data-toggle="modal">Edit</button>
                <button onClick={() => deleteBill(bill.id)} className="btn btn-outline-danger" data-toggle="modal">Delete</button>
            </td>


            <Modal show={show} onHide={handleClose}>
                <ModalHeader className='modal-header ' closeButton>
                    <ModalTitle>
                        Edit Bill
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <EditBill theBill={bill} />

                </ModalBody>
                <ModalFooter>
                    <Button variant='secondary' onClick={handleClose}
                    >Close modal
                    </Button>
                </ModalFooter>
            </Modal>


        </>

    )
}

export default Bill