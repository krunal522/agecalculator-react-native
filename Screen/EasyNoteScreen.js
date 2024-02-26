import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackgroundBase, Image, TouchableOpacity, ScrollView, Button, Alert, ListView } from 'react-native';
import { FAB } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAllUsers, getAllDeleteUsers } from '../Helper/db'

const easynotescreen = (props) => {
    const [addedList, setAddedList] = useState([]);
    const [currentDate, setCurrentDate] = useState('');

    const editUser = (id) => {
        props.navigation.navigate('EditEasyNote', { userId: id });
    }
    useEffect(() => {
        showDetailsHandler();
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        setCurrentDate(
            date + '-' + month + '-' + year
        );
    }, []);

    const deleteUser = (id) => {
        getAllDeleteUsers(id).then((response) => {
            showAllUser();
        }).catch((err) => {
        });
        showDetailsHandler();
    }
    const showDetailsHandler = () => {
        getAllUsers()
            .then(response => response)
            .then(data => {
                setAddedList(data.rows._array);
            })
            .catch((err) => {
                console.log('THere is error', err);
            });
    }
    return (
        <View style={styles.container}>
            {/* <Text>
                No Record Found
           </Text> */}

            <ScrollView style={{ marginBottom: 130 }}>
                <View>
                    {
                        addedList.map((value) => {
                            return (
                                <View style={{ marginTop: 20, }} key={value.id}>
                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, display: 'flex', flexDirection: 'row', borderWidth: 1, backgroundColor: "rgba(166,226,130,255)", borderRadius: 2 }}>
                                        <View style={{ marginTop: 12, marginLeft: 4, width: 150, }}>
                                            <Text>{value.title} </Text>
                                            <Text>{value.content}</Text>
                                        </View>

                                        <View style={{ marginTop: 2, flexDirection: 'row-reverse', width: 180 }}>
                                            <View style={{ marginLeft: 8 }}>
                                                <Text style={styles.textStyle}>
                                                    {currentDate}
                                                </Text>
                                                <AntDesign style={{ marginLeft: 20, marginBottom: 15 }} onPress={() => {
                                                    Alert.alert(
                                                        "Delete Note",
                                                        "Are You Sure Want To Delete This Note",
                                                        [
                                                            {
                                                                text: "Cancel",
                                                                onPress: () => console.log("Cancel Pressed"),
                                                                style: "cancel"
                                                            },
                                                            { text: "Yes", onPress: () => deleteUser(value.id) }
                                                        ],
                                                    );
                                                }} name="delete" size={24} color="black" />
                                            </View>
                                            <View style={{ marginTop: 20 }}>
                                                <FontAwesome5 onPress={() => {
                                                    editUser(value.id)
                                                }} style={{ left: 20 }} name="edit" size={24} color="black" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
            <FAB
                style={styles.fab}
                big
                icon="plus"
                color="white"
                onPress={() => props.navigation.navigate('EasyNoteScreen')}
            />
        </View>
    );
}
easynotescreen.navigationOptions = (navData) => {
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
                    style={{ width: 25, height: 25, marginLeft: 20, marginTop: 5 }}
                    source={require('../assets/note.png')}
                />
                <Text style={{ color: 'white', marginRight: 15, fontWeight: 'bold' }}>Easy Note</Text>
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
        backgroundColor: 'rgba(166,226,130,255)',
    },
    floatActionButton: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        marginLeft: 100,
        bottom: 45,
        backgroundColor: "rgba(166,226,130,255)"
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
        right: 18,
        alignSelf: 'center'
    },
});
export default easynotescreen;