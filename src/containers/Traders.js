import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Header from '../components/Header'
import { TraderStyle } from './TraderStyle'

export default function Traders() {
    const history = useHistory()
     const token = "OudDwOorhDOBpLZpxjnekDOEnkfTqHGU"
    const [traders,setTraders] = useState([])
    const fetchData = () =>{
        axios.get('https://solution-fund.com/api/trader/getAll/dummy', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            })
            .then(res=> {
                const{traders} = res.data
                setTraders(traders)
            })
            .catch((error) => {
            console.error(error)
            })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div >
            <Header/>
            <TraderStyle>
               <div className="mainContainer">
               { traders.map(item=>{
                    const{name,id} = item
                    return (
                        <div className="trader" key={id}>
                               <div>
                               <h4>{name}</h4>
                                <Link onClick={()=> history.push(`/traders/${id}`)}>Подробное</Link>
                               </div>
                        </div>
                    )
                
                })}
               </div>
           </TraderStyle>
           
        </div>
    )
}
