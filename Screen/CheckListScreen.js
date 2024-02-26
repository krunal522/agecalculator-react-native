import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Modal, Image, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';

const checklistscreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={[styles.shadowContainer, { width: 340, height: 150 }]}>
                                <Text style={{ margin: 10, textAlign: 'center', fontWeight: 'bold' }}>New List</Text>
                                <View style={{ borderBottomWidth: 1, marginLeft: 20, marginRight: 20 }}>
                                    <TextInput style={{ marginBottom: 10 }} placeholder="Enter List Name"></TextInput>
                                </View>

                                <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                                    <View style={{ marginHorizontal: 30, marginLeft: 20, marginTop: 20 }}>
                                        <Button onPress={() => setModalVisible(!modalVisible)} title="Cancel" color='#90ecf9' />
                                    </View>
                                    <View style={{ marginHorizontal: 135, marginTop: 20, marginLeft: 160 }}>
                                        <Button onPress={() => props.navigation.navigate('CheckListScreen')} title="Add" color='#90ecf9' />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <FAB
                onPress={() => setModalVisible(true)}
                style={styles.fab}
                big
                icon="plus"
                color="white"
            />
        </View>
    );
}
checklistscreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Essential Tools',
        headerStyle: {
            backgroundColor: 'rgba(3,220,203,255)',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'left',

        headerRight: (
            <View style={{}}>
                <Image
                    style={{ width: 25, height: 25, marginLeft: 21, marginTop: 5 }}
                    source={require('../assets/checklist.png')}
                />
                <Text style={{ color: 'white', marginRight: 25, fontWeight: 'bold', left: 5 }}>Checklist</Text>
            </View>
        ),
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTXT,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#90ecf9',
    },
    shadowContainer: {
        borderColor: 'white',
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 0
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 3,
        borderRadius: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        marginLeft: 100,
        bottom: 45,
        backgroundColor: "#90ecf9"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 100
    },
    modalView: {
        backgroundColor: "white",
        marginTop: 80,
    },
});
export default checklistscreen;