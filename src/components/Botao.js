import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto";

export default function Botao( {texto, onPress, style }) {
  return (
    <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
      <Texto style={estilos.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
