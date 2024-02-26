import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './../store/action/checkitem.action';

const CheckListItems = () => {
    const [inputText, setInputText] = useState('');

    const dispatcher = useDispatch();
    const todo = useSelector(gloableStore => gloableStore.todo);

    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    }
    const textChangeHandler = (enteredText) => {
        setInputText(inputText => enteredText);
    }

    const onPressHandler = () => {

        dispatcher(addTodo({
            id: Math.random().toString(),
            value: inputText
        }));

        setInputText('');
        // console.log(listItems);
    }
    const removeTask = (listId) => {
        // setListItems(listItems.filter((item) => item.id != listId));
        dispatcher(deleteTodo(listId))
    }
    const addedItems = ({ item }) => {
        return (
            <View>
                <View style={{ width: '90%', paddingRight: 2 }}>
                    <Text style={{
                        textDecorationLine: line ? 'line-through' : 'none',
                        color: 'black',
                        fontSize: 16,
                        padding: 5,
                        justifyContent: 'center',
                        marginHorizontal: 16,
                    }}>
                        {item.value}
                    </Text>
                </View>
                <TouchableOpacity onPress={cutIt} style={styles.listItem} >
                    <MaterialIcons style={{ marginTop: 5 }} onPress={() => {
                        Alert.alert(
                            "Item Delete",
                            "Are You Sure Want To Delete This Item",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                { text: "Yes", onPress: () => removeTask(item.id) }
                            ],
                        );
                    }} name="cancel" size={20} color="black" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{
                borderWidth: 2, borderRadius: 8, borderColor: '#90ecf9', padding: 8,
                marginVertical: 30, marginHorizontal: 15, display: 'flex', flexDirection: 'row'
            }}>
                <View style={{ width: '90%' }}>
                    <TextInput multiline={true} value={inputText} onChangeText={textChangeHandler} placeholder="Add Items To List"></TextInput>
                </View>
                <AntDesign onPress={onPressHandler} style={{ left: 5 }} name="pluscircle" size={24} color="black" />
            </View>
            <View>
                <FlatList
                    data={todo.checkList}
                    renderItem={addedItems}
                />
            </View>
        </View>
    );
}
CheckListItems.navigationOptions = (navData) => {
    return {
        headerTitle: 'Check list',
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

        headerLeft: (
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
    },
    header: {
        backgroundColor: '#90ecf9',
    },
    listItem: {
        color: "white",
        marginBottom: 5,
        fontSize: 10,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    itemText: {
        // right:120,
    }
});
export default CheckListItems;

