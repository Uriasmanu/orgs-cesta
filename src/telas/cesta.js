import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png';
import logoFazenda from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo} >Detalhes da Cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.subtitulo}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha</Text>
        <Text style={estilos.preco}>40,00</Text>
    </View>
    </> 
}



const estilos = StyleSheet.create({
    topo:{
        width:"100%",
        height: 578/768 * width,
    },

    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        color:"white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
    },

    subtitulo:{
        width:"100%",
        color:"#464646",
        fontSize: 36,
        lineHeight: 42,
        fontFamily: "MontserratBold",
    },

    cesta: {
        paddingHorizontal:16,
        paddingVertical: 16,
    },

    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
        
    },

    imagemFazenda:{
        width: 32,
        height:32,
    },

    nomeFazenda:{
        fontSize:16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },

    descricao: {
        color: '#a3a3a3',
        fontSize:16,
        lineHeight: 26,
    },

    preco:{
        color:'#2A9F85',
        fontSize:26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: "bold",
    },
})