import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Teste = () => {
  return (
    <View style={[styles.card, styles.elevation]}>
        <View>
          <Text style={styles.heading}>
            React Native Box Shadow (Elevation)
          </Text>
        </View>
        <Text>
          Using the elevation style prop to apply box-shadow for Android devices
        </Text>
</View>
  )
}

export default Teste