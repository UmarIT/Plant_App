import React from 'react';
import {View,Text, SafeAreaView,StyleSheet,Image} from 'react-native';
import COLORS from '../../src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailScreen = ({navigation,route}) =>{
  const plant=route.params;
 return(
     <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
     <View style={styles.header}>
         <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack("Home")}/>
         <Icon name="shopping-cart"  size={28}/>
     </View>
     <View style={styles.imgcontainer}>
     <Image source={plant.img}  style={{resizeMode:'contain' ,flex:1}}/>
     </View>
     <View style={styles.DetailContainer}>
        <View style={{
            marginLeft:20,
            flexDirection:'row',
            alignItems:'flex-end',
        }}>
            <View style={styles.line} />
                 <Text style={{fontSize:18,fontWeight:'bold'}}>Best Choice</Text>
                 </View>
           <View style={{ marginTop:20,marginLeft:20,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
               <Text style={{fontSize:18,fontWeight:'bold',}}>{plant.name}</Text>

               <View style={styles.pricetag}>
                         <Text style={{marginLeft:15,fontSize:17,color:COLORS.white,fontWeight:'bold',marginTop:5}}>${plant.price}</Text>
               </View>
        </View>
        <View style={{paddingHorizontal:20,marginTop:10}}>
           <Text style={{fontSize:18,fontWeight:'bold',}}>About</Text>
      <Text style={{paddingTop:15,color:"grey",fontSize:16,lineHeight:22}}>{plant.about}</Text>
               <View style={{
                   marginTop:20,
                   flexDirection:'row',
                   justifyContent:'space-between'
                   }}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <View style={styles.borderbtn}>
                       <Text style={styles.btntext}>-</Text>
                       </View>
                       <Text style={{fontWeight:'bold',fontSize:20,marginHorizontal:10}}>1</Text>
                     <TouchableOpacity>
                          <View style={styles.borderbtn}>
                       <Text style={styles.btntext}>+</Text>
                       </View>
                       </TouchableOpacity>
                      
                      
                       </View>
                       <View style={styles.buybtn}>
                           <Text style={{
                               fontSize:18,
                            fontWeight:'bold',
                            color:COLORS.white,
                           
                             
                            }}>Buy</Text>
                       </View>

               </View>

        </View>

     </View>

 
     </SafeAreaView>
 );   
}
const  styles=StyleSheet.create({
    header:{
    marginTop:20,
    paddingHorizontal:20,
    flexDirection:"row",
    justifyContent:'space-between'
    },
    imgcontainer:{
        marginTop:20,
        flex:0.45,
        justifyContent:'center',
        alignItems:'center'
    },
    DetailContainer:{
        flex:0.55,
        backgroundColor:COLORS.light,
        borderRadius:20,
        marginTop:30,
        marginHorizontal:7,
        marginBottom:7,
        paddingTop:30
    },
    line:{
        width:25,
        height:2,
        backgroundColor:COLORS.dark,
        marginRight:3,
        marginBottom:5
    },
    pricetag:{
        width:80,
        height:40,
        backgroundColor:COLORS.green,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent:'center'

    },
    borderbtn:{
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5,
        height:40,
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },
    btntext:{
        fontSize:28,
        fontWeight:'bold'
    },
    buybtn:{
                 width:150,
                 height:50,
                 backgroundColor:COLORS.green,
                 justifyContent:'center',
                 alignItems:'center',
                 borderRadius:30
    }
})
export default DetailScreen;