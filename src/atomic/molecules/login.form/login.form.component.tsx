import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import FormInput from '../form.input/form.input.component';
import {EMAIL_REGEX} from '../../../utils/Constants';
import MCButton from '../../atoms/button/button.component';
import TextHeader from '../../atoms/text/text.component';
import {LoginData} from '../../../modals';
interface LoginFormProps {
  providerName: string;
  onConnect: (values: LoginData) => void;
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  providerName,
  onConnect,
  error,
}) => {
  const [mask, setMask] = useState<boolean>(true);
  //   const formikRef = useRef<FormikProps<LoginForm>>(null);

  const PointsSchema = Yup.object().shape({
    email: Yup.string()
      .matches(EMAIL_REGEX, 'Enter a valid email')
      .required('email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValuesDefault = {
    email: '',
    password: '',
  };

  const onSubmit = async (values: LoginData) => {
    onConnect(values);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Formik
            validationSchema={PointsSchema}
            initialValues={initialValuesDefault}
            initialErrors={{email: '', password: ''}}
            onSubmit={onSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }: any) => (
              <View>
                <Text>User Name</Text>
                <FormInput
                  testId="form-email-text-input"
                  errors={errors.email}
                  handleBlur={handleBlur('email')}
                  handleChange={handleChange('email')}
                  touched={touched.email}
                  values={values.email}
                  placeholder={'Email'}
                  inputTextStyle={styles.emailBox}
                />

                <Text style={styles.marginTop}>Password</Text>
                <FormInput
                  testId="form-password-text-input"
                  errors={errors.password}
                  handleBlur={handleBlur('password')}
                  handleChange={handleChange('password')}
                  touched={touched.password}
                  values={values.password}
                  placeholder={'Password'}
                  inputTextStyle={styles.emailBox}
                  inputBoxStyle={styles.passwordBox}
                  secureText={mask}
                  rightIcon={true}
                  rightIconClick={() => setMask(!mask)}
                />
                <View style={styles.condition}>
                  <TextHeader
                    text={`By clicking the button below, you agree to the Terms and Conditions for connecting your ${providerName} account.`}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <MCButton
                    title={'Connect'}
                    onPress={handleSubmit}
                    btnStyle={styles.btnStyle}
                    buttonText={styles.btnText}
                    gradientBorder={0}
                  />
                </View>
                {error && <Text style={styles.errorText}>{error}</Text>}
              </View>
            )}
          </Formik>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  formContainer: {
    flex: 1,
    height: '100%',
  },
  passwordBox: {flex: 1, height: 44, backgroundColor: '#F8F8F8', marginTop: 10},
  emailBox: {
    height: 44,
    backgroundColor: '#F8F8F8',
    marginTop: 10,
    paddingLeft: 10,
    flex: 1,
  },
  condition: {
    alignItems: 'center',
    width: 311,
    marginTop: 40,
  },
  errorText: {
    marginTop: 10,
    fontSize: 14,
    color: '#DC282B',
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btnStyle: {
    backgroundColor: '#333333',
    borderRadius: 4,
    width: 327,
    height: 48,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
  marginTop: {
    marginTop: 10,
  },
});

export default LoginForm;
