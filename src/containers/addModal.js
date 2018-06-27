import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, TextInput } from 'react-native';
import { Button } from '../components/commons';
import { addData } from '../actions';
import { connect } from 'react-redux';

class AddModal extends Component {
  state = {
    modalVisible: false,
    name: ''
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleSubmit = () => {
    const dataProps = this.props.dataProps;
    this.props.addData({
      id: Number(dataProps[dataProps.length-1].id) + 1,
      name: this.state.name
    });
    this.setState({modalVisible: false});

  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1 }}>
            {/* Modal Header */}
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 20 }}> Add User </Text>
            </View>

            {/* Modal Body*/}
            <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
              <Text style={{ fontSize: 15, marginBottom: 10 }}>Enter Name:</Text>
              <TextInput value={this.state.name} onChangeText={(name) => this.setState({name})} style={{height: 40, paddingLeft: 10 }} />
            </View>

            {/* Modal Footer */}
            <View style={{ paddingBottom: 20, height: 50, justifyContent: 'flex-end', flexDirection: 'row' }}>
              <Button
                  style={{ height: 40 }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
              >
                Cancel
              </Button>
              <Button
                  style={{ height: 40 }}
                  onPress={this.handleSubmit}
              >
                Submit
              </Button>
            </View>
          </View>
        </Modal>

        <View style={{ height: 30, width: 100, marginBottom: 10 }}>
          <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          >
          add user
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(null, {addData})(AddModal);
