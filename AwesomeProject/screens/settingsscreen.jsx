import React from 'react'
import {View,Text} from "react-native";

class SettingsScreen extends React.Component {
    state = {
        year: 2016,
        name: 'Nader Dabit',
        colors: ['blue']
    }

    render() {
        return (
            <View>
                <Text>My name is: { this.state.name }</Text>
                <Text>The year is: { this.state.year }</Text>
                <Text>My dwa are { this.state.colors[0] }</Text>
            </View>
            )
    }
}
export default SettingsScreen;