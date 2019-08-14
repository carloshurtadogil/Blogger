import React from 'react';
import { 
    StyleSheet, 
    Text,
    TouchableOpacity,
    View 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const PostCard = ({ deleteBlogPost, item }) => {
    return (
        <View
            style={ styles.row }
        >
            <Text style={ styles.title }>
                { item.title }
            </Text>

            <TouchableOpacity
                onPress={ () => deleteBlogPost(item.id) }
            >
                <Feather name="trash" style={ styles.icon }/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        fontSize: 24
    },
    row: {
        backgroundColor: 'rgba(255, 255, 255, .9)',
        borderColor: 'gray',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 20
    }
});

export { PostCard };