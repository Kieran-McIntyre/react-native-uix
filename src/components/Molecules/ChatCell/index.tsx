import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import IChatCellItem from "../../../interfaces/IChatCellItem";
import Row from "../../Atoms/Row";
import Avatar from "../../Atoms/Avatar";
import RenderHTML from "../../Atoms/RenderHTML";
import ChatItem from "../../../models/ChatItem";
import ImageGallery from "../../Molecules/ImageGallery";
import colors from "../../../values/colors";

export interface Props {
  item: IChatCellItem;
}

const ChatCell = ({ item }: { item: any }) => {
  const chatItem = new ChatItem(item);

  return (
    <Row style={styles.chatCell}>
      <View style={{ paddingRight: 10 }}>
        <Avatar
          url={"https://avatars2.githubusercontent.com/u/25485732?s=60&v=4"}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Row between>
          <Text style={{ fontWeight: "bold" }}>James Smith</Text>
          <Text style={{ color: colors.light.neutralDark }}>
            22 Aug 2020, 21:00
          </Text>
        </Row>

        <RenderHTML html={item.message} style={{ marginTop: 10 }} />

        <ImageGallery images={chatItem.attachedImages} />
      </View>
    </Row>
  );
};

export default ChatCell;

const styles = StyleSheet.create({
  chatCell: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
    paddingBottom: 20,
  },
});
