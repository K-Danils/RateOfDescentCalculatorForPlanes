import { StyleSheet, Text, View } from 'react-native';
import { Page } from './components';

export default function App() {

  return (
    <View style={styles.container}>
      <Page />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
