import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  const today = new Date();
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return (
    <View style={styles.headerContainer}>
      <View style={styles.dateContainer}>
        <View>
          <Text style={styles.bigDateText}>{today.getDate()}</Text>
        </View>
        <View>
          <Text style={styles.midDateText}>{months[today.getMonth()]}</Text>
          <Text style={styles.midDateText}>{today.getFullYear()}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.midDayText}>{weekdays[today.getDay()]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  bigDateText: {
    fontSize: 64,
  },
  midDateText: {
    fontSize: 20,
  },
  midDayText: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default Header;
