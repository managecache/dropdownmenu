import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenIndex: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}> React Native Picker Demo </Text>
        <Picker
        style={styles.pickerstyles}
        selectedValue = {this.state.language}
        onValueChange={(
          itemValue, itemPosition
        ) => this.setState({
          language: itemValue, choosenIndex: itemPosition
        })}
        >
          <Picker.Item label="Android" value="Android"/>
          <Picker.Item label="Java" value="Java"/>
          <Picker.Item label="Kotlin" value="Kotlin"/>
        </Picker>

        <Text style={styles.text1}>
          {"Index = " + this.state.choosenIndex + "You have choosen " + this.state.language}
        </Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  }, 
  text1: {
    margin: 10, 
    fontSize: 20, 
    textAlign: "center"
  }, 
  pickerstyles: {
    height: 100, 
    width: "80%", 
    color: "#000", 
    justifyContent: "center"
  }

})
