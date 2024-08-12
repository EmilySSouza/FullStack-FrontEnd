import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import MemberItem from "./memberItem";
import api from "../../services/api"; 
import S from "../../styles";

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
        const response = await api.get("/users");
        setMembers(response.data);
    };

    fetchMembers();
  }, []);

  return (
    <View style={S.container}>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MemberItem name={item.name} role={item.role} />
        )}
      />
    </View>
  );
};

export default MemberList;