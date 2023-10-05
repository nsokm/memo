import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
const BlogPostForm = ({ onSubmit,navigation,initialValues }) => {
    const [ title, setTitle ] = useState(initialValues.title);//ห้องสอบ
    const [content, setContent] = useState(initialValues.content);//ชื่อวิชา
    const [story, setStory] = useState(initialValues.story);//เนื้อหา
    const [Date, setDate] = useState(initialValues.Date);//วันที่
    const [Time, setTime] = useState(initialValues.Time);//เวลา
    return (
        <View style={{backgroundColor:'#EBDEF0', flex:1}}>
            <ScrollView>
            <Text style={styles.label}>ห้องสอบ </Text>
            <TextInput 
            style={styles.input} 
            value={title} 
            onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>ชื่อวิชา</Text>
            <TextInput 
            style={styles.input} 
            value={content} 
            //numberOfLines={4}
            onChangeText={(text) => setContent(text)}/>
             <Text style={styles.label}>เนื้อหา</Text>
            <TextInput 
            style={styles.input} 
            value={story} 
            //numberOfLines={4}
            multiline={true}
            onChangeText={(text) => setStory(text)}/>
             <Text style={styles.label}>วันเดือนปี</Text>
            <TextInput 
            style={styles.input} 
            value={Date}
            placeholder="DD/MM/YY" 
            //numberOfLines={4}
            onChangeText={(text) => setDate(text)}/>
            <Text style={styles.label}>เวลา</Text>
            <TextInput 
            style={styles.input} 
            value={Time}
            placeholder="ช่วงเวลาที่สอบ" 
            //numberOfLines={4}
            onChangeText={(text) => setTime(text)}/>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => onSubmit(title,content,story,Date,Time)}>
            <Text>
                Save
            </Text>
            
            </TouchableOpacity>
            
            
            </ScrollView>
        </View>
    );
};

BlogPostForm.defaultProps={
    initialValues:{title:'',content:'',story:'',Date:'',Time:''}  
};

const styles = StyleSheet.create({
    button : {
        marginTop:20,
        margin:10,
        padding:20,
        borderRadius:10,
        borderWidth:2,
        alignItems:'center',
        backgroundColor:'#C39BD3'
        
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight:'bold'
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 15,
        padding: 5,
        margin: 10,
        borderRadius:5,
        backgroundColor:'#FACBEA'
    },
    inputicon: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#000",
         marginBottom: 15,
        padding: 5,
        margin: 10,
        borderRadius:5
    },
    image: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 15,
        padding: 5,
        margin: 10,
        borderRadius:5
    },
    export:{
        backgroundColor:'#CC90D3',
        width:'60%',
        height:100,
        marginTop:500,
        borderRadius:10,
        marginLeft:80,
        paddingLeft:10
    },
    box:{
        marginTop:25,
        padding:10,
        borderRadius:5,
        width:50,
        height:50,
        marginLeft:20,
        borderWidth:1,
        marginHorizontal:50,
        backgroundColor:'#FFFF99',
        borderColor:'#FFFF99'  
    },
    cell: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    row: {
        flexDirection: 'row',
        //borderWidth:1
    },
    dot:{
        backgroundColor:'#D4D3DD',
        width:20,
        borderBottomRightRadius:5,
        borderTopRightRadius:5
    },
    Tableinput: {
        //flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        backgroundColor:'#fff',
    },
    rowSound: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //marginLeft: 10,
       // marginRight: 30,
        borderRadius:20,
        backgroundColor:'#D4D4D4',
        marginVertical:5,
        width:'85%',
        opacity:0.8
    },
    Recordfill: {
        flex: 1,
        margin: 15,
        //marginLeft:15
    },
    record:{
        flexDirection:'row',
        //marginVertical:10,
        backgroundColor:'#CC90D3', 
        width:'100%',
        //top:-200
    },
    picture:{
        width:320,
        height:350
    },
    checklistInputContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    checklistInput: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#000",
        padding: 5,
        borderRadius: 5,
    },
    checklistItem: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    checklistDeleteButton: {
        marginLeft: 10,
        padding: 5,
        backgroundColor: "red",
        borderRadius: 5,
    },
});

export default BlogPostForm;
