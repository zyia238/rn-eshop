import {View, Text , StyleSheet , ScrollView , Image , Button , FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import CartItem from '../components/CartItem.component'

const Cart = ({navigation,route}) => {
    const cartItems = useSelector(state => state.cart.cartProducts)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()
    let transformedItemList = []
    for(let key in cartItems){
        transformedItemList.push(cartItems[key])
    }

    const handleOrderNow = () => {
        const newOrderItem = {
            date:new Date().toLocaleString(),
            cartItems,
            totalPrice
        }
        
        dispatch({
            type:'CREATE_ORDER',
            payload:newOrderItem
        })
        dispatch({
            type:'CLEAR_CART'
        })
    }

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total : <Text style={styles.amount}>${totalPrice}</Text></Text>
                <Button title='Order Now' onPress={handleOrderNow}/>
            </View>
            <View>
                <Text>CART ITEMS</Text>
                <FlatList data={transformedItemList} renderItem={({item})=>{
                    return <CartItem deletable {...item}/>
                }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        margin:20
    },
    summary:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:10,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:.26,
        borderRadius:10,
        backgroundColor:'white'
    },
    summaryText:{
        fontSize:18
    },
    amount:{}
})

export default Cart