import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
 
class DynamicBackground extends Component {
   render() {
       const { color, image, type } = this.props
 
       // const bgImage = { uri: image }
 
       // if (image) {
       //  if (image.url) {
       //      image = image.url
       //  } else {
       //      image = image
       //  }
       // }
 
       const bgImage = { uri: image }
 
       if(type === 'image') {
           return (
               <Image
                   source={bgImage}
                   resizeMode='cover'
                   style={{ width: this.props._width, height: this.props._height }}
               />
           )
       } else {
           return (
               <View style={{ flex: 1, justifyContent: 'center', backgroundColor: color, width: '100%',height: '100%' }}>
                   <Text>{color} test</Text>
               </View>
           )
       }
   }
}
 
export default DynamicBackground