import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackgroundBase, Image, TouchableOpacity, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { init, insertUser } from '../Helper/db'
import { ScrollView } from 'react-native-gesture-handler';

const easynote = (props) => {

    const [addedList, setAddedList] = useState([]);

    const [form, setForm] = useState({
        title: '',
        content: '',
    });
    useEffect(() => {
        init()
            .then(() => console.log("Created================>"))
            .catch(err => console.log("Error==============>", err));
    }, [])
    const changeHandler = (name, value) => {
        setForm({
            ...form,
            [name]: value
        });
    }
    const submitHandler = () => {
        // console.log(form);
        insertUser(form.title, form.content).then((response) => {
            console.log(response);
            console.log('User added successfully', response);
            props.navigation.navigate('EssentialTools');
        }).catch((err) => {
            console.log(err);
            console.log('User NOT ADDED', err);
        });
        // alert('sucessfully done');
        console.log('User Added');
        setForm({
            ...form,
            title: '',
            content: '',
        });
    }
    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 0.2, borderRadius: 5, margin: 10, padding: 8 }}>
                <TextInput value={form.title}
                    onChangeText={(value) => changeHandler('title', value)}
                    placeholder="Title"></TextInput>
            </View>

            <View style={styles.textAreaContainer}>
                <TextInput value={form.content}
                    onChangeText={(value) => changeHandler('content', value)}
                    multiline={true}
                    placeholder="Content"></TextInput>
            </View>

            <View>
                <Button style={{ backgroundColor: 'rgba(166,226,130,255)', margin: 10 }} mode="contained" onPress={submitHandler}>
                    Save
                 </Button>
            </View>

            <View>
                {
                    addedList.map((user) => {
                        return (
                            <View key={user.id}>
                                <View style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, marginBottom: 10, }}>
                                    {/* <Text> {user.id}</Text> */}
                                    <Text>{user.title} </Text>
                                    <Text>{user.content} </Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}
easynote.navigationOptions = (navData) => {
    return {
        headerTitle: 'Easy Note',
        headerStyle: {
            backgroundColor: 'rgba(3,220,203,255)',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'left',

        headerRight: (
            <TouchableOpacity>
                <Image
                    style={{ width: 25, height: 25, right: 15, marginTop: 5 }}
                    source={require('../assets/save1.png')}
                />
            </TouchableOpacity>
        ),
        headerStyle: styles.header,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: 'rgba(166,226,130,255)',
    },
    textAreaContainer: {
        padding: 5,
        borderWidth: 0.2,
        borderRadius: 5,
        margin: 10,
        padding: 8,
        height: 400
    },
    user: {
        padding: 10,
    }
});
export default easynote;