import React, { useContext } from 'react';
import { 
    FlatList, 
    ImageBackground, 
    StyleSheet, 
    Text,
    View 
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { Button, CardSection, PostCard } from '../common';

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext( Context );


    return (
        <ImageBackground 
            source={ require( '../../assets/images/forest.jpg' ) }
            style={styles.container}
        >
            <View style={ styles.container }>
                <CardSection>
                    <Button 
                        onPress={ addBlogPost }
                        style={ styles.button }
                    >
                        Add Post
                    </Button>
                </CardSection>
                
                <FlatList
                    data={ state }
                    keyExtractor={ blogPost => blogPost.id }
                    renderItem={ ({ item }) => {
                        return (
                            <PostCard item={ item } deleteBlogPost={ deleteBlogPost }/>
                        );
                    } }
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 5,
        height: 200
    },
    container: {
        flex: 1
    },
    inner: {
        backgroundColor: 'rgba(255, 255, 255, .9)',
        margin: 15
    }
});

export default IndexScreen;

/** 
 * 
 *  alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
*/