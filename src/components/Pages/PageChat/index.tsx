import * as React from "react";
import { useRef, useEffect } from "react";
import { SectionList, Text, KeyboardAvoidingView, Button } from "react-native";
import LayoutTopLevelScreen from "../../Organisms/LayoutTopLevelScreen";
import IChatCellItem from "../../../interfaces/IChatCellItem";
import assembleChatItemSections from "../../../utils/assembleChatItemSections";
import ChatCell from "../../Molecules/ChatCell";
import InputChat from "../../Molecules/InputChat";

export interface Props {
  title: string;
  navigation: any;
  items: IChatCellItem[];
}

const PageChat = ({ title, navigation, items }: Props) => {
  const sectionListRef = useRef<SectionList>(null);

  const onRenderCell = ({ item }: { item: IChatCellItem }) => {
    return <ChatCell item={item} />;
  };

  const itemSections = assembleChatItemSections(items);

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      keyboardVerticalOffset={90}
      style={{ flex: 1 }}
    >
      <LayoutTopLevelScreen
        title={title}
        navigation={navigation}
        outerChildren={<InputChat actions={[]} />}
      >
        <SectionList
          ref={sectionListRef}
          sections={itemSections}
          invertStickyHeaders={true}
          stickySectionHeadersEnabled={true}
          renderItem={onRenderCell}
          renderSectionFooter={({ section: { title } }) => <Text>{title}</Text>}
          inverted={true}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps={"never"}
        />
      </LayoutTopLevelScreen>
    </KeyboardAvoidingView>
  );
};

export default PageChat;
