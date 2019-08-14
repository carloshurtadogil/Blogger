import React, { useContext } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const blogPosts= useContext( BlogContext );


    return (
        <ImageBackground 
            source={ require( '../../assets/images/forest.jpg' ) }
            style={styles.container}
        >
            <View style={ styles.inner }>
                <Text>Index Screen</Text>

                <FlatList
                    data={ blogPosts }
                    keyExtractor={ blogPost => blogPost.title }
                    renderItem={ ({ item }) => {
                        return <Text>{ item.title }</Text>;
                    } }
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        backgroundColor: 'rgba(255, 255, 255, .7)'
    }
});

export default IndexScreen;

/** 
 * 
 *  alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
*/