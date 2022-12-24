import {useState,useEffect} from 'react'

import ProductItem from '../components/ProductItem.component'

import {View, Button , FlatList} from 'react-native'
import { useSelector ,useDispatch } from 'react-redux'

const Overview = ({navigation}) => {
    const [products,setProducts] = useState(useSelector(state => state.products.availableProducts))
    const dispatch = useDispatch()
    const dummy = useSelector(state => state.products.availableProducts)
    useEffect(()=>{
        let newProducts = []
        dummy.forEach(item => {
            newProducts = [...newProducts,...item.items]
        })
        setProducts(newProducts)
    },[useSelector(state => state.products.availableProducts)])

    const productItem = ({item}) => {
        const {name,price,imageUrl,id} = item

        
        return <View>
            <ProductItem {...item} navigation={navigation} toPage="Detail">
                <Button title="View details" onPress={()=>{navigation.navigate('Detail',{name,price,imageUrl})}}/>
                <Button title="Add to cart" onPress={()=>{
                            console.log(id,'0000')
                    dispatch({
                        type:'ADD_TO_CART',
                        payload:{
                            ...item
                        }
                    })
                }}/>
            </ProductItem>
        </View>
    }

    return (
        <FlatList data={products} renderItem={productItem}/>
    )
}

export default Overview