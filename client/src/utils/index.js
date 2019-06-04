 const Cart_key = "Cart !@#"
 const Auth_key = "jwt"


//  cart  session

export const calculatePrice = items => {
    return `$${items
      .reduce((acc, item) => acc + item.quantity * item.Price, 0)
      .toFixed(2)}`;
  };
export const calculateAmount = items => {
    return  Number(items
      .reduce((acc, item) => acc + item.quantity * item.Price, 0)
      .toFixed(2))
  };

export const setCart =(cart)=>{
    (localStorage) ? localStorage.setItem(Cart_key, JSON.stringify(cart)): []
}

export const  getCart = ( cart=Cart_key)=>{
  return   (localStorage && localStorage.getItem(Cart_key)) ?JSON.parse(localStorage.getItem(Cart_key)): [] 

}
export const ClearCart =()=>{
  (localStorage) ? localStorage.removeItem(Cart_key): []
}

// the auth session

export const setToken =(Token)=>{
  (localStorage) ? localStorage.setItem(Auth_key, JSON.stringify(Token)): []
}

export const  getToken = ( authkey = Auth_key)=>{
  return   (localStorage && localStorage.getItem(authkey)) ?JSON.parse(localStorage.getItem(authkey)): null
}
export const ClearToken =()=>{
  (localStorage) ? localStorage.removeItem(Auth_key): []
}