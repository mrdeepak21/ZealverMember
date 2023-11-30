import React from 'react';
import {ActivityIndicator, Image, StatusBar, View, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

  return (
    <>
      <StatusBar barStyle="default" hidden={false} backgroundColor="#EF7F22" translucent={true} />
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
      <WebView 
        // ref={webViewRef}
        scalesPageToFit
        useWebkit
        cacheEnabled
          source={{ uri: 'https://member.zealver.life/' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          originWhitelist={['*']}
          startInLoadingState={true} 
          allowsBackForwardNavigationGestures={true}
          renderLoading={() =>  <View style={{position:'absolute',zIndex:2,marginHorizontal:'50%',top:'50%',backgroundColor:'#ffffffAA',flex:1,alignItems:'center'}}>
          <View>
          <Image source={{uri:'https://www.zealver.life/wp-content/uploads/2022/12/Zealver-Life-Logo.png'}} style={{width:300,height:77.7}}/>
          </View>
          <View>
            <ActivityIndicator
              color="#EF7F22"
              size="large"
              hidesWhenStopped={true}
            />
            </View>
            </View> }/>          
      </SafeAreaView>
    </>
  );
};

export default App;