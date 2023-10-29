import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { AlterarClienteProps } from "../types";
import Carregamento from "./Carregamento";
import { IClientes } from "../models/IClientes";

export default ({navigation, route}: AlterarClienteProps) => {
    const [id] = useState(route.params.id);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function carregar(){
        setIsLoading(true);
        const resultado = await firestore()
            .collection('clientes')
            .doc(id)
            .get();

        const nota = {
                id: resultado.id,
                ...resultado.data()
            } as IClientes;   

        setNome(nota.nome);
        setCpf(nota.cpf);
        setRua(nota.rua);
        setNumero(nota.numero);
        setBairro(nota.bairro);
        setCidade(nota.cidade);
        setEstado(nota.estado);
        setDataNasc(nota.dataNasc);
        setIsLoading(false);
    };
    
    useEffect(() => {
        carregar();
    }, []);
    
    function alterar() {
        setIsLoading(true);
        
        firestore()
            .collection('clientes')
            .doc(id)
            .update({
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
                Alert.alert("Cliente", "Alterado com sucesso")
                navigation.goBack();
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <View>
            <Carregamento isLoading={isLoading}/>

            <Text style={styles.texto}>Nome</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setNome(text) }} />
                <Text style={styles.texto}>CPF</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setCpf(text) }} />
                <Text style={styles.texto}>Rua</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setRua(text) }} />
                    <Text style={styles.texto}>Número</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setNumero(text) }} />
                    <Text style={styles.texto}>Bairro</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setBairro(text) }} />
                    <Text style={styles.texto}>Cidade</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setCidade(text) }} />
                    <Text style={styles.texto}>Estado</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setEstado(text) }} />
                <Text style={styles.texto}>Data de nascimento</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => { setDataNasc(text) }} />

                <Pressable
                    style={styles.botao}
                    onPress={() => alterar()}>
                    <Text style={styles.botaoTexto}>Alterar</Text>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    desc_botao: {
        fontSize: 20
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
    botaoTexto: {
        fontSize: 20,
        color: 'black'
    }
});