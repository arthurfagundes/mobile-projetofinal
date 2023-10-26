import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"

import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { CadastrarClienteProps } from "../types";

const TelaCadastrarClientes = ({ navigation }: CadastrarClienteProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarCliente() {
        setIsLoading(true);

        // if (cpf && dataNasc) {
            firestore()
                .collection('clientes')
                .add({
                    nome,
                    cpf,
                    rua,
                    numero,
                    bairro,
                    cidade,
                    estado,
                    dataNasc,
                    created_at: firestore.FieldValue.serverTimestamp()
                })
                .then(() => {
                    Alert.alert("Cliente", "Cadastrado com sucesso")
                    navigation.navigate('Home')
                })
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false))
       // } else setIsLoading(false);
    }
    return (
        <ScrollView>
            <View>
                <Image style={styles.logo} source={require('../assets/new-product-icon.png')} />
                <Text style={styles.texto}>Nome</Text>
                <TextInput
                    placeholder="Nome completo"
                    style={styles.inputs}
                    onChangeText={(text) => { setNome(text) }} />
                <Text style={styles.texto}>CPF</Text>
                <TextInput
                    placeholder="CPF"
                    style={styles.inputs}
                    onChangeText={(text) => { setCpf(text) }} />
                <Text style={styles.texto}>Rua</Text>
                <TextInput
                    placeholder="Rua"
                    style={styles.inputs}
                    onChangeText={(text) => { setRua(text) }} />
                    <Text style={styles.texto}>Número</Text>
                <TextInput
                    placeholder="Número"
                    style={styles.inputs}
                    onChangeText={(text) => { setNumero(text) }} />
                    <Text style={styles.texto}>Bairro</Text>
                <TextInput
                    placeholder="Bairro"
                    style={styles.inputs}
                    onChangeText={(text) => { setBairro(text) }} />
                    <Text style={styles.texto}>Cidade</Text>
                <TextInput
                    placeholder="Cidade"
                    style={styles.inputs}
                    onChangeText={(text) => { setCidade(text) }} />
                    <Text style={styles.texto}>Estado</Text>
                <TextInput
                    placeholder="Estado"
                    style={styles.inputs}
                    onChangeText={(text) => { setEstado(text) }} />
                <Text style={styles.texto}>Data de nascimento</Text>
                <TextInput
                    placeholder="00/00/00"
                    style={styles.inputs}
                    onChangeText={(text) => { setDataNasc(text) }} />

                <Pressable
                    style={styles.botao}
                    onPress={() => cadastrarCliente()}>
                    <Text style={styles.botaoTexto}>Cadastrar</Text>
                </Pressable>
            </View>
        </ScrollView>

    )
}




const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,
        marginTop: 60,
        marginBottom: 30,
        alignSelf: 'center'
    },
    inputs: {
        width: 350,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        margin: 10,
        alignSelf: 'center'

    },
    texto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        alignContent: 'flex-start',
        marginLeft: 25
    },
    botao: {
        color: 'black',
        backgroundColor: "#c9c9c5",
        borderRadius: 20,
        alignItems: "center",
        marginTop: 2,
        marginHorizontal: 100
    },
    botaoTexto: {
        fontSize: 20,
        color: 'black'
    }
});

export default TelaCadastrarClientes;