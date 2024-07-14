import {useLocalSearchParams} from 'expo-router';
import {Alert,View,Text,StyleSheet,Pressable,Button, ActivityIndicator} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import {useState,useEffect} from 'react';
import {Stack} from 'expo-router'
import {Poll} from '../../types/db'
import { supabase } from '../../lib/supabase';
export default function PollDetails(){
    const[selected,setSelected] = useState('React Native FTW');

    const{id} = useLocalSearchParams<{id:string}>();
    const [poll,setPoll] = useState<Poll>(null);
    useEffect(()=>{
        const fetchPolls = async() => {
          console.log('Fetching...');
          
    let { data , error } = await supabase
    .from('polls')
    .select('*')
    .eq('id',Number.parseInt(id))
    .single()
       if(error)  {
        Alert.alert('Error fetching data');
       } 
       setPoll(data); 
        };
        fetchPolls();
    
      },[]);

    const vote=()=>{
        console.warn('Vote',selected)
    }
if(!poll){
    return <ActivityIndicator/>
}

    return(
    <View style={styles.container}>
        <Stack.Screen options={{title :'Poll voting'}}/>
    <Text style={styles.question}>{poll.question}</Text>
    <View style={{gap:5}}>
    {poll.options.map(option =>(
     <Pressable onPress={()=> setSelected(option)} key={option} style={styles.optionContainer}>
        <Feather name={option === selected ? 'check-circle' : 'circle'} size={18} color={option === selected ? 'green':'gray'}/>
        <Text>{option}</Text>
     </Pressable> 
    ))}
    </View>
   <Button onPress={vote} title="Vote"/>
    </View>  
    
    );
}
const styles = StyleSheet.create({
container:{
    padding:10,
    gap:20,
},
question:{
    fontSize:20,
    fontWeight:'600',
},
optionContainer:{
    backgroundColor:'white',
    padding:10,
    borderRadius:5,
    flexDirection:'row',
   gap:10,
    alignItems:'center'
},
})