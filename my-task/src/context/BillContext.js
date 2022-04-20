import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import React from 'react'

export const BillContext = createContext()



const BillContextProvider = (props) => {

    

    const [bills,setBills] = useState([
        { id: uuidv4(), name: "Kablonet", description: "Fatura Ödeme", transaction: "2022-04-03", amount: 120.50 , currency:"TRY"},
        { id: uuidv4(), name: "Kablonet", description: "Fatura Ödeme", transaction: "2022-04-03", amount: 1200.50 ,currency:"USD"},
        { id: uuidv4(), name: "Kablonet", description: "Fatura Ödeme", transaction: "2022-04-03", amount: 120 ,currency:"EUR"},
        { id: uuidv4(), name: "Kablonet", description: "Fatura Ödeme", transaction: "2022-04-03", amount: 120 ,currency:"TRY"},
        { id: uuidv4(), name: "Kablonet", description: "Fatura Ödeme", transaction: "2022-04-03", amount: 120,currency:"TRY"},

    ])

   

    const sortBill = bills.sort((a,b) => (a.name < b.name ? -1 : 1))

    const addBill = (name,description,transaction,amount,currency) => {
       setBills ([...bills,{id:uuidv4(),name,description,transaction,amount,currency}])
    }

    const updateBill = (id,updateBill) => {
         setBills(bills.map((bill) => (bill.id === id ? updateBill:bill)))
    }

    const deleteBill = (id) => {
      setBills (bills.filter(bill => bill.id !== id))
    }
    return (


        <div>



            <BillContext.Provider value={{sortBill,addBill,updateBill,deleteBill,}}>
                {props.children}
            </BillContext.Provider>

        </div>

    )


}

export default BillContextProvider
