import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import NavBar from './Components/NavBar';
import Stories from './Components/Stories';
import ChatComponent from './Components/ChatComponent';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavBar />
      <ScrollView>
        <Stories />
        <ChatComponent/>
        <ChatComponent/>
        <ChatComponent/>
        <ChatComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
