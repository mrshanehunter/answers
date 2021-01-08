import { useState, useContext } from "react"
import PackContext from "../contexts/PackContext"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51HutPyJ23KTXEuACIR2uDScFGDOfPyRFxTpMDloRlrELgTKxuyJ6bYIrPQtlFJzC35rW5ACFweLVzq3A1tO34yeO00JSUz07Wg")

export default function usePacks({ tokens, data }) {
  const [order, setOrder] = useContext(PackContext);
  const [loading, setLoading] = useState(false);

  function addToOrder(data) {
    setLoading(true)

    const packItem = tokens.find((token) => token.pack_price_code === data)
    const itemPrice = packItem.pack_price_code
    const welcome = packItem.welcome_offer;
    const qty = packItem.pack_token_qty;
    setOrder([itemPrice, qty, welcome]);
    const orderItem = [{ price:`${itemPrice}`, quantity: 1 }];

    fetch("/.netlify/functions/orderCreate", {
      method: "POST",
      body: JSON.stringify(orderItem),
    })
      .then(async response => {
        const { id } = await response.json()
        const stripe = await stripePromise 
        const { error } = await stripe.redirectToCheckout({ sessionId: id }) 
        alert(error.message)
      })
      .catch(err => alert(err.message))
      setLoading(false)
  }
  
  return {
    order,
    addToOrder,
    loading
  }
  
}