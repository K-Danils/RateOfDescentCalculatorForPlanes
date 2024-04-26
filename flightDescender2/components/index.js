import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, SafeAreaView} from 'react-native';
import {ResultGraphic} from './result-graphic';
import {styles} from './styles';

const defaultOptions = {
  altitude: {
    value: 39000,
    name: 'Altitude',
    unit: 'ft',
  },
  finalApproachPoint: {
    value: 3000,
    name: 'Final point',
    unit: 'ft',
  },
  weight: {
    value: 55,
    name: 'Weight',
    unit: 'tons',
  },
  tailWind: {
    value: 30,
    name: 'Tail Wind',
    unit: 'knots',
  },
  crossWind: {
    value: 0,
    name: 'Head Wind',
    unit: 'knots',
  },
  speed: {
    value: 290,
    name: 'Speed',
    unit: 'knots',
  },
  approachSpeed: {
    value: 210,
    name: 'Approach Speed',
    unit: 'knots',
  },
  groundSpeed: {
    value: 400,
    name: 'Ground Speed',
    unit: 'knots',
  },
};

export const Page = () => {
  const [values, setValues] = useState(defaultOptions);

  const calculateAltitude = values => {
    const altitudeToDescend = 35000;
    const verticalSpeed = 1000;
    let correctedAltitude = 0;

    if (values.altitude.value <= 35000) {
      correctedAltitude =
        ((values.altitude.value - values.finalApproachPoint.value) / 1000) * 3;
    } else {
      correctedAltitude =
        ((altitudeToDescend - values.finalApproachPoint.value) / 1000) * 3;
    }

    const correctedWeight = values.weight.value - 50;

    const correctedTailWind = Math.floor(values.tailWind.value / 10) * 2;
    const correctedCrossWind = -Math.floor(values.crossWind.value / 10) * 2;

    const correctedSpeed =
      Math.floor((values.speed.value - values.approachSpeed.value) / 10) * 1.5;

    const difference = values.altitude.value - altitudeToDescend;
    const minutesTilRestriction = difference / verticalSpeed;
    const correctedFL =
      values.altitude.value >= 35000
        ? (values.groundSpeed.value / 60) * minutesTilRestriction
        : 0;

    const result =
      correctedFL +
      correctedAltitude +
      correctedWeight +
      correctedTailWind +
      correctedCrossWind +
      correctedSpeed;

    return Math.round((result + Number.EPSILON) * 100) / 100;
  };

  const getVerticalSpeed = values => {
    const result = values.groundSpeed.value * 5;

    return Math.round((result + Number.EPSILON) * 100) / 100;
  };

  const onChange = (key, value, values) => {
    if (value == '') {
      value = 0;
    } else if (!isNaN(value)) {
      value = parseInt(value);
    } else {
      return;
    }
    const temp = {...values};
    temp[key].value = value;

    return temp;
  };

  useEffect(() => {}, [values]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ResultGraphic result={calculateAltitude(values)} />
      </SafeAreaView>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        <Text style={styles.text}>{getVerticalSpeed(values)}</Text>
        <Text style={styles.subText}>Vertical speed</Text>
      </View>

      <View style={[styles.card, {marginTop: 5}]}>
        <ScrollView>
          <View style={styles.cardContent}>
            {Object.keys(values).map(value => (
              <View key={value} style={styles.textFieldContainer}>
                <Text style={{color: '#444654'}}>
                  {values[value].name} ({values[value].unit})
                </Text>
                <TextInput
                  style={styles.textField}
                  value={
                    values[value].value === 0
                      ? ''
                      : values[value].value.toString()
                  }
                  keyboardType="numeric"
                  onChangeText={inputValue =>
                    setValues(onChange(value, inputValue, values))
                  }
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
