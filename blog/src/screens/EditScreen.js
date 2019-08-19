import React, { useContext, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Button, CardSection } from '../common';
import BackgroundImage from '../../assets/images/palm.jpg';

const EditScreen = ({ navigation }) => {
    const { cardSectionStyle, textInputStyle, titleStyle } = styles;

    const { state } = useContext( Context );

    const blogPost = state.find( 
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    const [ title, setTitle ] = useState( blogPost.title );
    const [ content, setContent ] = useState( blogPost.content );
    const { addBlogPost } = useContext( Context );

    return (
        <ImageBackground 
            source={ require( '../../assets/images/palm.jpg' ) }
            style={styles.container}
        >
            <View>
                <Text style={ titleStyle }>Edit Title: </Text>

                <TextInput 
                    style={ textInputStyle }
                    value={ title }
                    onChangeText={ ( newTitle ) => setTitle( newTitle ) }
                />

                <Text style={ titleStyle }>Enter Content:</Text>

                <TextInput 
                    style={ textInputStyle }
                    value={ content }
                    onChangeText={ ( newContent ) => setContent( newContent ) }
                    multiline = { true }
                    numberOfLines={ 6 }
                />

                <CardSection style={ cardSectionStyle }>
                    <Button 
                        //onPress={ () => {
                        //    addBlogPost( title, content, () => {
                        //       navigation.navigate('Index');
                        //    });
                        //} }
                    >
                        Save
                    </Button>
                </CardSection>
            </View>
        </ImageBackground>
    );
};

EditScreen.navigationOptions = () => {
    return {
        title: 'Edit'
    };
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 15
    },
    container: {
        flex: 1
    },
    textInputStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        color: 'white',
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
        padding: 5
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 8
    }
});

export { EditScreen };