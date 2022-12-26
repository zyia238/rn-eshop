import { useState , useEffect , useCallback} from 'react'
import { View , Text , TextInput ,StyleSheet , ScrollView} from 'react-native' 
import { useSelector ,useDispatch } from 'react-redux'
import MyHeaderButtons from "../components/HeaderButton.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Edit = ({navigation,route}) => {
    const dispatch = useDispatch()
    const [productName , setProductName] = useState('')
    const [productPrice , setProductPrice] = useState('')
    const [productImage , setProductImage] = useState('')

    const products = useSelector(state => state.user.userProducts)

    const submittingHandler = useCallback((name,price,imageUrl,id) => {
        if(route.params){
             dispatch({
                type:"UPDATE_USER_PRODUCT",
                payload:{
                    name,
                    price,
                    imageUrl,
                    id
                }
            })
            dispatch({
                type:"UPDATE_CART_PRODUCT",
                payload:{
                    name,
                    price,
                    imageUrl,
                    id
                }
            })
        }else{
            dispatch(async dispatch=>{
                const response = await fetch('https://rn-eshop-b9a9c-default-rtdb.firebaseio.com/products.json',{
                    method:'POST',
                    ['Content-Type']:'application/json',
                    body:JSON.stringify({
                        name,price,imageUrl,id
                    })
                })

                const res = await response.json()
                console.log(res)
                    dispatch({
                    type:"ADD_NEW_PRODUCT",
                    payload:{
                        res
                    }
                })
            })
        }
           
        }
    ,[])

    useEffect(()=>{
        navigation.setOptions({
             headerRight: () => {
                  return (
                    <HeaderButtons HeaderButtonComponent={MyHeaderButtons}>
                      <Item
                        title="submit"
                        iconName="ios-checkmark"
                        onPress={() => {
                          submittingHandler(productName,productPrice,productImage,route.params?.id)
                        }}
                      />
                    </HeaderButtons>
                  );
                },
        })
    },[productName,productPrice,productImage])

    useEffect(()=>{
         if(route.params?.name){
            navigation.setOptions({
                headerTitle:'Edit'
            })
            const target = products.find(item => item.name === route.params.name)
            
            setProductName(target.name)
            setProductPrice(target.price + '')
            setProductImage(target.imageUrl)
        }else{
            navigation.setOptions({
                headerTitle:'Add Product'
            })
        }
    },[])

    return (
        <ScrollView >
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} value={productName} onChangeText={(newVal)=>{setProductName(newVal)}}/>
                </View>
                <View style={styles.formControl}>
                    <Text  style={styles.label}>Price</Text>
                    <TextInput  style={styles.input} value={productPrice} onChangeText={(newVal)=>{setProductPrice(newVal)}}/>
                </View>
                <View style={styles.formControl}>
                    <Text  style={styles.label}>Image</Text>
                    <TextInput  style={styles.input} value={productImage} onChangeText={(newVal)=>{setProductImage(newVal)}}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        margin:20,
    },
    formControl:{
        width:'100%'
    },
    label:{
        marginVertical:8
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    }
})

export default Edit