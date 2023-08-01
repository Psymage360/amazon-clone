import React from 'react';
import { useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">

            <img 
                className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Pay_Balance/apay_pc_banner_2.jpg" 
                alt=""
            />
            {basket?.length === 0 ? (
                 <div>
                    <h2>Your Amazon Cart is empty. </h2>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
Continue shopping on the Amazon.in homepage, learn about today's deals, or visit your Wish List.</p>
                 </div>           
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Cart </h2>
                    
                    {/*List out all of the Checkout Products*/}
                    {basket?.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />        
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && ( 
            <div className="checkout__right">                
                <Subtotal />
            </div>
            )}
        </div>
    );
}

export default Checkout;