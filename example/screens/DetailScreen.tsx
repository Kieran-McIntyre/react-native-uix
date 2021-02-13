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
  faFolder,
  faMapMarkerAlt,
  faClock,
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
      id: "review",
      label: "Reviews",
      icon: faFolder,
      iconBackgroundColor: "#5ac8fa",
      count: 0,
      onPress: () => {},
    },
    {
      id: "labour",
      label: "Courses",
      icon: faFolder,
      iconBackgroundColor: "#fed707",
      count: 2,
      onPress: () => {},
    },
    {
      id: "parts",
      label: "Accomodation",
      icon: faFolder,
      iconBackgroundColor: "#bf5bf1",
      count: 1,
      onPress: () => {},
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
              backgroundColor: "rgba(0,0,0,.8)",
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
      >
        <LayoutDetailSection title="Description">
          <Label>Hi</Label>
        </LayoutDetailSection>
      </LayoutDetailScreen>
    </ParallaxScrollView>
  );
};
