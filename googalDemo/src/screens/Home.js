import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {strings} from '../Helper/strings';
import {colors} from '../Helper/colors';
import {useDispatch} from 'react-redux';
const Home = ({navigation}) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [chekValidEmail, setchekValidEmail] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1096437375130-i4b1tigmgj3jvjfqv827s3pu1ihlfdsm.apps.googleusercontent.com',
    });
  }, []);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setemail(text);
    if (re.test(text) || regex.test(text)) {
      setchekValidEmail(false);
    } else {
      setchekValidEmail(true);
    }
  };

  const handleCheckPassword = value => {
    setpassword(value);

    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isValidLength = /^.{6,10}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 6-16 Characters Long.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }
    return null;
  };

  const registerEmailPress = async () => {
    const chekPassword = handleCheckPassword(password);
    if (email != '') {
      if (!chekValidEmail) {
        if (!chekPassword) {
          const isUsercreated = await auth()
            .createUserWithEmailAndPassword(email, password)
            // .then(response => {
            //   navigation.navigate('Sucsees');
            // })
            .catch(error => {
              alert(error?.message);
            });
          alert('Seccseful');
        } else {
          alert(chekPassword);
        }
      } else {
        alert('plese valid email id');
      }
    } else {
      alert('Plese enter email and password ');
    }
  };
  const pressGoogal = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // navigation.navigate('Sucsees');
    alert('Seccseful');
    // console.log('idToken', idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const onFacebookButtonPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  return (
    <ImageBackground
      source={require('/Users/mac/Documents/BR/googalDemo/src/assets/backGround.png')}
      style={styles.backImages}>
      <View style={styles.container}>
        <TextInput
          value={email}
          placeholder={strings.EnterEmail}
          onChangeText={text => handleCheckEmail(text)}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={text => handleCheckPassword(text)}
          placeholder={strings.EnterPassword}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={registerEmailPress}
          style={styles.onClikBotton}>
          <Text style={{color: colors.black}}>{strings.SignIn}</Text>
        </TouchableOpacity>
        <Text style={styles.textSign}>{strings.OrSigninwith}</Text>
        <View style={styles.pressabalContainer}>
          <TouchableOpacity
            onPress={() =>
              pressGoogal()
                .then(res => res)
                .catch(err => console.log('err err =>>>', err))
            }>
            <Image
              style={styles.imageLogo}
              source={require('/Users/mac/Documents/BR/googalDemo/src/assets/search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              onFacebookButtonPress()
                .then(res => console.log(res))
                .catch(error => console.log(error))
            }>
            <Image
              style={styles.imageLogo}
              source={require('/Users/mac/Documents/BR/googalDemo/src/assets/facebook.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  backImages: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.50)',
    height: 330,
    margin: 20,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderColor: 'rgba(2,250,210,0.8)',
    borderWidth: 1,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 15,
  },
  onClikBotton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: 'rgba(2,000,0,0.8)',
    borderWidth: 1,
    height: 40,
    width: '50%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  pressabalContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '40%',
    padding: 5,
    justifyContent: 'space-evenly',
  },
  textSign: {marginTop: 20, color: colors.white},
  imageLogo: {height: 25, width: 25},
});
