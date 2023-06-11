import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const stories = [
    { id: '1', imageUrl: 'https://th.bing.com/th/id/OIP.BFI0AlkD3gvGdl5LP2B5ugHaHa?pid=ImgDet&rs=1' },
    { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.qyWmUSnIvfWxaClqBjxF9gHaFj?w=260&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: '3', imageUrl: 'https://www.animeclick.it/immagini/anime/Tokyo_Revengers/gallery_original/Tokyo_Revengers-5fda4477a9c17.jpg' },
    
  ];
  const Story = () => {
    const renderItem = ({ item }) => {
      return (
        <View style={styles.storyContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.storyImage} />
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <Carousel
          data={stories}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={80}
          loop
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        marginTop:9,
        height: 90,
    },
    storyContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      overflow: 'hidden',
      marginHorizontal: 10,
    },
    storyImage: {
      width: '100%',
      height: '100%',
    },
  });
  
  export default Story;
    