import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import Avatars from './Avatars';
import theme from '../../assets/themes';
import ImageGallery from './ImageGallery';
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbum = ({ route }) => {

    const {album} = route.params;

    return(
        <ScrollView>
            <SharedAlbumTitleCard album= { album } />

            <View style={ styles.avatarsContainer }>
                <Avatars avatars={ album.avatars }/>
                <Text style={ styles.avatarsContainerText }>
                    {`${album.avatars.length} people`}
                </Text>
            </View>

            <ImageGallery images = { backgroundImages }/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    avatarsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightGray,
        marginVertical: theme.spacing.l,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.m
    },
    avatarsContainerText: {
        ...theme.textVariants.body3,
        color: theme.colors.black,
        opacity: 0.3
    }
});

export default SharedAlbum;