import React, { Component } from 'react';
import { View } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions/';

class LoginForm extends Component {
  emailChanged(value) {
    this.props.emailChanged(value);
  }
  passwordChanged(value) {
    // console.log('Value:', value);
    this.props.passwordChanged(value);
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Hoshi
          label={'Username'}
          // this is used as active border color
          borderColor={'#b76c94'}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
          backgroundColor={'#FFF'}
          onChangeText={this.emailChanged.bind(this)}
          value={this.props.email}
        />

        <Hoshi
          label={'Password'}
          // this is used as active border color
          borderColor={'#b76c94'}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
          backgroundColor={'#FFF'}
          onChangeText={this.passwordChanged.bind(this)}
          secureTextEntry
        />
        <Button
          style={{
            fontSize: 20,
            color: '#ffffff',
            backgroundColor: '#00cc00',
            padding: 20,
            marginTop: 10
          }}
          styleDisabled={{ color: 'red' }}
          onPress={() => console.log('Pressed!!')}
        >
        Login
      </Button>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 50,
    padding: 10,
  }
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
