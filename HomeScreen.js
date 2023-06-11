import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

const HomeScreen = () => {
  
  const posts = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg',
      likes: 10,
      comments: [
        { id: 1, text: 'Nautre<3' },
        { id: 2, text: 'Awesome' },
      ],
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/R.819b1fa081abdb1bf63f972120d1ae80?rik=A3xVMulkCX2SmQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fMWlNRPT.jpg&ehk=SVK7w%2bXQrva8lOHJFMT9WpSbYtmRfHOS8RVizChtQZQ%3d&risl=&pid=ImgRaw&r=0',
      likes: 5,
      comments: [
        { id: 1, text: 'Astro' },
        { id: 2, text: 'Beauty' },
      ],
    },
  ];

  const [likeState, setLikeState] = useState([]);

  const handleLike = (postId) => {
    setLikeState((prevState) => {
      if (prevState.includes(postId)) {
        return prevState.filter((id) => id !== postId);
      } else {
        return [...prevState, postId];
      }
    });
  };
  
  return (
    <View>
      {posts.map((post) => (
        <View key={post.id} style={{ marginBottom: 20 }}>
          <Image source={{ uri: post.imageUrl }} style={{ width: '100%', height: 200 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={() => handleLike(post.id)}>
             <Icon
                        name={likeState.includes(post.id) ? 'heart' : 'heart-o'}
                        type="font-awesome"
                        color={likeState.includes(post.id) ? 'red' : 'white'}
            />
         </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>{post.likes + (likeState.includes(post.id) ? 1 : 0)} likes</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            {post.comments.map((comment) => (
              <Text key={comment.id}>{comment.text}</Text>
            ))}
          </View>
          <TextInput placeholder="Add a comment..."style={{ marginTop: 10 }} onChangeText={(text) => {
    
            console.log(`Comment added: ${text}`);
  }}
/>

        </View>
      ))}
    </View>
  );
};

export default HomeScreen;
