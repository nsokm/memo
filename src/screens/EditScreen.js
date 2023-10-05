import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route,navigation }) => {
    const {state,editBlogPost} = useContext(Context);
    const id = route.params.id;
    //ข้อมูลทั้งหมดที่เรามี
   const blogPost = state.find((blogPost)=> blogPost.id === id);
    //console.log(memo)
    //console.log(id);
    return (
    <BlogPostForm 
    initialValues={{
        title:blogPost.title,
        content:blogPost.content,
        story:blogPost.story,
        Date:blogPost.Date,
        Time:blogPost.Time,
    }}
    onSubmit={(title,content,story,Date,Time) =>{
        editBlogPost(id, title,content,story,Date,Time);
        navigation.pop();
    }}
    />
    )
};

export default EditScreen;