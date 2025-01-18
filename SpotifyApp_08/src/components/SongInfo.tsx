import React, { PropsWithChildren } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Track } from 'react-native-track-player';


const { width } = Dimensions.get('window')

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined
}>

const SongInfo = ({ track }: SongInfoProps) => {
  console.log(track)
  return (
    <>
      <View style={{height : 350}}>
        <View style={styles.listArtWrapper}>
          {track?.artwork ?
            (<Image
              source={{ uri: track?.artwork.toString() }}
              style={styles.artImage}
            />) : (
              <View style={[styles.artImage, { backgroundColor: '#555' }]} />
            )
          }
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.name}>
            {track?.title}
          </Text>
          <Text style={styles.artist}>
            {track?.artist}  .  {track?.album}
          </Text>
        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artImage: {
    height: 350,
    width: 350,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  name: {
    marginBottom: 8,
    textAlign: 'center',

    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  artist: {
    color: '#d9d9d9',
    textAlign: 'center',
  },
});

export default SongInfo