import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    text: {
      marginTop: 20,
      paddingHorizontal: 10,
      textAlign: 'center',
      fontFamily: theme.fontFamily,
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.loadingDescriptionColor,
    },
  });
