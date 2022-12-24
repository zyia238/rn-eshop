import { View , Text , ScrollView , Button} from 'react-native'
import { useSelector , useDispatch } from 'react-redux'

import ProductItem from '../components/ProductItem.component'

const Admin = ({navigation}) => {
    const userProducts = useSelector(state => state.user.userProducts)
    const dispatch = useDispatch()
    return (
        <ScrollView>
            {
                userProducts.map((item,index) => {
                    const {name,price,imageUrl,id} = item
                    console.log(id,'ddd')
                    return  <ProductItem {...item} key={index} navigation={navigation} toPage="Edit">
                        <Button title="Edit" onPress={()=>{navigation.navigate('Edit',{name,price,imageUrl,id})}}/>
                        <Button title="Delete" onPress={()=>{
                            dispatch({
                                type:'DELETE_ITEM',
                                payload:name
                            })
                            dispatch({
                                type:'DELETE_ITEM_CART',
                                payload:name
                            })
                        }}/>
                    </ProductItem>
                })
            }
        </ScrollView>
    )
}

export default Admin