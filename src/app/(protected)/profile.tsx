import {View,Text,Button} from 'react-native';
import {useState,useEffect} from 'react';
import {supabase} from '../../lib/supabase';
import {Session} from '@supabase/supabase-js';
import {useAuth} from '../../providers/AuthProvider';
import {Redirect} from 'expo-router'
export default function ProfileScreen(){
const {user} = useAuth();

    return(
     <View>
        <Text>
User id: {user?.id}
        </Text>
        <Button title="Sign out" onPress={()=> supabase.auth.signOut()}/>
     </View>   
    )
}