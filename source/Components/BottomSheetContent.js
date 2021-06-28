import React from "react";
import { View, StyleSheet, Text } from "react-native";
import theme from "../../assets/themes";
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomSheetContent = ({ handleClose }) => {
  return (
        <View style={styles.contentWrapper}>
            <TouchableOpacity 
                onPress={ () => alert('Create a New Album')}
                style = { styles.buttonLarge }    
            >
                <Text style = { styles.buttonTitle } >
                    Create a new album
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={ handleClose }
                style = { styles.buttonSmall }    
            >
                <Text style = {[
                    styles.buttonTitle,
                    styles.colorCancelButtom
                ]} >
                    Cancel
                </Text>
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    contentWrapper: {
        backgroundColor: theme.colors.lightGray,
        padding: theme.spacing.m,
        height: 250,
    },
    buttonLarge: {
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.xl,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center',
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4
    },
    buttonTitle: {
        ...theme.textVariants.h2
    },
    colorCancelButtom: {
        color: '#d00000' 
    },
    buttonSmall: {
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center',
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    }
});

export default BottomSheetContent;
