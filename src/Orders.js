import React from 'react'
import { connect } from 'react-redux'
import Header from './Container/Header'

const Orders = ({list}) => {
  return (
    <div>
      <Header />
        <center>
          {list.length > 0 ?
            <div className='container'>
              <div className='row'>
                {list.map((item,id) =>(
                  <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                    <div className='card' style={{width:"18rem",padding:"3px"}}>
                      <h5 className='card-title'>Table Number: {item.table_number}</h5>
                      <img src={item.url} className='card-img-top' alt='food item'/>
                      <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <div className='card-text'>
                          Bill Amount Rs. {item.prize}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            :
            <div className='h4'>
              no order placed at
            </div>
          }
      </center>
    </div>
  )
}

const mapStateToProps = state =>({
  list : state.orderreducer
})

export default connect(mapStateToProps)(Orders)
