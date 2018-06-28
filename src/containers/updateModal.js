import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, TextInput } from 'react-native';
import { Button } from '../components/commons';
import { updateData } from '../actions';
import { connect } from 'react-redux';

class updateModal extends Component {
  constructor(props){
    super(props);

  }

  state = {
    modalVisible: false,
    name: this.props.name
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleSubmit = () => {
    const dataProps = this.props.dataProps;
    this.props.updateData({
      id: dataProps.id,
      name: ''
    });
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
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
              <TextInput placeholder={this.props.name} onChangeText={(name) => this.setState({name})} style={{height: 40, paddingLeft: 10 }} />
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

        <View>
          <Button
          style={{ width: 60 }}
          onPress={() => {
            this.setModalVisible(true);
          }}
          >
          Update
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(null, {updateData})(updateModal);
