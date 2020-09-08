import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { SectionList, View, Animated, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import InputSearch from "../../Molecules/InputSearch";
import Screen from "../../Atoms/Screen";
import H1 from "../../Atoms/H1";
import AnimatedHeaderTitle from "../../Atoms/AnimatedHeaderTitle";
import { useTheme } from "react-native-themed-styles";
import { styleSheetFactory } from "../../../utils/themes";

enum contexts {
  FLUID_HEADER = "fluid",
  STICKY_HEADER = "sticky",
}

export interface Props {
  title: string;
  navigation: any;
  children?: any;
}

interface SectionData {
  context: contexts;
  data: [{ key: number; el: any }];
}

const themedStyles = styleSheetFactory((theme: any) => ({
  blendedHeader: {
    paddingHorizontal: 20,
  },

  headerSticky: {
    backgroundColor: theme.neutralLight,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  neutralLight: {
    backgroundColor: theme.neutralLight,
  },

  neutral: {
    backgroundColor: theme.neutral,
  },

  neutralLightest: {
    backgroundColor: theme.neutralLightest,
  },
}));

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const titleContainerHeight = 44;

const LayoutStickyTitle = ({ title, navigation, children }: Props) => {
  const [scrollYAnim] = useState(new Animated.Value(0));
  const [scrollYVal, setScrollYVal] = useState(0);
  const sectionListRef = useRef(null);

  const [styles]: any = useTheme(themedStyles);

  const animatedOpacity = scrollYAnim.interpolate({
    inputRange: [30, 44],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const animatedBorderColor = scrollYAnim.interpolate({
    inputRange: [titleContainerHeight * 0.8, titleContainerHeight],
    outputRange: [styles.neutralLight.backgroundColor!, styles.neutral.backgroundColor!],
    extrapolate: "clamp",
  });

  const animatedBackgroundColor = scrollYAnim.interpolate({
    inputRange: [0, titleContainerHeight],
    outputRange: [styles.neutralLight.backgroundColor!, styles.neutralLightest.backgroundColor!],
    extrapolate: "clamp",
  });

  const setNavigationStyle = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: animatedBackgroundColor,
      },
      headerTitle: () => <AnimatedHeaderTitle title={title} style={{ opacity: animatedOpacity }} />,
    });
  };

  useEffect(() => {
    setNavigationStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNavigationStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYVal]);

  const FluidHeader = () => {
    return (
      <Animated.View style={[styles.blendedHeader, { backgroundColor: animatedBackgroundColor }]}>
        <H1>{title}</H1>
      </Animated.View>
    );
  };

  const Content = () => {
    return <View style={{ height: 4000, width: "100%" }}>{children}</View>;
  };

  const StickyHeader = ({ section: { context } }: { section: SectionData }) => {
    return (
      context === contexts.STICKY_HEADER && (
        <Animated.View
          style={[
            styles.blendedHeader,
            styles.headerSticky,
            {
              backgroundColor: animatedBackgroundColor,
              borderBottomColor: animatedBorderColor,
            },
          ]}
        >
          <InputSearch
            onFocus={() => onScrollToSection(1)}
            onBlur={() => onScrollToSection(0)}
            placeholder={"Search"}
          />
        </Animated.View>
      )
    );
  };

  const onScrollToSection = (index: number) => {
    if (scrollYVal > titleContainerHeight) {
      return;
    }

    const sectionList = sectionListRef.current! as SectionList;
    sectionList.scrollToLocation({ sectionIndex: index, itemIndex: index });
  };

  const sectionData: SectionData[] = [
    {
      context: contexts.FLUID_HEADER,
      data: [{ key: 0, el: FluidHeader }],
    },
    {
      context: contexts.STICKY_HEADER,
      data: [{ key: 1, el: Content }],
    },
  ];

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollYAnim } } }], {
      useNativeDriver: false,
    })(event);

    setScrollYVal(event.nativeEvent.contentOffset.y);
  };

  return (
    <Screen>
      <AnimatedSectionList
        ref={sectionListRef}
        sections={sectionData}
        renderSectionHeader={StickyHeader}
        stickySectionHeadersEnabled={true}
        renderItem={({ item }: { item: any }) => item.el()}
        scrollEventThrottle={16}
        keyExtractor={(item: any, index: number) => `${item.key}-${index}`}
        onScroll={onScroll}
      />
    </Screen>
  );
};

export default LayoutStickyTitle;
