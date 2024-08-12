import React from "react";
import { View, Text } from "react-native";
import S from "../../styles";

const MemberItem = ({ name, role }) => (
  <View style={S.item}>
    <Text style={S.name}>{name}</Text>
    <Text style={S.role}>{role}</Text>
  </View>
);

export default MemberItem;