import {View, Text , StyleSheet , FlatList} from 'react-native'
import OrderItem from '../components/OrderItem.component'
import { useSelector } from 'react-redux'


const Order = ({navigation,route}) => {
    const orders = useSelector(state => state.order.order)

    return (
        <FlatList data={orders} renderItem={({item})=>{
            return <OrderItem {...item}></OrderItem>
        }}/>
    )
}

const styles = StyleSheet.create({
    screen:{}
})

export default Order