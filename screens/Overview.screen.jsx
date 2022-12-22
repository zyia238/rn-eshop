import {useState,useEffect} from 'react'

import ProductItem from '../components/ProductItem.component'

import {View, Text , FlatList} from 'react-native'
import { useSelector } from 'react-redux'

const Overview = () => {
    const [products,setProducts] = useState(useSelector(state => state.products.availableProducts))

    useEffect(()=>{
        let newProducts = []
        products.forEach(item => {
            newProducts = [...newProducts,...item.items]
        })
        console.log(newProducts)
        setProducts(newProducts)
    },[])

    const productItem = ({item}) => {
        return <View>
            <ProductItem {...item}/>
        </View>
    }

    return (
        <FlatList data={products} renderItem={productItem}/>
    )
}

export default Overview