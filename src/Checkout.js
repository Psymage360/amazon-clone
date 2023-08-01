import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket}] = useStateValue()
  return (
    <div className='checkout'>CheckoutME
    {basket?.length === 0 ? (
        <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
        </div>
    ) : (
        <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {/* List out all of the Checkout Products */}

            </div>
        )}
     </div>
  )
}

export default Checkout