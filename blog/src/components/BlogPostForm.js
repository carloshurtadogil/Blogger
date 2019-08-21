import React, { useContext, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, CardSection } from '../common';

const BlogPostForm = ( props ) => {
    const { initialValues, onSubmit } = props;
    const { cardSectionStyle, textInputStyle, titleStyle } = styles;

    const [ title, setTitle ] = useState( initialValues.title );
    const [ content, setContent ] = useState( initialValues.content );

    return (
        <ImageBackground 
            source={ require( '../../assets/images/palm.jpg' ) }
            style={styles.container}
        >
            <View>
                <Text style={ titleStyle }>Enter Title: </Text>

                <TextInput 
                    style={ textInputStyle }
                    value={ title }
                    onChangeText={ ( text ) => setTitle( text ) }
                />

                <Text 
                    style={ titleStyle }
                >
                    Enter Content:
                </Text>

                <TextInput 
                    style={ textInputStyle }
                    value={ content }
                    onChangeText={ ( text ) => setContent( text ) }
                    multiline = { true }
                    numberOfLines={ 6 }
                />

                <CardSection style={ cardSectionStyle }>
                    <Button 
                        onPress={ () => onSubmit( title, content ) }
                    >
                        Save Blog Post
                    </Button>
                </CardSection>
            </View>
        </ImageBackground>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export { BlogPostForm };