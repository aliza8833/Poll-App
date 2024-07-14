
import { StyleSheet, Text,FlatList,Alert } from 'react-native';
import{Link} from 'expo-router'
import {Stack} from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import {useState,useEffect} from 'react';
import {supabase} from '../lib/supabase';
import {Poll} from '../types/db'
export default function HomeScreen() {
const [polls,setPolls] = useState<Poll[]>([]);
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
headerRight:()=>(<Link href={"/polls/new"} ><AntDesign name="plus" size={20} color="gray" /></Link>),
headerLeft:()=>(<Link href={"./profile"} ><AntDesign name="user" size={20} color="gray" /></Link>)

}}/>
<FlatList
data={polls}
contentContainerStyle={styles.container}
renderItem={({item})=>(
  <Link  href ={`/polls/${item.id}`} style={styles.pollContainer}> 
    <Text style={styles.pollTitle}> {item.question}</Text>
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