import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles, loginStyles } from "../styles";


export const LoginScreen = () => {

    const navigation = useNavigation();
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMgs, setErrorMgs] = useState('');
    const [loading, setLoading] = useState(false);

    const executaLogin = async () => {
        try{
            setLoading(true);
            setErrorMgs('');

            if (!login || login.length < 5 || !password || password.length < 5) {
                setErrorMgs('Favor preencher corretamente os dados');
                setLoading(false);
                return;
            }
            
            const body = {
                login,
                password
            };
    
            // const resultado = await executaRequisicao('login', 'post', body);
            // if(resultado?.data?.token){
            //     localStorage.setItem('accessToken', resultado.data.token);
            //     localStorage.setItem('usuarioNome', resultado.data.nome);
            //     localStorage.setItem('usuarioEmail', resultado.data.email);
            //     props.setAccessToken(resultado.data.token);
            // }

            navigation.navigate('Home');
        }catch(e){
            console.log(e);
            if(e?.response?.data?.erro){
                setErrorMgs(e.response.data.erro);
            }else{
                setErrorMgs('Não foi possível efetuar o login, fale com o administrador.')
            }
        }
        
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <View style={loginStyles.form}>

                <Image source={require('../assets/images/logo.png')} style={loginStyles.logo} />

                {
                    errorMgs
                        ? < Text style={styles.alertMgs}>{errorMgs}</Text>
                        : null
                }

                <View style={[styles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/mail.png')} style={loginStyles.icone} />
                    <TextInput
                        style={loginStyles.input}
                        placeholder="Digite seu email"
                        value={login}
                        onChangeText={setLogin}
                    />
                </View>
                <View style={[styles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/lock.png')} style={loginStyles.icone} />
                    <TextInput
                        secureTextEntry={true}
                        style={loginStyles.input}
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity style={loginStyles.button} onPress={executaLogin} disabled={loading}>
                    {
                        loading ?
                            <ActivityIndicator size="large" color="#fff" />
                            :
                            <Text style={loginStyles.buttonText}>Login</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>  
    );
}