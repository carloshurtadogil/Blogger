import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { BlogPostForm } from '../components';


const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext( Context );

    const blogPost = state.find( 
        (blogPost) => blogPost.id === id
    );

    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={ ( title, content ) => {
                editBlogPost( id, title, content, () => navigation.pop() );
            } }
        />
    );
};

EditScreen.navigationOptions = () => {
    return {
        title: 'Edit'
    };
};

const styles = StyleSheet.create({ });

export { EditScreen };