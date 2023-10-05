import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from '../context/BlogContext';

const CreateScreen = ( {navigation} ) => {
    const { addBlogPost } = useContext(Context);

    return <BlogPostForm onSubmit={(title,content,story,Date,Time)=>{
        addBlogPost(title,content,story,Date,Time);
        navigation.navigate("Index");
    }}/>;

};

export default CreateScreen;