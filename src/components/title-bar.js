import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';

import {Font} from 'expo';

function capitalize (word) {
  var lower = word.toLowerCase();
  return lower.slice(0, 1).toUpperCase() + lower.slice(1);
}

class TitleBar extends Component {
    render() {
	var {activeFilter, showModal} = this.props;
	return (
	    <Header>
	        <Left>
  	            <Button transparent>
	                <Icon name='menu' />
	            </Button>
	        </Left>
		<Body>
		    <Title>Borrkoll</Title>
		</Body>
		<Right>
                    <Button onPress={showModal}>
		        <Icon name='ios-add' />
		    </Button>
		</Right>
	    </Header>	    
	);
    }    
}

export default TitleBar;
