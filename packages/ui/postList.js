import React, { useEffect, useState } from 'react';
import { View, FlatList,} from 'react-native';
import Posts from '../../packages/ui/postItem';
import S from '../../styles'; 
import api from '../../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/users');
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View style={S.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Posts imageUrl={item.imageUrl} user={item.name} content={item.content} />
        )}
      />
    </View>
  );
};

export default PostList;
