import { View , StyleSheet , Text , TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

const CartItem = ({quantity, price, name}) => {
    const dispath = useDispatch()
    const deleteCartItem = () => {
        dispath({
            type:'DELETE_CART_ITEM',
            payload:name
        })
    }
    return (
        <View style={styles.itemWrapper}>
            <Text style={styles.quantity}>
                {quantity}x
            </Text>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.price}>
                ${price}
            </Text>
            <TouchableOpacity onPress={deleteCartItem}>
                <Ionicons name="ios-trash" size={23}  />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrapper:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%'
    },
    quantity:{
        color:'#888',
        marginRight:12
    },
    name:{
        fontSize:18
    },
    price:{
        fontSize:18
    }
})

export default CartItem