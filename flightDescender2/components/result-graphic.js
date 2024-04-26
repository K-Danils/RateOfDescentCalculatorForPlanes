import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ResultGraphic = props => {
  const {result} = props;
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      borderWidth: 5,
      borderRadius: 150, // Use half of the desired width and height
      borderColor: 'white',
      minWidth: 300,
      minHeight: 300,
    },
    icon: {
      fontSize: 60,
      color: 'white',
    },
    text: {
      marginTop: 20,
      fontSize: 60,
      textAlign: 'center',
      color: 'white',
      marginBottom: -2,
    },
    subText: {
      textAlign: 'center',
      color: 'white',
      marginBottom: 20,
    },
  });

  useEffect(() => {}, [result]);

  return (
    <View style={styles.container}>
      <View>
        <Icon name="plane-arrival" style={styles.icon} />
      </View>

      <Text style={styles.text}>{result}</Text>
      <Text style={styles.subText}>NM</Text>
    </View>
  );
};
