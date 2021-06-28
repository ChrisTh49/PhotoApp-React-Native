import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import theme from '../../assets/themes/index';
import Avatars from '../Components/Avatars';

const Card = (props) => {
    return (
        <ImageBackground source={ props.item.background } style= { styles.imageBackground }>
            <Pressable onPress={ () => props.navigation.navigate("Shared Album", {
                album: props.item
            }) }>
                <View style= { styles.imageContentContainer }>
                    <View>
                        <Text style= { styles.imageTitle }>
                            { props.item.title }
                        </Text>
                        <Text style= { styles.imageUser }>
                            { `Created by ${props.item.user}` }
                        </Text>
                    </View>

                    <View>
                        <Avatars avatars={ props.item.avatars }/>
                    </View>
                </View>
            </Pressable>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: 'cover',
        overflow: 'hidden',
        height: theme.imageHeight.s,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        justifyContent: 'center'
    },
    imageContentContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    imageTitle: {
        ...theme.textVariants.h1,
        color: theme.colors.white
    },
    imageUser:{
        ...theme.textVariants.h2,
        color: theme.colors.white
    },
})

export default Card;