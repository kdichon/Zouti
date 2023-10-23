import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import AntD from 'react-native-vector-icons/AntDesign'
import OctIcon from 'react-native-vector-icons/Octicons'
import FA from 'react-native-vector-icons/FontAwesome'
import FA6 from 'react-native-vector-icons/FontAwesome6'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const DetailFomation = ({route}) => {

    const { formation } = route.params

    const navigation = useNavigation()

  return (
    <View style={{flex:1, gap: 10, justifyContent: "flex-end", backgroundColor:"#705fff"}} >

        <Pressable onPress={() => navigation.navigate('home')} style={{flexDirection: "row", gap: 0, marginTop: 80, marginHorizontal: 10, alignItems:"center"}}>
            <MatIcon name="arrow-back-ios" size={20} color="#fcfcff" />
            <Text style={{color: "#fcfcff", fontSize: 20, fontWeight: "300"}} >Back</Text>
        </Pressable>

        <View style={{flex: 1, backgroundColor: "#FFF", borderTopLeftRadius: 40, borderTopEndRadius: 40, marginTop: 10}}>
            
            <View style={{flexDirection: "row", alignItems: 'center'}}>
                <View style={{backgroundColor: formation.color, height: 80, width: 80, margin: 20, borderRadius: 20}}>
                    <View style={{backgroundColor: "#FFF",opacity: 0.2, height: 70, width: 65, borderTopLeftRadius: 20, borderRadius: 8}} />
                    <View style={{backgroundColor: "#FFF",opacity:0.2, height: 60, width: 60, marginLeft: 20, marginTop: 20, borderBottomRightRadius: 20, borderRadius: 8, position: "absolute"}} />
                </View>

                <View style={{justifyContent: "space-between"}}>
                    <Text style={{color: "#000", fontSize: 25, fontWeight: "700"}}>{formation.formation}</Text>
                    <View style={{backgroundColor: "#FFF", width: 60, height: 30, borderRadius: 10, flexDirection: "row", alignItems:"center", gap: 2}} >
                        <AntD name="star" size={15} color="#ff0048"/>
                        <Text style={{fontWeight: "700"}} >{formation.note}</Text>
                    </View>
                </View>
            </View>

            <View style={{margin: 20}} >
                <Text style={{color: "#000", fontSize: 20}} >The Couse includes</Text>
            </View>

            <View style={{backgroundColor: "#FFF", height:"auto", marginHorizontal: 20, borderRadius: 20, elevation: 10, shadowColor: "#000", padding: 10}} >
                <View style={{margin: 10, flexDirection: "row", alignItems: 'center', gap: 20}}>
                    <View style={{backgroundColor: "#705fff", height: 70, width:70, borderRadius: 35, justifyContent:"center", alignItems:"center"}}>
                        <OctIcon name="device-camera-video" size={30} color="#FFF" />
                    </View>
                    <View>
                        <Text style={{fontWeight: "800", color: "#000"}}>12 Video Tutorials</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color: "#705fff"}}>250 min </Text>
                            <Text>of interesting lectures</Text>
                        </View>
                    </View>
                </View>

                <View style={{margin: 10, flexDirection: "row", alignItems: 'center', gap: 20}}>
                    <View style={{backgroundColor: "#00c1bc", height: 70, width:70, borderRadius: 35, justifyContent:"center", alignItems:"center"}}>
                        <FA name="bookmark-o" size={30} color="#FFF" />
                    </View>
                    <View>
                        <Text style={{fontWeight: "800", color: "#000"}}>7 Practical Tasks</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color: "#00c1bc"}}>3 teachers </Text>
                            <Text>will check your worck</Text>
                        </View>
                    </View>
                </View>

                <View style={{margin: 10, flexDirection: "row", alignItems: 'center', gap: 20}}>
                    <View style={{backgroundColor: "#ff5582", height: 70, width:70, borderRadius: 35, justifyContent:"center", alignItems:"center"}}>
                        <FA name="folder-o" size={30} color="#FFF" />
                    </View>
                    <View>
                        <Text style={{fontWeight: "800", color: "#000"}}>10 Templates for design</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color: "#ff5582"}}>500 MB </Text>
                            <Text>of sketch files</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{margin: 20}} >
                <Text style={{color: "#000", fontSize: 20}} >Teacher</Text>
            </View>

            <View style={{backgroundColor: "#FFF", height:"auto", marginHorizontal: 20, borderRadius: 20, elevation: 10, shadowColor: "#000", padding: 10, flexDirection: "row", justifyContent:"space-around"}}>
                <Image source={{uri:formation.photo}} style={{height: 70, width: 70}}/>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight: "800", color: "#000"}}>{formation.nom}</Text>
                    <Text>{formation.poste}</Text>
                </View>
                <FA6 name="arrow-right-long" size={30} color="#705fff" />
            </View>
            <Button style={{backgroundColor: "#2c3636", margin:20, height: 45}} textColor='#FFF'>Start</Button>
        </View>

    </View>
  )
}

export default DetailFomation