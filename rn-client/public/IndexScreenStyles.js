import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

const IndexScreenStyles = StyleSheet.create({
    scrollView: {
      flex: 1,
      flexDirection: 'column',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    deleteButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#ff0000',
    },
    deleteButtonText: {
      color: '#ff0000',
      fontWeight: '600',
    },
    // footer: {
    //   flex: 1,
    //   flexDirection: 'row',
    //   width: 500,
    //   height: 100,
    //   justifyContent: 'center',
    //   alignItems: 'flex-end',
    //   alignContent: 'center',
    //   flexGrow: 0.1,
    //   flexShrink: 0.1,
    //   color: Colors.dark,
    //   fontSize: 12,
    // },
    addButton: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      flexGrow: 1,
      backgroundColor: '#87CEFA',
    },
    addButtonText: {
      alignSelf: 'center',
      fontSize: 25,
      fontWeight: '600',
    },
  });

  export default IndexScreenStyles;