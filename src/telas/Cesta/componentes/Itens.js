import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Itens ({titulo, lista}){
    return <>
    <Texto>{titulo}</Texto>

    {lista.map(({nome, imagem}) => {
        return <View style={styles.container} key={nome}>
            <Image source={imagem} style={styles.imagem} />
            <Texto style={styles.nome}>{nome}</Texto>

        </View>
    })}
    
    </>
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10,
        
    },

    nome: {

    },

    imagem:{
        width: 55,
        height: 55,
        marginRight: 10,
        marginBottom: 15
    }
})