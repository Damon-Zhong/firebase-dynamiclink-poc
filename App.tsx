/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import ShareButton from './src/components/ShareButton';
import dynamicLinks from "@react-native-firebase/dynamic-links"

type DynamicLinkType = {
  url: string
}

function App(): JSX.Element {

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link: DynamicLinkType | null) => {
        if (link?.url === 'https://invertase.io/offer') {
          // ...set initial route as offers screen
        }
      });
  }, []);

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  const handleDynamicLink = (link: DynamicLinkType) => {
    console.log("Handle dynamic link:", link)
    // Handle dynamic link inside your own application
    // if (link.url) {
    //   // ...navigate to your offers screen
    // }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ShareButton />
    </View>
  );
}
export default App;
