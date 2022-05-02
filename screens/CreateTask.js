import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import db from '../config'

export default class CreateTask extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }
    render() {


        return (<View style={styles.container}>

            <SafeAreaView style={styles.safeAreaContainer} />
            <Text style={styles.title}>Reminder App</Text>
            <View style={styles.inputcontainer}>
                <TextInput style={styles.inputbox} placeholder={'Task Title'} onChangeText={text => { this.setState({ tasks: [text] }) }} />
                <TextInput style={styles.inputbox} placeholder={'Task 1'} onChangeText={text => { this.setState({ tasks: [text] }) }} />
                <TextInput style={styles.inputbox} placeholder={'Task 2'} onChangeText={text => { this.setState({ tasks: [text] }) }} />
                <TextInput style={styles.inputbox} placeholder={'Task 3'} onChangeText={text => { this.setState({ tasks: [text] }) }} />
                <TouchableOpacity style={styles.button}><Ionicons name="add" size={RFValue(12)} color="black" /><Text>Add Task</Text></TouchableOpacity>

            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.submitbotton} onPress={() => { this.handletasks() }}><Text>Submit Task </Text><Ionicons name="play-forward-outline" size={RFValue(12)} color="black" /></TouchableOpacity>
            </View>

        </View>)
    }
    handletasks = () => {
        db.ref('tasks/').set()
    }
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }, container: {
        flex: 1
    },
    title: {
        flex: 0.1,
        justifyContent: 'center',
        fontSize: RFValue(20),
        alignSelf: 'center'

    }, inputbox: {
        borderColor: 'black',
        borderWidth: RFValue(1),
        height: RFValue(35),
        paddingLeft: RFValue(10),
        width: '90%',
        alignSelf: 'center',
        fontSize: RFValue(12),
        marginBottom: RFValue(25)
    }, inputcontainer: {
        flex: 0.7
    },
    buttoncontainer: {
        flex: 0.2
    },
    button: {
        justifyContent: 'center',
        fontSize: RFValue(20),
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: RFValue(1),
        height: RFValue(35),
        width: '90%',
        flexDirection: 'row'
    },
    submitbotton: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: RFValue(20),
        borderWidth: RFValue(1),
        width: '50%',
        height: RFValue(50),
        flexDirection: 'row'

    }
})