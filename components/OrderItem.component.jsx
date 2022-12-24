import { useState } from 'react'

import { View ,Text , StyleSheet ,Button} from 'react-native'

import CartItem from './CartItem.component'

const OrderItem = ({totalPrice,date,cartItems}) => {
    const [isShowDetail , setIsShowDetail ] = useState(false)
    let transformedItemList = []
    for(let key in cartItems){
        transformedItemList.push(cartItems[key])
    }

    const hanldeShowDetail = () => {
        setIsShowDetail(prevState => !prevState)
    }
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${totalPrice}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Button title="Show Details" onPress={hanldeShowDetail}/>
            {
                isShowDetail && transformedItemList.map((cartItem,index) => <CartItem key={index} {...cartItem}></CartItem>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem:{
         shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:.26,
        borderRadius:10,
        backgroundColor:'white',
        margin:20,
        padding:10
    },
    summary:{
        flexDirection:"row",
        justifyContent:'space-between', 
        alignItems:'center'
    },
    totalAmount:{
        fontSize:16
    },
    date:{
        fontSize:16,
        color:'#888'
    }

})

export default OrderItem