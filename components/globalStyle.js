import { StyleSheet } from 'react-native';
// Stylesheet for styles accross the app
export const globalStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  containerAcross: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'blue', 
    textDecorationLine: 'underline'
  },
})