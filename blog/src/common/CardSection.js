import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={ [styles.containerStyle, props.style] }>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'rgba( 0, 0, 0, 0 )',
        position: 'relative'
    }
});

export { CardSection };