import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Home</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});