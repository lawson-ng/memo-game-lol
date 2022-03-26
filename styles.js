import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  taskName: {
    fontWeight: 'bold',
    color: 'green',
  },
  taskWrapper: {
    borderWidth: 1,
    margin: 5,
  },
  taskContainer: {
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 15,
    padding: 5,
    flex: 1,
  },
  btn: {
    borderWidth: 1,
    width: 45,
    backgroundColor: 'green',
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  btnTitle: {
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
