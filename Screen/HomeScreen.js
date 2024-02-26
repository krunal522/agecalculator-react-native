import { StatusBar } from 'react-native';
import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import pencil from '../assets/note.png'
import counter from '../assets/counter.png'
import checklist from '../assets/checklist.png'
import calculator from '../assets/agecalculator.png'

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#a9a9a9" />
            <View style={{ borderWidth: 1, marginRight: 15, backgroundColor: '#18448b', marginTop: 20, marginLeft: 15, paddingBottom: 300, borderRadius: 5 }}>
                <View style={{ marginLeft: 15 }}>
                    <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('mathematics')}>
                            <Image source={counter} style={{ width: 30, height: 30, marginLeft: 10 }} />
                        </TouchableOpacity>
                        <View style={{ marginTop: 30 }}>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 12, right: 40 }}>Counter</Text>
                        </View>

                        <View style={{ marginLeft: 5 }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('EssentialTools')}>
                                <Image source={pencil} style={styles.icons} />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 12, alignSelf: 'center' }}>Easy Note</Text>

                        </View>

                        <View style={{ marginLeft: 40 }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Checklist')}>
                                <Image source={checklist} style={styles.icons} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ color: 'white', fontSize: 15, marginTop: 12, alignSelf: 'center' }}>Checklist</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Agecalculatorscreen')}>
                            <Image source={calculator} style={styles.icons} />
                        </TouchableOpacity>
                        <View style={{ marginTop: 30, }}>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 12, right: 65 }}>Age Calculator</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
}
HomeScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Smart Tools',
        headerStyle: {
            backgroundColor: 'rgba(24,68,139,255)',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'left',

        headerLeft: () => (
            <FontAwesome name="bars" style={{ padding: 15 }} size={30} color="white"
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}></FontAwesome>
        ),

    };
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    pencil: {
        width: 40,
        height: 40,
    },
    icons: {
        width: 30,
        height: 30,
        marginLeft: 15

    },
});
export default HomeScreen;