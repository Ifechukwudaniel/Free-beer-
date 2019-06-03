 const Cart = "Cart !@#"


export const calculatePrice = items => {
    return `$${items
      .reduce((acc, item) => acc + item.quantity * item.Price, 0)
      .toFixed(2)}`;
  };

export const setCart =(cart)=>{
    (localStorage) ? localStorage.setItem(Cart, JSON.stringify(cart)): []
}

export const  getCart = ( cart=Cart)=>{
  return   (localStorage && localStorage.getItem(Cart)) ?JSON.parse(localStorage.getItem(Cart)): [] 

}