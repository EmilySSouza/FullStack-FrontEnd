import React from "react";
import { View, Text, Image } from "react-native";
import S from "../../styles"; 

const PostItem = ({ user, content, imageUrl }) => {

  return (
    <View style={S.container}>
      <View style={S.header}>
        <Image
          source={{ uri: imageUrl }}
          style={S.image}
        />
        <Text style={S.title}>@{user}</Text>
      </View>
      <Text style={S.content}>{content}</Text>
    </View>
  );
};


export default PostItem;