
import { StyleSheet, Text, View,FlatList,Alert } from 'react-native';
import{Link} from 'expo-router'
import {Stack} from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import {useState,useEffect} from 'react';
import {supabase} from '../lib/supabase';
const polls =[{id:1},{id:2},{id:3}];
export default function HomeScreen() {
  const [polls,setPolls]=useState([]);
  useEffect(()=>{
    const fetchPolls = async() => {
      console.log('Fetching...');
      
let { data , error } = await supabase
.from('polls')
.select('*')
   if(error)  {
    Alert.alert('Error fetching data');
   } 
   console.log(data); 
   setPolls(data); 
    };
    fetchPolls();

  },[]);
  return (

    <>
    <Stack.Screen 
    options={{title:'Polls', headerTitleAlign:'center',
headerRight:()=>(<Link href={"/polls/new"} ><AntDesign name="plus" size={20} color="gray" /></Link>),}}/>
<FlatList
data={polls}
contentContainerStyle={styles.container}
renderItem={({item})=>(
  <Link  href ={`/polls/${item.id}`} style={styles.pollContainer}> 
    <Text style={styles.pollTitle}>{item.id}: Example poll question</Text>
  </Link>
)}
/>
</>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding:10,
gap:5,
  },
pollContainer:{
  backgroundColor: 'white',
  padding:10,
  borderRadius:5,
 
},
pollTitle:{
fontWeight:'bold',
fontSize:16,
},
});