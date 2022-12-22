import {View,Text,Image,Button,StyleSheet ,TouchableOpacity} from 'react-native'

const ProductItem = ({imageUrl,name,price ,navigation}) => {
    return (
    <TouchableOpacity onPress={()=>{navigation.navigate('detail',{name,price,imageUrl})}}>
        <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source = {{uri:imageUrl}} ></Image>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.buttons}>
                <Button title="View details" onPress={()=>{navigation.navigate('detail',{name,price,imageUrl})}}/>
                <Button title="Add to cart"/>
            </View>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        margin:20,
        height:300,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:.26,
        borderRadius:10,
        backgroundColor:'white'
    },
    imageWrapper:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontSize:18,
        marginVertical:4,
        textAlign:'center'
    },
    price:{
        fontSize:14,
        color:'#888',
        textAlign:'center'
    },
    textWrapper:{
        width:'100%',
        alignItems:'center',
        height:'15%'
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'25%',
        paddingHorizontal:20
    }
})

export default ProductItem