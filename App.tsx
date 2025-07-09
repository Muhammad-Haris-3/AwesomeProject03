import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

//For Validation
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be less than 16 characters')
    .required('Password is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    generatePassword(passwordLength);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
  };

  const generatePassword = (passwordLength: number) => {
    let charList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChars = '0123456789';
    const symbolsChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (upperCase) {
      charList += upperCaseChars;
    }
    if (lowerCase) {
      charList += lowerCaseChars;
    }
    if (number) {
      charList += numbersChars;
    }
    if (symbols) {
      charList += symbolsChars;
    }

    const passwordResult = createPassword(charList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumber(false);
    setSymbols(false);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={values => {
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View>
                  <View>
                    <Text style={styles.text}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                    <TextInput
                      style={styles.inputText}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Enter Password Length"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.text}>Include Lowercase Letters</Text>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="aqua"
                  />
                </View>
                <View>
                  <Text style={styles.text}>Include UpperCase Letters</Text>
                  <BouncyCheckbox
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="aqua"
                  />
                </View>
                <View>
                  <Text style={styles.text}>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor="aqua"
                  />
                </View>
                <View>
                  <Text style={styles.text}>Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="aqua"
                  />
                </View>

                <View>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={styles.text}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.text}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View>
            <Text>Result :</Text>
            <Text>Long Press To Copy</Text>
            <Text selectable style={styles.text}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
  errorText: {
    color: 'red',
  },
});

export default App;
