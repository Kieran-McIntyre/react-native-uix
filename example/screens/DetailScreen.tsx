import React from "react";
import {
  LayoutDetailScreen,
  IDetailMeta,
  IGroupedTableItem,
  LayoutDetailSection,
} from "../rnui";
import {
  faFolder,
  faMapMarkerAlt,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import { View, Image, Text } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";

export const DetailScreen = ({ navigation }) => {
  const detailMeta: IDetailMeta[] = [
    {
      id: "location",
      label: "Manchester",
      icon: faMapMarkerAlt,
    },
    {
      id: "created",
      label: "2016 - 2019",
      icon: faCalendarPlus,
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
      backgroundColor="blue"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={300}
      renderBackground={() => (
        <View key="background">
          <Image
            source={{
              uri:
                "https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fthe-university-of-manchester-min_1219152588.jpg&action=ProductDetailFullWidth2",
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
        title={"The University of Manchester"}
        caption={"Caption"}
        navigation={navigation}
        meta={detailMeta}
        tableItems={tableItems}
      >
        <LayoutDetailSection title="Description">
          <Text>Hi</Text>
        </LayoutDetailSection>
      </LayoutDetailScreen>
    </ParallaxScrollView>
  );
};
