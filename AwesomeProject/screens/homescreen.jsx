import React from 'react'
import {View,Text} from "react-native";

class HomeScreen extends React.Component {
    state = {
        year: 2016,
        name: 'Nader Dabit',
        colors: ['blue']
    }

    render() {
        return (
            <View>
                <Text>My dwa is: { this.state.name }</Text>
                <Text>The year is: { this.state.year }</Text>
                <Text>My colors are { this.state.colors[0] }</Text>
            </View>
            )
    }
}
export default HomeScreen