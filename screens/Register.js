<<<<<<< HEAD
import React from 'react';
=======
import React  from 'react';
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';

import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';
import { Entypo } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);
<<<<<<< HEAD

class Register extends React.Component {
=======
class Register extends React.Component {

  constructor(props){
    super(props)
    this.state={
      email: "", 
      password: ""
    }
  }
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
  render() {
    const { navigation } = this.props;

    return (
      <DismissKeyboard>
<<<<<<< HEAD
        <Block flex middle backgroundColor="#ff6347">
          {/* <ImageBackground
            source={Images.RegisterBackground}
            style={styles.imageBackgroundContainer}
            imageStyle={styles.imageBackground}
          > */}
=======
        <Block flex middle>
         <ImageBackground
            source={Images.RegisterBackground}
            style={styles.imageBackgroundContainer}
            imageStyle={styles.imageBackground}
         >
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
            <Block flex middle>
              <Block style={styles.registerContainer}>
                <Block flex space="evenly">
                  <Block flex={0.4} middle style={styles.socialConnect}>
                    <Block flex={30.0} middle style={styles.logintext}>
                      <Text
                        style={{
                          fontFamily: 'montserrat-regular',
                          textAlign: 'center'
                        }}
                        color="#333"
                        size={30}
                      >
                        Login
                      </Text>
                    </Block>

                    <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>
                      {/* <GaButton
                        round
                        onlyIcon
                        shadowless
                        icon="twitter"
                        iconFamily="Font-Awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.625}
                        color={nowTheme.COLORS.TWITTER}
                        style={[styles.social, styles.shadow]}
                      />

                      <GaButton
                        round
                        onlyIcon
                        shadowless
                        icon="whatsapp"
                        iconFamily="Font-Awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.625}
                        color={nowTheme.COLORS.DRIBBBLE}
                        style={[styles.social, styles.shadow]}
                      />
                      <GaButton
                        round
                        onlyIcon
                        shadowless
                        icon="facebook"
                        iconFamily="Font-Awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.625}
                        color={nowTheme.COLORS.FACEBOOK}
                        style={[styles.social, styles.shadow]}
                      /> */}
                    </Block>
                  </Block>
                  {/* <Block flex={0.1} middle>
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        textAlign: 'center'
                      }}
                      muted
                      size={16}
                    >
                      or be classical
                    </Text>
                  </Block> */}
                  <Block flex={1} middle space="between" style={styles.butt}>
                    <Block center flex={0.9}>
                      <Block flex space="between">
                        <Block>
                        <Block width={width * 0.8}>
                            <Input
                              placeholder="Email"
                              keyboardType="email-address"
                              required
                              email
<<<<<<< HEAD
=======
                              onChangeText={(value) => this.setState({email: value})}
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                              style={styles.inputs}
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="email-852x"
                                  family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Input
                              placeholder="Password"
                              secureTextEntry
                              minLength={8}
<<<<<<< HEAD
=======
                              onChangeText={(value)=> this.setState({password: value})}
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                              style={styles.inputs}
                              iconContent={
                                <Entypo
                                  size={16}
                                  color="#ADB5BD"
                                  name="eye"
                                  family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          {/* <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Input
                              placeholder="Last Name"
                              style={styles.inputs}
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="caps-small2x"
                                  family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block> */}
                          
                          <Block
                            style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15}}
                            row
                            width={width * 0.75}
                          >
                            <Checkbox
                              checkboxStyle={{
                                borderWidth: 1,
                                borderRadius: 2,
                                borderColor: '#E3E3E3'
                              }}
                              color={nowTheme.COLORS.PRIMARY}
                              labelStyle={{
                                color: nowTheme.COLORS.HEADER,
                                fontFamily: 'montserrat-regular'
                              }}
                              label="I agree to the terms and conditions."
                            />
                          </Block>
                        </Block>
                        <Block center>
                          <Button 
                          color="primary" 
                          round style={styles.createButton}
                          onPress={() => navigation.navigate('App')}
                          >
                            <Text
                              style={{ fontFamily: 'montserrat-bold' }}
                              size={14}
                              color={nowTheme.COLORS.WHITE}
                            >
                              Login
                            </Text>
                          </Button>
                        </Block>
<<<<<<< HEAD
=======
                        {/* <Text>{"email=="+this.state.email}</Text> */}
                        <Text>{"email=="+this.state.email+ " password==="+this.state.password}</Text>
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
<<<<<<< HEAD
          {/* </ImageBackground> */}
=======
          </ImageBackground>
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
        </Block>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  imageBackground: {
    width: width,
    height: height
  },
  registerContainer: {
    marginTop: 65,
    width: width * 0.9,
    height: height < 812 ? height * 0.7 : height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 20,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  butt: {
    marginTop: 50

  },
  logintext: {
    marginTop: 80,
    fontSize: 30 

  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,

  },
  inputIcons: {
    marginRight: 18,
    color: nowTheme.COLORS.ICON_INPUT
  },
  inputs: {
   // marginTop: 30 ,
    borderWidth: 1.5,
    borderColor: '#264348',
    borderRadius: 21.5
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 90
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginHorizontal: 10
  }
});

export default Register;
