import React, { useContext } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Button, CardSection } from '../common';
import BackgroundImage from '../../assets/images/palm.jpg';
import { BlogPostForm } from '../components';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext( Context );


    return (
        <BlogPostForm />
    );
};

CreateScreen.navigationOptions = () => {
    return {
        title: 'Create'
    };
};

const styles = StyleSheet.create({});

export { CreateScreen };