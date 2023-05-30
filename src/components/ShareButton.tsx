import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from "axios"

const ShareButton:React.FC = () => {

const buildLink = async () => {
    try {
        const link = await axios({
            method: 'POST',
            url: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBMUdu-daNugh4CxFYg20uXZDYVkV49h9k`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: {
              dynamicLinkInfo: {
                domainUriPrefix: 'https://staffscheduling.page.link', //https://staffscheduling.page.link/bjYi
                link: "https://www.google.ca",
                androidInfo: {
                  androidPackageName: 'com.staffschedule',
                },
              },
            },
          });
        
       return link.data.shortLink
    
    } catch (error) {
        console.log("Error!", error)
        throw error
    }
}

const handleShare = async () => {
    console.log('Share pressed!')
    const newLink = await buildLink()

    console.log("New link:", newLink)
}

  return (
    <Pressable style={styles.button} onPress={handleShare}>
      <Text>ShareButton</Text>
    </Pressable>
  )
}

export default ShareButton

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 16,
        alignSelf:"center",
        paddingHorizontal: 15,
        paddingVertical: 10
    }
})