import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackgroundBase, Image, TouchableOpacity, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { init, getSingleuser, updateUser } from '../Helper/db'

const easynote = (props) => {
    let userId = props.navigation.state.params.userId;
    useEffect(() => {
        getSingleuser(userId).then(response => {
            const { title, content } = response.rows._array[0];
            setForm({
                title: title,
                content: content,
                id: userId
            });
        }).catch((err) => {
            console.log(err);
        });
    }, [userId]);

    const [form, setForm] = useState({
        title: '',
        content: '',
        id: '',
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
        updateUser(form.title, form.content, userId).then(response => {
            console.log(response);
            props.navigation.navigate('EssentialTools');
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 0.2, borderRadius: 5, margin: 10, padding: 8, }}>
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
                    Update
                </Button>
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
});
export default easynote;