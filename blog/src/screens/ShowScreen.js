import React, { useContext } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CardSection } from '../common';
import { ContentCard } from '../components';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const { textStyle, titleStyle } = styles;

    const blogPost = state.find( (blogPost) => blogPost.id === navigation.getParam('id') );
    const data = [
        { id: '1', value: blogPost.title, style: [ textStyle, titleStyle ]  },
        { id: '2', value: blogPost.content, style: [textStyle]  }
    ];

    return (
        <View style={ styles.container }>
            <FlatList
                data={data}
                keyExtractor={ ( item ) => item.id }
                renderItem={ ({ item }) => <ContentCard content={ item.value } style={ item.style }/>}
            />
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={ () => {
                    navigation.navigate('Edit', { id: navigation.getParam('id') });
                } }
            >
                <EvilIcons 
                    name="pencil" 
                    size={ 35 }
                    style={ styles.navigationButton }
                />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    navigationButton: {
        marginRight: 10
    },
    textStyle: {
        margin: 10
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        flex: 1
    },
});

export { ShowScreen };