import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,TextInput,TouchableOpacity,FlatList,Image} from 'react-native';
import COLORS from '../../src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import plants from '../../src/consts/plants';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const width=Dimensions.get("screen").width/2-30
const HomeScreen = ({navigation}) =>{
    const categories= ['POPULAR','ORGANIC','INDOOR','SYNTHETIC'];
  const [categoryIndex,setcategoryIndex]=React.useState(0)
    const Categorylist = () =>{

        return<View style={styles.categoryConatiner}>
          {categories.map((item,index)=>(
              <TouchableOpacity 
                key={index}
                activeOpacity={0.8}
                 onPress={()=>setcategoryIndex(index)}
                  >
              <Text
            
     style={styles.CategorieText,categoryIndex == index && styles.categorieSelected}>
                  {item}
              </Text>
              </TouchableOpacity>
          )


          )}
        </View>
    }

const Card = ({plant}) =>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("Details",plant)}>
    <View style={styles.card}>
       <View style={{alignItems:'flex-end',paddingTop:20,paddingRight:20}}>
           <View style={{
               width:30,
               height:30,
               borderRadius:15,
               justifyContent:'center',
               alignItems:'center',
               backgroundColor: plant.like
               ? 'rgba(245, 42, 42,0.2)'
               : 'rgba(0,0,0,0.2) ',
           }}>
           <Icon name ="favorite" size={18}    color={plant.like ? COLORS.red : COLORS.black}/>
           </View>
          
         
       </View>
       <View style={{height:100,alignItems:'center'}}>
               <Image  style={{flex:1,resizeMode:'contain'}} source={plant.img}/>
           </View>
           <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>{plant.name}</Text>
           <View 
           style={{
           justifyContent:"space-between",
           marginTop:5,
           flexDirection:'row'
           }}>
               <Text style={{fontSize:17,fontWeight:'bold'}}>${plant.price}</Text>
                  <View
                  style={{
                    width:25,
                    height:25,
                    backgroundColor:COLORS.green,
                    borderRadius:5,
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                  >
                     <Text style={{fontSize:22,
                        color:COLORS.white,
                         fontWeight:'bold'}}>+</Text>


                  </View>
           </View>
    </View>
    </TouchableOpacity>
    
    );
};

 return(
 <SafeAreaView style=
 {{

    flex:1,
    paddingHorizontal:20,
    backgroundColor:COLORS.white,

 }}>
     <View style={styles.header}>
         <View>
       <Text style={{fontSize:25, fontWeight:'bold'}}>
           Welcome To
       </Text>
       <Text style={{fontSize:38,fontWeight:'bold',color:COLORS.green }}> 
       Plant Shop</Text>
       </View>
       <Icon name="shopping-cart" size={28} />
     </View>
          <View style={{marginTop:30, flexDirection:'row'}}>
            <View style={styles.searchContainer}>
                <Icon name='search'  size={25} style={{marginLeft:20}} />
               <TextInput placeholder='Search' style={styles.input}/>
  </View>
  <View style={styles.sortbtn}>  
      <Icon name="sort" 
      size={30} 
      color={COLORS.white}
      />
  </View>
          </View>
          <Categorylist/>
          <FlatList
          columnWrapperStyle={{justifyContent:'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
              marginTop:10,
              paddingBottom:50
          }}         
          numColumns={2}
          data={plants}
          renderItem={({item})=> <Card plant={item} />}
          
          />
 </SafeAreaView>
 );   
}
const styles = StyleSheet.create({
header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
},
searchContainer:{
    height:50,
    backgroundColor:COLORS.light,
    borderRadius:10,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
},
input:{
    fontSize:18,
    fontWeight:"bold",
    color:COLORS.dark,
    flex:1
},
sortbtn:{
    marginLeft:10,
     height:50,
     width:50,
     backgroundColor:COLORS.green,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:10

},
categoryConatiner:{
    marginTop:30,
    marginBottom:20,
    flexDirection:"row",
    justifyContent:'space-between'
},
CategorieText:{
    fontSize:16,
    fontWeight:'bold',
    color:'gray'
},
categorieSelected:{
    color:COLORS.green,
    paddingBottom:5,
    borderBottomWidth:2,
    borderColor:COLORS.green
},
card:{
  height:225,
  backgroundColor:COLORS.light,
  width,
  marginHorizontal:2,
  borderRadius:10,
  marginBottom:20
}
})
export default HomeScreen;