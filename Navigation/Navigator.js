import { createAppContainer, } from 'react-navigation';
import React from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Screen/HomeScreen';
import CounterScreen from '../Screen/CounterScreen';
import EasyNoteScreen from '../Screen/EasyNoteScreen';
import checklistscreen from '../Screen/CheckListScreen';
import Agecalculator from '../Screen/AgeCalculator';
import EasyNote from '../Screen/EasyNote';
import EditEasyScreen from '../Screen/EditEasyNote';
import CheckListItems from '../Screen/CheckListItems';

const Navigator = createStackNavigator({
    Home: HomeScreen,
    mathematics: CounterScreen,
    EssentialTools: EasyNoteScreen,
    Checklist: checklistscreen,
    Agecalculatorscreen: Agecalculator,
    EasyNoteScreen: EasyNote,
    EditEasyNote: EditEasyScreen,
    CheckListScreen: CheckListItems,
    

});
const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons name="home" size={24} color="black"
                />
            )
        }
    },

},

);
export default createAppContainer(DrawerNavigation);