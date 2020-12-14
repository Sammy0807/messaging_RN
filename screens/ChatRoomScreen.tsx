import React from "react";
import chatRoomData from "../Data/Chats";
import { Text, FlatList, ImageBackground } from "react-native";
import { ChatMessage } from "../components/ChatMessage";
import BG from "../assets/images/BG.png";

import { useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        inverted
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
