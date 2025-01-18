import { Dimensions, StyleSheet, View, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { playListData } from '../constants';
import TrackPlayer, { Track, useTrackPlayerEvents, Event } from 'react-native-track-player';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get('window');

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null >();

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
    switch (event?.type) {
      case Event.PlaybackActiveTrackChanged :
          const playingTrack  = await TrackPlayer.getTrack(event.index || 0)
          setTrack(playingTrack);
        break;
    }
  });

  // const renderArtWork = ({ item } : {item : Track}) => {
  //   return (
  //     <View style={styles.listArtWrapper}>
  //       {item?.artwork ? (
  //         <Image source={{ uri: item.artwork.toString() }} style={styles.albumArtImg} />
  //       ) : (
  //         <View style={[styles.albumArtImg, { backgroundColor: '#555' }]} />
  //       )}
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      {/* <View style={{ height: 100}}>
        <FlatList
          horizontal
          data={playListData}
          renderItem={renderArtWork}
          keyExtractor={(song) => song.id.toString()}
          // initialNumToRender={1}
          showsHorizontalScrollIndicator={false}
          style ={styles.flatlist}
        />
      </View> */}
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d23',
    padding: 16,
  },
  // flatlist : {
  //   paddingBottom : 16
  // },
  // listArtWrapper: {
  //   width: width,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // albumArtImg: {
  //   height : 96,
  //   width : 96,
  //   borderRadius: 8,
  //   resizeMode: 'cover',
  // },
});
