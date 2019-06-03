import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import { Box, Heading, Text,
  IconButton, Image, Card, Button, Mask } from "gestalt";
import {calculatePrice, setCart, getCart} from '../utils'
import {Link} from "react-router-dom"
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  state = {
    brews: [],
    brand: "",
    cartItems :[]
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `
          query{
            brand(id: "${this.props.match.params.brandId}"){
             _id,
              Name,
              brews{
                _id,
                Name,
                Description,
                Image{
                  url,
                }
              Price,
              }
            }
          }`
        }
      });
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.Name,
        cartItems : getCart()
      });
    } catch (err) {
      console.error(err);
    }
  }

  additem = brew =>{ 
    const alreadyInCart =  this.state.cartItems.findIndex(
     item => item._id=== brew._id
  )
  if( alreadyInCart=== -1){
   const UpdateItem =   this.state.cartItems.concat({
       ...brew,
       quantity : 1
     })
    this.setState({cartItems : UpdateItem},()=> setCart(this.state.cartItems)) 
  }
  else{
    const UpdateItem = [...this.state.cartItems]
    UpdateItem[alreadyInCart].quantity++
    this.setState({cartItems: UpdateItem},()=> setCart(this.state.cartItems)) 
  }
  }
  deleteItemFromCart = itemToDeleteId => {
    const filteredItems = this.state.cartItems.filter(
      item => item._id !== itemToDeleteId
    );
    this.setState({ cartItems: filteredItems },()=> setCart(this.state.cartItems));
  };

  render() {
    const { brand, brews , cartItems} = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle= {{
          __style:{
            flexWrap: 'wrap-reverse',
          }
        }}
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Heading */}
          <Box margin={2}>
            <Heading size="sm" color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd9"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box paddingY={4} margin={2} width={210} key={brew._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit="cover"
                        alt="Brand"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${brew.Image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box marginBottom={2}>
                      <Text bold size="xl">
                        {brew.Name}
                      </Text>
                    </Box>
                    <Text>{brew.Description}</Text>
                    <Text color="orchid">${brew.Price}</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button onClick={()=>this.additem(brew)} color="blue" text="Add to Cart" />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
          
        </Box>
         { /* the cart section */}
          <Box  alignSelf='end' marginTop={2} marginLeft={8} >
             <Mask shape="rounded" wash>
                   <Box  padding={1}  display="flex" direction="column" alignItems ="center">
                       {/* the user cart heading */}
                      <Heading align ="center" size="sm" >  Your Cart </Heading>
                      <Text color= 'gray' italic >
                      {cartItems.length} items in your cart
                      </Text>
                        {/*  cart content  */}
                        { cartItems.map( item => (
                            <Box key={item._id}   display="flex" alignItems="center">
                                <Text>{item.Name} x {item.quantity} - $ { ( item.quantity * item.Price).toFixed(2)} </Text>
                                <IconButton accessibilityLabel="Delete Icon" icon="cancel" iconColor="red" size="sm" onClick={ ()=> this.deleteItemFromCart(item._id) }/>
                             </Box>
                          ))}

                         <Box alignContent ="center" justifyContent="center" direction="column" display="flex">
                            <Box margin={2}  >
                               { cartItems.length ===0 &&  (
                                 <Text color="red"> Please add an item to your cart </Text>
                               )}
                            
                             <Text > Total :{calculatePrice(cartItems)}</Text>
                             <Text>
                                 <Link to="/checkout"> Checkout </Link>
                             </Text>
                            </Box>
                         </Box>
                   </Box>
             </Mask>
          </Box>
      </Box>
    );
  }
}

export default Brews;
