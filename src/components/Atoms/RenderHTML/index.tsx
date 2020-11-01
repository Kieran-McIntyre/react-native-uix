import * as React from "react";
import HTML from "react-native-render-html";
import { Text, View } from "react-native";

export interface Props {
  html: string;
  style?: any;
}

const getSmartContent = (html: string) => {
  const key = "<split-key>";

  const textSnippets = html
    .replace(/<\/?[^>]+(>|$)/g, key)
    .replace(/(?:\r\n|\r|\n)/g, "<br>")
    .split(key)
    .filter(Boolean)
    .map((originalSnippet) => ({
      originalSnippet,
      smartSnippet: `<smarttext>${originalSnippet}</smarttext>`,
    }));

  let transformedContent = html;

  textSnippets.forEach((snippet) => {
    transformedContent = transformedContent.replace(
      snippet.originalSnippet,
      snippet.smartSnippet
    );
  });

  return transformedContent;
};

const renderSmartText = (_: any, children: any) => {
  const content = children?.[0]?.[0]?.props?.children[0]?.props?.children;
  if (!content) return null;

  return (
    <Text style={{ fontSize: 16 }} key={"key"}>
      {content}
    </Text>
  );
};

const RenderHTML = ({ html, style }: Props) => {
  if (!html) return null;

  return (
    <View style={style}>
      <HTML
        html={getSmartContent(html)}
        tagsStyles={{
          p: { padding: 0 },
        }}
        baseFontStyle={{ fontSize: 16 }}
        renderers={{
          smarttext: {
            renderer: renderSmartText,
            wrapper: "Text",
          },
        }}
      />
    </View>
  );
};

export default RenderHTML;
