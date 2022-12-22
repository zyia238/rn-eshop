import {View, Text , StyleSheet , ScrollView , Image , Button , FlatList} from 'react-native'
import { useSelector } from 'react-redux'

import CartItem from '../components/CartItem.component'

const Cart = ({navigation,route}) => {
    const cartItems = useSelector(state => state.cart.cartProducts)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    let transformedItemList = []
    for(let key in cartItems){
        transformedItemList.push(cartItems[key])
    }

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total : <Text style={styles.amount}>${totalPrice}</Text></Text>
                <Button title='Order Now'/>
            </View>
            <View>
                <Text>CART ITEMS</Text>
                <FlatList data={transformedItemList} renderItem={({item})=>{
                    return <CartItem {...item}/>
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