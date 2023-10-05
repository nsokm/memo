import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ( { route }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) =>  blogPost.id === route.params.id );
    return (
        <View style={styles.container}>
            <Text style={{fontSize:15 , color: "black",paddingLeft:10}}>{blogPost.id}
            </Text>
            <Text style={styles.title}>ห้องสอบ: {blogPost.title}</Text>
            <View style={styles.memoText}>
            <Text style={styles.subject}>ชื่อวิชา: {blogPost.content}</Text>
            <Text style={styles.subject}>เนื้อหา: {blogPost.story}</Text>
            <Text style={styles.subject}>วันเดือนปี: {blogPost.Date}</Text>
            <Text style={styles.subject}>เวลา: {blogPost.Time}</Text>

            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
        backgroundColor: "#EBDEF0"
    },
    memoText: {
        width: '100%',
        height: 400,
        padding: 10,
        
        borderWidth: 2,
        borderColor:"#C39BD3",
        backgroundColor:'#FACBEA',
        borderRadius: 20,
      },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color: "black",
        margin:10,
    },
    picture:{
        width:360,
        height:250,
        margin:10,
        marginBottom:15
    },

    subject:{
        fontSize: 25,
        padding:10,
        color: 'black',
    },
    
});

export default ShowScreen;