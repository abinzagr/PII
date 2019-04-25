import React, {Component} from 'react';
import{
AppRegistry,
    StyleSheet, 
    Text,
    View ,
    TouchableOpacity 
} from 'react-native';
import FBSDK ,{LoginManager, AccessToken} from 'react-native-fbsdk'
import firebase from 'firebase'
var config ={
    apikey:'AIzaSyAi9iu19icyEGqqfWN8rNf_MHO-cZug2RQ',
    authDomain:'weekeat-c681a.firebaseapp.com/',
    databaseURL:'https://weekeat-c681a.firebaseio.com/'
}
if (!firebase.apps.length) {
   // firebase.initializeApp({});
   const firebaseRef = firebase.initializeApp(config)
}

export default class AuthFacebook extends Component{
    _fbAuth(){
        LoginManager.logInWithReadPermissions(['public_profile']).then( 
            function(result){
                if(result.isCancelled){
                    alert('Login cancelled');
                } else{
                    AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                        const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
                        firebase.auth().signInWithCredential(credential).then((result) => {

                        }, (error) =>{
                            console.log(error)
                        })
                    },(error => {console.log('Some error occured: '+error)
                }))
            }
            },
            function(error){
                alert('Login fail with error: ' + error);
            }
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.paragraph}>Cliquez sur le buton pour poursuivre la connnexion</Text>
                <TouchableOpacity 
                onPress={(this._fbAuth)}>
                <View style={{width:'50%',borderRadius:4,padding:24,backgroundColor:'#3b5998'}}>
                <Text style={{color:'white'}}>se connecter avec facebook</Text>
                </View>
                </TouchableOpacity>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center'
      
      
    }, 
    paragraph:{
      margin:24,
      fontSize:18,
      fontWeight:'bold',
      textAlign:'center',
      color:'#34495e'
    }
})