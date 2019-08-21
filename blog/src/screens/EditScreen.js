import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Button, CardSection } from '../common';
import BackgroundImage from '../../assets/images/palm.jpg';
import { BlogPostForm } from '../components';

const EditScreen = ({ navigation }) => {
    const { state } = useContext( Context );

    const blogPost = state.find( 
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    const { addBlogPost } = useContext( Context );

    return <BlogPostForm/>;
};

EditScreen.navigationOptions = () => {
    return {
        title: 'Edit'
    };
};

const styles = StyleSheet.create({ });

export { EditScreen };