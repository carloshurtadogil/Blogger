import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from '../common';

const ContentCard = ({ content, style }) => {
    console.log(style);
    return (
        <CardSection
                style={ style }
        >
            <Text>
                { content }
            </Text>
        </CardSection>
);
};

const styles = StyleSheet.create({ });

export { ContentCard };