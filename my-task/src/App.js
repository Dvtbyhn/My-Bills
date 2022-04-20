
import BillsList from "./components/BillsList";
import BillContextProvider from "./context/BillContext";



function App() {
  return (
    <div className="App">
        <div className="table-lg-10">
          <BillContextProvider>
           
            <BillsList />
          </BillContextProvider>

        </div>
   
  </div>
  
  )
}

export default App;
