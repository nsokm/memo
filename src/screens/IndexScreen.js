import { Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = ({navigation}) => {
    
    const { state, addBlogPost, deleteBlogPost,sortBlogPosts} = useContext(Context);
   
    return(
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={() => sortBlogPosts()}>
            <MaterialIcons name="sort" size={30} color="purple" style={{marginLeft:10}}/>
            </TouchableOpacity>
            <FlatList
                data={state}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item }) => {
                    return (
                            <View style={{backgroundColor:'#FACBEA'}}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row2}>
                            <View style={styles.row}>
                                <Text 
                                style={[
                                    styles.title,]}> 
                                  {item.title}
                                </Text>
                                <TouchableOpacity 
                                onPress={() => Alert.alert(
                                    'Delete Alert',
                                    'Are you sure Delete Note',
                                    [
                                        {
                                            text:'Delete',
                                            onPress:()=>deleteBlogPost(item.id)
                                        },
                                        {
                                            text:'Cancel',
                                            onPress:()=> console.log('Error'),
                                            style:'cancel'
                                        }
                                    ]
                                )}>
                                    <Feather 
                                    style={styles.icon} 
                                    name="trash-2" color={'#512E5F'}/>   
                                </TouchableOpacity>   
                                
                            </View >
                            <Text  style={[styles.title,]}> {item.content}</Text>
                            <Text  style={[styles.subTitle]}> {item.Date}</Text>
                            <Text  style={[styles.subTitle]}> {item.Time}</Text>
                            </View>  
                        </TouchableOpacity>
                    </View>
                    );
                }}
            />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderColor: 'gray',  
    },
    row2:{
        padding:5,
        borderWidth: 1,
    },
    title: {
        fontSize: 20,
        marginLeft:20,
        paddingBottom:10,
    },
    subTitle: {
        fontSize: 16,
        marginLeft:20,
        paddingBottom:10,
    },
    icon: {
        fontSize: 24,
        marginLeft:20
    },
    container:{
        flex:1,
        backgroundColor:'#EBDEF0'
    },
    inputcontainer:{
        marginTop : 10,
        backgroundColor: "#f0eeee",
        height : 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:"row",
    },
    completedText:{
        flex:1,
        textDecorationLine:'line-through',
        marginRight:10,
    },
    picture:{
        width:360,
        height:250,
        margin:10,
        marginBottom:15
    },
});

export default IndexScreen;
