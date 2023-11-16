import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

const Card = ({filter_name}) => {
    const [data, setData] = useState([]);
    const [cloneData, setCloneData] = useState([]);

    useEffect(() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
            response => response.json()
        ).then(
            json => {
                setData(json.items);
                setCloneData(json.items);
            }
        )
    },[]);

    useEffect(() =>{
        if(filter_name !== "All Items"){
            let specific = cloneData.filter(item => item.category === filter_name);
            setData(specific);
        }else{
            setData(cloneData);
        }
    },[filter_name]);

  return (
    <div>
        <center>
            {data.length > 0 ?
            <div className='container'>
                <div className='row'>
                    {data.map((item,id) =>(
                        <div className='col-md-4' style={{padding:"5px"}}>
                            <div className='card' style={{width:"18rem",padding:"3px"}}>
                                <img src={item.url} className='card-img-top' alt='food item'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <div className='card-text'>
                                        Rs. {item.prize}
                                    </div>
                                    <button className='btn btn-primary'>Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            :
            <div className='spinner-border text-primary'></div>
            }
        </center>

    </div>
  )
}

const mapStateToProps = state =>({
    filter_name : state.filterreducer.filter_name,
})
export default connect(mapStateToProps)(Card)
