import React from "react";
import {
  LayoutDetailScreen,
  IDetailMeta,
  IGroupedTableItem,
  LayoutDetailSection,
  Label,
  useStyle,
} from "react-native-ios-ui";
import {
  faUtensils,
  faMapMarkerAlt,
  faClock,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import { View, Image } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";

export const DetailScreen = ({ navigation }) => {
  const { themeSet } = useStyle();

  const detailMeta: IDetailMeta[] = [
    {
      id: "location",
      label: "London, Notting Hill",
      icon: faMapMarkerAlt,
    },
    {
      id: "time",
      label: "Open Now: 12:30 - 23:00",
      icon: faClock,
    },
  ];

  const tableItems: IGroupedTableItem[] = [
    {
      id: "menu",
      label: "Menu",
      icon: faUtensils,
      iconBackgroundColor: themeSet.teal,
      onPress: () => {},
    },
    {
      id: "reviews",
      label: "Reviews",
      icon: faPen,
      iconBackgroundColor: themeSet.yellow,
      count: 2,
      onPress: () => {},
    },
  ];

  const primaryActions: any = [
    {
      label: "Reserve a table",
      numberOfButtons: 2,
      index: 0,
    },
    {
      label: "Website",
      numberOfButtons: 2,
      index: 1,
    },
  ];

  return (
    <ParallaxScrollView
      contentBackgroundColor={themeSet.systemBackground}
      parallaxHeaderHeight={300}
      renderBackground={() => (
        <View key="background">
          <Image
            source={{
              uri: "https://static.designmynight.com/uploads/2017/11/honesttt-optimised.jpg",
              width: 600,
              height: 300,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              width: 600,
              backgroundColor: "rgba(0,0,0,.5)",
              height: 300,
            }}
          />
        </View>
      )}
    >
      <LayoutDetailScreen
        title={"The Burger Company"}
        caption={"American, British, Vegetarian Friendly"}
        navigation={navigation}
        meta={detailMeta}
        tableItems={tableItems}
        primaryActions={primaryActions}
      >
        <LayoutDetailSection title="Description">
          <Label>
            At The Burger Company the range of food is endless, cooked with fresh ingredients and served hot.
          </Label>
        </LayoutDetailSection>
      </LayoutDetailScreen>
    </ParallaxScrollView>
  );
};
