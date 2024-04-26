import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36D1DC',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
  subText: {
    color: 'white',
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 2,
    padding: 20,
    flex: 1,
  },
  cardContent: {
    padding: 16,
    paddingBottom: 30,
  },
  textFieldContainer: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    fontSize: 25,
    color: 'black', // Adjust the color to your preference
    width: 'auto',
  },
});
