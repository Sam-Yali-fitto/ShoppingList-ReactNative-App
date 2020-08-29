import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Body,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Button,
} from 'native-base';

import { Context } from '../context/ShoppingListContext';
import IndexScreenStyles from '../../public/IndexScreenStyles';

const IndexScreen = (props) => {
  const { state, addShoppingListItem, deleteShoppingListItem, getShoppingList } = useContext(Context);
  

  useEffect(() => {
    getShoppingList();

    const listener = props.navigation.addListener('focus', () => {
      getShoppingList();
    });
    return () => {
      listener.remove;
    };
  }, []);
  
  const addToList = (message) => {
    Alert.prompt('Enter Item name:', message, [
      {
        text: 'OK',
        onPress: (text) => { 
          
          text = text.trim();
          if(text.length === 0)
          {
            addToList('Please enter a valid name!');
          }
          else if (isInStateCheck(text))
          {
            addToList('Item is already in your list.');
          } 
          else 
          {
            addShoppingListItem(text, 1, () => props.navigation.navigate('Index'));
          }
        },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Pressed Cancel!'),
        style: 'cancel',
      },
    ]);
  };

  const isInStateCheck = (newItemName) => {
    var isInState = false;
    for(var i in state){
      if ( state[i].name.toLowerCase() === newItemName.toLowerCase()) {
        isInState = true;
        break;
      }
    }
    
    return isInState;

  }
  return (
    <>
          <SafeAreaView style={IndexScreenStyles.scrollView}>
            <Container style={IndexScreenStyles.sectionContainer}>
              <View style={IndexScreenStyles.sectionContainer}>
              </View>
              <View style={{flex: 1}}>
                <FlatList
                    data={state}
                    keyExtractor={(shoppingListItem) => shoppingListItem.name}
                    renderItem={({item}) => (
                        <Card key={item.id}>
                          <CardItem key={item.id} style={{height: 50}}>
                            <Body>
                              <Text style={IndexScreenStyles.sectionDescription}>{item.name}</Text>
                            </Body>
                            <View>
                              <TouchableOpacity
                                  style={IndexScreenStyles.deleteButton}
                                  onPress={() =>  deleteShoppingListItem(item.id)}>
                                <Text style={IndexScreenStyles.deleteButtonText}>X</Text>
                              </TouchableOpacity>
                            </View>
                          </CardItem>
                        </Card>
                    )}
                />
              </View>
            </Container>
            <Footer>
              <FooterTab>
                <Button
                    info
                    style={IndexScreenStyles.addButton}
                    onPress={() => addToList()}>
                  <Text style={IndexScreenStyles.addButtonText}>+</Text>
                </Button>
              </FooterTab>
            </Footer>
          </SafeAreaView>
        </>
  );
};

export default IndexScreen;