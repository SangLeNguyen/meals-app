import React from 'react';
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from 'react-native';


const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && 
    Platform.Version >=21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return(<TouchableOpacity 
        style={styles.gridItem} 
        onPress={props.onSelect}
    >   <View style={[styles.container, {backgroundColor: props.color}]}>
            <Text 
                style={styles.title} 
                numberOfLines={2}
            >{props.title}</Text>
        </View>
        
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex:1,
        margin:15,
        height: 150,
    },
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignItems: 'center'
    },
    title:{
        // fontFamily: 'open-sans-bold',
        fontsize: 22,
    }

});

export default CategoryGridTile;