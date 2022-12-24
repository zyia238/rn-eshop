import { useEffect } from 'react'

import {View, Text , StyleSheet , ScrollView , Image , Button} from 'react-native'
import {useDispatch} from 'react-redux'

const Detail = ({navigation,route}) => {
    useEffect(()=>{
        navigation.setOptions({title:route.params.myname})
    },[])
    
    const {name,price,imageUrl} = route.params
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch({
            type:'ADD_TO_CART',
            payload:name
        })
    }

    return (
        <ScrollView >
            <View>
                <Image style={styles.image} source={{uri:imageUrl}}/>
                <Button title='ADD TO CART' onPress={handleAddToCart}/>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>
                
                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem consectetur repellendus similique voluptatem temporibus corporis consequatur delectus dicta veniam porro explicabo iure, ratione provident libero iste non fuga rem?</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    price:{
        fontSize:14,
        color:'#888',
        textAlign:'center',
        marginVertical:8
    },
    textWrapper:{
        alignItems:'center'
    },
    title:{
        fontSize:18
    },
    description:{
        textAlign:'center',
        marginHorizontal:20
    }
})

export default Detail