import React, { useContext } from 'react';
import { ImageBackground, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import { BlogPostForm } from '../components';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext( Context );


    return (
        <BlogPostForm 
            onSubmit={ ( title, content ) => {
                addBlogPost( title, content, () => navigation.navigate('Index') );
            } }
        />
    );
};

CreateScreen.navigationOptions = () => {
    return {
        title: 'Create'
    };
};

const styles = StyleSheet.create({});

export { CreateScreen };