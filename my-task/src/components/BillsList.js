
import { BillContext } from '../context/BillContext'
import { useContext, useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import AddBill from './AddBill';
import Bill from './Bill';

const BillsList = () => {
  const { sortBill } = useContext(BillContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose()
  }, [sortBill])

  return (
    <div>
    <Button className='col-lg-2' variant="primary" onClick={handleShow}>
        New Bill
      </Button>
      <table className="table">
        <thead>
          <tr>

            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">transaction</th>
            <th scope='col'>amount</th>
          </tr>
        </thead>
        <tbody>

          {
            sortBill.map((bill) => (
              <tr key={bill.id}>
                <Bill bill={bill} />
              </tr>
            ))
          }


        </tbody>
      </table>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBill />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
    </div>
  )
}



export default BillsList
