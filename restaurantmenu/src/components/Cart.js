import {useState} from "react";

function Cart(props){
    // const [number,setNumber] =useState(1)
    // const [gj,setGJ] =useState("Gaja")
    // return(
    //     <>
    //     <h1>Total Item: {number}</h1>
    //     <h1>Total Price: {gj}</h1>
    //     {/* <button onClick ={() => console.log("Changed Function")} >Increase</button> */}
    //     <button onClick ={() => setNumber(number+1)} >Increase</button>
    //     <button onClick ={() => setNumber(number-1)} >Decrease</button>
    //     <button onClick ={() => setGJ("GajaLakshmi")} >Change Name</button>
    //     <div>
    //         <p></p>
    //             <h1>Item: {count}</h1>
    //             <h1>Price: {Price}</h1>
    //     </div>
    //     </>
    // )
    let [totItem, setItem] = useState(props)
    let [totPrice, setPrice] = useState(props)
    return(

        <>
        {/* <h1>Total Item: {totItem}</h1> */}
        {/* <h1>Total Price: {totPrice}</h1> */}
        {/* <button onClick ={() => setNumber(number+1)} >Increase</button> */}
        <h1>Total Item: {props.cartQnty}</h1>
        <h1>Total Price: {props.cartValue}</h1>
        </>
    )
}
export default Cart