import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'sort_blogposts':
            return[...state].sort((a,b)=>{
                const dateA =new Date(
                    a.Date.split("/").reverse().join('-')
                ).getTime();
                const dateB =new Date(
                    b.Date.split("/").reverse().join('-')
                ).getTime();
                return dateA-dateB
            })
        case 'edit_blogpost':
            return state.map(
                (blogPost) => blogPost.id === action.payload.id ? action.payload : blogPost);
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id != action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                {
                    id: Math.floor(Math.random() *9999) ,
                    title: action.payload.title,
                    content: action.payload.content,
                    story:action.payload.story,
                    Date:action.payload.Date,
                    Time:action.payload.Time,
                },
            ];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title,content,story,Date,Time) => {
        dispatch({ 
            type: 'add_blogpost', 
            payload: {title, content,story,Date,Time} 
        });
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({ 
        type: 'delete_blogpost', 
        payload: id
    });
};

const editBlogPost = (dispatch) =>{
    return(id,title,content,story,Date,Time) =>{
        dispatch({
            type :'edit_blogpost',
            payload:{id,title,content,story,Date,Time}})
    }
}
const sortBlogPosts = (dispatch) =>{
    return() =>{
        dispatch({type: 'sort_blogposts'})
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, { addBlogPost, deleteBlogPost,editBlogPost,sortBlogPosts}, 
    []
);
