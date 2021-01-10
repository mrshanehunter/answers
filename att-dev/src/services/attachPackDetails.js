export default function attachPackDetails(order, tokens) {
  return order.map(pack => {
    const tokenItem = tokens.find(
      token => token.pack_price_code === pack.pack_price_code
    )
    console.log(tokenItem)
    return {
      ...pack,
      itemPrice: tokenItem.pack_price_code,
      itemQty: tokenItem.pack_token_qty,
      itemWelcome: tokenItem.welcome_offer,
    }
  })
}
