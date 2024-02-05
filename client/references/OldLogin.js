import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    updateDoc
} from 'firebase/firestore'
import colors from '../../../assets/colors/colors';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigation = useNavigation()

    const db = getFirestore()
    const commanderRef = collection(db, 'ManOrCommander')
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email)
                const q = query(commanderRef, where("emailid", "==", user.email))
                console.log("queried")

                onSnapshot(q, (snapshot) => {
                        let books = []
                        snapshot.docs.forEach(doc => {
                        books.push({ ...doc.data(), id: doc.id })
                        })
                        console.log(books)

                        const book = books[0]
                        console.log(book)

                        if (book['isCommander']===false){
                            // console.log(book['isCommander'])
                            console.log("man")
                            navigation.replace("HomeMan")
                        } else {
                            // console.log(book['isCommander'])
                            console.log("com")
                            navigation.replace("HomeCom")
                        }
                    })
                navigation.replace("HomeMan")
            }
        });
    
        // return unsubscribe
    }, [])

  
    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Registered user with email: ', user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, " error ", errorMessage)
        });
    }
  
    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }
  
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >   
            <View style={styles.topButtonContainer}>
            <View style={styles.header}>
              <View style={styles.titlesWrapper}>
              <Image
                  source={require('../../../assets/splash.png')}
                  style={styles.headerImg}
                />
                <Text style={styles.titlesTitle}>Ground Up Portal</Text>
                <Text style={styles.titlesSubtitle}> Hello Groundhogs! </Text>
              </View>
            </View>
            <TouchableOpacity
                style={styles.singpassButton}
            >
                <Text style={styles.buttonText}>Sign in with Signpass</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
            </View>
    
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
  }
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    titlesSubtitle: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 20,
      width: 300,
      fontWeight: '500',
      color: "#5E7667",
    },
    titlesTitle: {
      // fontFamily: 'Montserrat-Bold',
      fontSize: 40,
      color: colors.textDark,
      fontWeight: '600'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    header: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      textAlign: 'center'
    }, 
    topButtonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingHorizontal: 15,
        paddingVertical: 30
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    singpassButton: {
      backgroundColor: '#AD1019',
    //   backgroundColor: colors.primary,
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    button: {
        // backgroundColor: '#AD1019',
        backgroundColor: colors.primary,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: "#5E7667",
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: colors.primary,
      fontWeight: '700',
      fontSize: 16,
    },
  })