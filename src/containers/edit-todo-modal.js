import React, { Component } from 'react';
import {Modal} from 'react-native';
import {TodoState} from '../actions/todo-actions';
import update from 'immutability-helper'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {
    Container,
    Content,
    Header,
    Text,
    Left,
    Right,
    Button,
    Icon,
    Body,
    Item,
    Input,
    Form,
    Label,
    ListItem,
    Radio,
    List,
    Picker
} from 'native-base';


class EditTodoModal extends Component {
    constructor(props) {
	super(props)
	this.state = { selectState: false, todo: {} }
    }
    render() {
	const { todos, updateTodo, editModal, hideEditModal } = this.props;
	const index = _.findIndex(todos, (todo) => todo.id === editModal.id);
	const todo = todos[index]

	if(!todo) return <Container />
	
	const name = () => this.state.todo.name || todo.name;
	const address = () => this.state.todo.address || todo.address;
	const todoState = () => this.state.todo.state || todo.state;
	
	const setName = txt => {
	    this.setState(update(this.state, {
		todo: {
		    name: {$set: txt}
		}
	    }));
	}

	const setAddress = txt => {
	    this.setState(update(this.state, {
		todo: {
		    address: {$set: txt}
		}
	    }));
	}

	const setTodoState = st => {
	    this.setState(update(this.state, {
		todo: {
		    state: {$set: st}
		}
	    }));
	}
	
	const submit = () => {
	    updateTodo(todo.id, name(), address(), todoState());
	    hideEditModal();
	    this.setState(update(this.state, {
		todo: {$set: {}}
	    }));
	}

	const abort = () => {
	    hideEditModal();
	    this.setState(update(this.state, {
		todo: {$set: {}}
	    }));
	}
	
	return (
	    <Modal animationType="slide"
	           transparent={false}
	           visible={editModal.visible}
	           onRequestClose={() =>{}}>
	        <Container>
		    <Header>
	                <Left>
  	                    <Button transparent onPress={abort}>
	                        <Icon name='arrow-back' />
	                    </Button>
		        </Left>
		        <Body>
		            <Text>{todo.name}</Text>
		        </Body>
		        <Right />
		    </Header>
		    <Content>
		        <Form>
		            <Item stackedLabel last>
		                <Label>Name</Label>
                                <Input value={name()} onChangeText={setName} />
	                    </Item>
		
		            <Item stackedLabel last>
		                <GooglePlacesAutocomplete
    	                            placeholder="Search"
    	                            minLength={2}
                                    autoFocus={false}
                                    returnKeyType={'search'}
    	                            listViewDisplayed='auto'
	                            fetchDetails={true}
	                            renderDescription={(row) => row.description}
	                            getDefaultValue={() => {return ''}}
	                            query={{
					key: "AIzaSyBnyslwKBULreEbF3qbI8GKhv3cYYzDnic",
		    			language: "en",
				    }}
	                            styles={{
					description: { fontWeight: 'bold' },
					predefinedPlacesDescription: { color: '#1faadb' }
				    }}
	                            currentLocation={true}
	                            currentLocationLabel="Current location"
	                            GoogleReverseGeocodingQuery={{
				    }}
	                            GooglePlacesSearchQuery={{
					rankby: 'distance',
					types: 'food'
				    }}
	                            filterReverseGeocodingByTypes={[
					'locality',
					'administrative_area_level_3'
				    ]}
	                            debounce={200} />
		            </Item>
		
		            <Picker stackedLabel
	                        mode="dropdown"
	                        placoholder="Select One"
	                        selectedValue={todoState()}
	                        onValueChange={setTodoState} >

		                <Item label="Pool" value={TodoState.POOL} />
		                <Item label="Ongoing" value={TodoState.ONGOING} />
		                <Item label="Completed" value={TodoState.COMPLETED} />		
		            </Picker>
		
		            <Button full onPress={submit}>
		                <Text>Submit</Text>
		            </Button>
                        </Form>
		    </Content>
		</Container>
	    </Modal>
	);
    }
}

export default EditTodoModal;
