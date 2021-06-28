import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import theme from '../../assets/themes';

const ListImage = ({ image }) => {
    return(
        <Image 
            source = { image.background }
            style = { styles.galleryImage }
        />
    )
}

const ImageGallery = ({ images }) => {

    console.log(images);

    return (
        <View style={ styles.galleryConatiner }>
            <Text style={ styles.galleryText }>
                Photos
            </Text>

            <FlatList
                data = { images }
                keyExtractor = { item => item.id }
                numColumns = { 3 }
                scrollEnabled = { false }
                renderItem = { ( {item} ) => <ListImage image = {item} /> }
            
            />

        </View>
    );
};

const styles = StyleSheet.create({
    galleryConatiner: {
        alignItems: 'center',
        marginBottom: theme.spacing.l,
    },
    galleryText: {
        ...theme.textVariants.body3,
        color: theme.colors.gray
    },
    galleryImage: {
        height: theme.imageHeight.l,
        width: theme.imageHeight.m,
        margin: 2,
        borderRadius: theme.borderRadius.xs
    }
});

export default ImageGallery;