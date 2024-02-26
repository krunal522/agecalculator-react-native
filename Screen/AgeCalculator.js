import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackgroundBase, Image, SafeAreaView, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const checklistscreen = () => {
    const [date, setDate] = useState();
    const [dateTo, setDateTo] = useState();
    const [allDateDiff, setAllDateDiff] = useState({
        DayDiference: 0,
        HoursDiference: 0,
        MinutesDiference: 0,
        YearDiference: 0,
    });
    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }
    function getDifferenceInHours(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60);
    }
    function getDifferenceInMinutes(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60);
    }
    function getDifferenceInSeconds(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / 1000;
    }
    function getDifferenceInYear(date1, date2) {
        var diff = (date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff / 365.25));
    }
    const ageCalculator = () => {
        //date//m d Y required  
        // we have d m Y 
        let dateFrom = date.split("-");
        let dateToNew = dateTo.split("-");

        const dateFromFomat = new Date(`${dateFrom[1]}/${dateFrom[0]}/${dateFrom[2]}`);
        const dateToFomat = new Date(`${dateToNew[1]}/${dateToNew[0]}/${dateToNew[2]}`);

        setAllDateDiff({
            DayDiference: getDifferenceInDays(dateFromFomat, dateToFomat),
            HoursDiference: getDifferenceInHours(dateFromFomat, dateToFomat),
            MinutesDiference: getDifferenceInMinutes(dateFromFomat, dateToFomat),
            SecondDiference: getDifferenceInSeconds(dateFromFomat, dateToFomat),
            YearDiference: getDifferenceInYear(dateFromFomat, dateToFomat)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 25, top: 15 }}>
                        Birthday Date
                    </Text>

                    <DatePicker
                        style={styles.datePickerStyle}
                        date={date}
                        onDateChange={(dateParam) => {
                            setDate(dateParam);
                        }}
                        mode="date"
                        format="DD-MM-YYYY"
                        minDate="01-01-1900"
                        maxDate="01-01-2100"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: 0,
                                marginRight: 15,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                paddingRight: 15,
                                borderRadius: 8,
                                borderColor: '#ff6e75',
                                borderWidth: 2,
                                padding: 20
                            },
                            dateText: {
                                fontWeight: 'bold',
                                color: 'black',
                                fontSize: 15,
                            }
                        }}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 25 }}>To</Text>
                    <DatePicker
                        style={styles.datePickerStyle1}
                        date={dateTo}
                        mode="date"
                        format="DD-MM-YYYY"
                        minDate="01-01-1900"
                        maxDate="01-01-2100"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(dateParamTo) => {
                            setDateTo(dateParamTo);
                        }}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: 0,
                                marginRight: 15,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                paddingRight: 15,
                                borderRadius: 8,
                                borderColor: '#ff6e75',
                                borderWidth: 2,
                                padding: 20
                            },
                            dateText: {
                                fontWeight: 'bold',
                                color: 'black',
                                fontSize: 15,
                            }
                        }}
                    />
                </View>
                <TouchableOpacity onPress={ageCalculator} style={{ marginLeft: 15, marginRight: 15 }}>
                    <Text style={{
                        borderRadius: 3, borderColor: '#ff6e75', borderWidth: 2, backgroundColor: '#ff6e75', borderRadius: 5,
                        textAlign: 'center', marginTop: 55, color: 'white', padding: 10, fontWeight: 'bold'
                    }}>AGE DIFFERENCE
                    </Text>
                </TouchableOpacity>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.displaytitle}>Days: {allDateDiff.DayDiference}</Text>
                    <Text style={styles.displaytitle}>Hours:{allDateDiff.HoursDiference}</Text>
                    <Text style={styles.displaytitle}>Minutes:{allDateDiff.MinutesDiference}</Text>
                    <Text style={styles.displaytitle}>Years:{allDateDiff.YearDiference}</Text>
                    <Text style={styles.displaytitle}>Seconds:{allDateDiff.SecondDiference}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
checklistscreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Date & Time',
        headerStyle: {
            backgroundColor: 'rgba(3,220,203,255)',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'left',

        headerRight: (
            <View style={{}}>
                <Image
                    style={{ width: 25, height: 25, marginLeft: 40, marginTop: 5 }}
                    source={require('../assets/agecalculator.png')}
                />
                <Text style={{ color: 'white', marginRight: 25, fontWeight: 'bold', left: 5 }}>Age Calculator</Text>
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
        backgroundColor: '#ff6e75',
    },
    datePickerStyle: {
        width: 320,
        marginTop: 20,
        alignSelf: 'center',
    },
    datePickerStyle1: {
        width: 320,
        alignSelf: 'center',
        marginVertical: 5
    },
    displaytitle: {
        padding: 3,
        fontWeight: 'bold',
        left: 15
    }
});
export default checklistscreen;