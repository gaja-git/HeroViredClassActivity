import React,{ useState } from 'react';

import './Items.css';

function Menu(props){
    //let orderCount =0
    //let orderValue =0
    //const [ orderCnt,setOrderCnt ] = useState(1)
    //const [orderVal, setOrderVal] = useState(0)

     const buy = () => {
       // console.log("OrderCnt-Before:",orderCnt)
        //setOrderCnt(orderCnt + 1 )
        // setOrderCnt((prev) => {
        //      return{
        //     ...prev,
        //     orderCnt : orderCnt+prev.orderCnt
        //     }
        // })
        //setOrderVal()
        //alert(orderCnt)
        //console.log("OrderCnt-After:",orderCnt)
        //setOrderVal(orderVal + props.price)
        //console.log(props.price)
        //console.log("orderVal:",orderVal)
        props.cartValue = props.cartValue + props.price
        props.handleClick()
    }

    return(
        <div  className="main-food-item">
            <div className='food-items'>
                {
                    props.type === 'veg' || props.type === 'cold'? (<span className='item-padding veg'>{props.type}</span>):
                    (<span className='item-padding non-veg'>{props.type}</span>)
                    
                }
                <strong>{props.item}</strong> 
            </div>
            <button className='food-items' onClick={buy}>INR {props.price}</button>
        </div>
    )
    // setOrderCnt((prev) => {
    //     return{
    //     ...prev,
    //     [orderCnt] :orderCnt+prev.orderCnt
    //     }
    // })

    // setOrderVal( (prev) =>{
    //     return{
    //         ...prev,
    //        [ orderVal ]: orderVal+ prev.orderVal
    //     }
    // })

   

   
    // if(props.type ==='veg' || props.type === 'cold')
    // {
    //     return(
    //         <div className='item-padding veg'>
    //             <p >
    //                 {props.item} -- Veg ------------ <button onClick={buy}> INR {props.price}</button>
    //             </p>
    //         </div>
    //     )
    // }
    // else
    // {
    //     return(
    //         <div className='item-padding non-veg'>
    //             <p>
    //             {props.item} -- Veg ------------INR  <button onClick={buy}> INR {props.price}</button>
    //             </p>
    //         </div>
    //     )

    // }

   
}
export default Menu;