import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import ProgressCard from '../components/ProgressCard';
import Pie from '../components/Pie';
import React from 'react';
import { COLORS } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    paddingTop: 50,
    backgroundColor: COLORS.lightWhite,
  },

  title: {
    fontSize: 50,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 0
  },
});

export default function Progress() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Image source={require('../assets/blank-pie-chart.png')} height={20} width={20} marginLeft={-60} />
      </View>
      
      <ScrollView>
        <ProgressCard title = 'Joy of Harvesting'
          url = 'https://t4.ftcdn.net/jpg/03/87/97/03/240_F_387970356_Rczq2KoHMBXxoFeRSU1frSnyNXASvD4C.jpg'
          completed={7}
          total={10} 
        />

        <ProgressCard title = 'Food with Love'
          url = 'https://t3.ftcdn.net/jpg/02/87/67/06/240_F_287670644_jclQC1l6XMTBYMhjBQXpIhKd6BM6FTvo.jpg'
          completed={3}
          total={12} 
        />

        <ProgressCard title = 'Earth Oven Buns'
          url = 'https://t4.ftcdn.net/jpg/01/87/93/43/240_F_187934325_5v2sGOZ5qvD4Rgo2mxwCxbQ46a6U6Mm2.jpg'
          completed={4}
          total={12} 
        />

        <ProgressCard title = 'Pizza Workshop'
          url = 'https://t4.ftcdn.net/jpg/02/06/55/59/240_F_206555982_4kcbBmYKlwV21XYjIRUQQDbqTKGd60B0.jpg'
          completed={7}
          total={12} 
        />

        <ProgressCard title = 'Bug Hotel Wkshop'
          url = 'https://t4.ftcdn.net/jpg/03/87/97/03/240_F_387970356_Rczq2KoHMBXxoFeRSU1frSnyNXASvD4C.jpg'
          completed={6}
          total={12} 
        />

        <ProgressCard title = 'Woodworking'
          url = 'https://t4.ftcdn.net/jpg/01/87/93/43/240_F_187934325_5v2sGOZ5qvD4Rgo2mxwCxbQ46a6U6Mm2.jpg'
          completed={2}
          total={12} 
        />

        <ProgressCard title = 'Model Mind'
          url = 'https://t3.ftcdn.net/jpg/02/87/67/06/240_F_287670644_jclQC1l6XMTBYMhjBQXpIhKd6BM6FTvo.jpg'
          completed={8}
          total={12} 
        />

        <ProgressCard title = 'Food with Love'
          url = 'https://groundupinitiative.org/wp-content/uploads/2024/02/Food-with-Love-2-cleaning.jpg'
          completed={9}
          total={12} 
        />
      </ScrollView>
    </View>
  )
}