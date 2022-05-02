import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaContainer} />
                <Text style={styles.title}>Reminder App</Text>
                <View>
                    <TouchableOpacity style={styles.taskbutton} onPress={() => { this.props.navigation.navigate('CreateTask') }}><Text>Create task</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        flex: 0.1,
        justifyContent: 'center',
        fontSize: RFValue(20),
        alignSelf: 'center'

    }, safeAreaContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    taskbutton: {
        backgroundColor: '#3CCDEF',
        justifyContent: 'center',
        height: RFValue(30),
        alignItems: 'center'
    }
})