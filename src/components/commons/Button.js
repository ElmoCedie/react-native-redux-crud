import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { buttonStyle } = styles;
    const { style } = this.props;
    return(
        <TouchableOpacity onPress={this.props.onPress} style={{ ...buttonStyle, ...style }}>
          <Text> {this.props.children} </Text>
        </TouchableOpacity >
    )
  }
}

const styles = {
  buttonStyle: {
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 5,
    marginRight: 5,
  }
}

export { Button };
