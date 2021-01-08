import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51HutPyJ23KTXEuACIR2uDScFGDOfPyRFxTpMDloRlrELgTKxuyJ6bYIrPQtlFJzC35rW5ACFweLVzq3A1tO34yeO00JSUz07Wg")

export default function handleOnClick(itemPrice) {
  
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
  } 