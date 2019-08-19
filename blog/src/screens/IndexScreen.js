import React, { useContext } from 'react';
import { 
    FlatList, 
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity,
    View 
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Button, CardSection, PostCard } from '../common';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ( props ) => {
    const { state, addBlogPost, deleteBlogPost } = useContext( Context );
    const { navigation } = props;


    return (
        <ImageBackground 
            source={ require( '../../assets/images/forest.jpg' ) }
            style={styles.container}
        >
            <View style={ styles.container }>
                <FlatList
                    data={ state }
                    keyExtractor={ blogPost => blogPost.id }
                    renderItem={ ({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Show', { id: item.id }) }
                            >
                                <PostCard item={ item } deleteBlogPost={ deleteBlogPost }/>
                            </TouchableOpacity>
                        );
                    } }
                />
            </View>
        </ImageBackground>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={ () => navigation.navigate('Create') }
            >
                <Feather name="plus" size={ 30 } style={ styles.navigationButton }/>
            </TouchableOpacity>
        )
    };
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
    },
    navigationButton: {
        marginRight: 10
    }
});

export { IndexScreen };

/** 
 * 
 *  alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
*/