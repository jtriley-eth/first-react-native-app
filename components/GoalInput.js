import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }


    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="cancel" color="red" onPress={props.onCancel} /></View>
                    <View style={styles.button}><Button title="add" onPress={addGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        padding: 4,
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '80%',
      },
      button: {
          width: '30%',
      },
});


export default  GoalInput;