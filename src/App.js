import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route ,Switch} from "react-router-dom";
import Traders from "./containers/Traders";
import TraderView from "./containers/TraderView";
import { updateData } from "./store/actions/traderAction";

function App() {
  const dispatch = useDispatch()
  const token = "OudDwOorhDOBpLZpxjnekDOEnkfTqHGU"
  const fetchData = () =>{
    axios.get('https://solution-fund.com/api/trader/getAll/dummy', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        })
        .then(res=>{
          const {traders} = res.data

          console.log(traders);
          dispatch(updateData(traders))
        })
        .catch((error) => {
        console.error(error)
        })
}
useEffect(()=>{
    fetchData()
},[])
  return (
   <>
    <div className="App">
      <Switch>
      <Route exact path="/traders/:id" component={TraderView}/>
       <Route exact path="/traders"  component={Traders}/>
       <Route  component={Traders}/>
      </Switch>
    </div>
   </>
  );
}

export default App;
