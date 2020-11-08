import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  SectionList,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { InputSearch } from "../../Molecules/InputSearch";
import { Screen } from "../../Atoms/Screen";
import { H1 } from "../../Atoms/H1";
import { AnimatedHeaderTitle } from "../../Atoms/AnimatedHeaderTitle";
import { HeaderActions } from "../../Molecules/HeaderActions";
import { useTheme } from "react-native-themed-styles";
import { styleSheetFactory } from "../../../utils/themes";
import { SegmentedControl } from "../../Atoms/SegmentedControl";
import { LayoutTopLevelScreenProps } from "./types"

enum contexts {
  FLUID_HEADER = "fluid",
  STICKY_HEADER = "sticky",
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
  },
  inputSearch: {
    paddingBottom: 10,
  },
  segmentedControlWithSearch: {
    marginTop: 15,
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

export const LayoutTopLevelScreen: React.FC<LayoutTopLevelScreenProps> = ({
  title,
  navigation,
  children,
  outerChildren,
  onSearch,
  segmentedControlOptions,
  onEdit,
  onAdd,
  moreOptions,
  renderCustomHeaderAction,
}) => {
  const [scrollYAnim] = useState(new Animated.Value(0));
  const [scrollYVal, setScrollYVal] = useState(0);
  const sectionListRef = useRef(null);

  const [styles]: any = useMemo(() => useTheme(themedStyles), []);

  const animatedOpacity = scrollYAnim.interpolate({
    inputRange: [30, 44],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const animatedBorderColor = scrollYAnim.interpolate({
    inputRange: [titleContainerHeight * 0.8, titleContainerHeight],
    outputRange: [
      styles.neutralLight.backgroundColor!,
      styles.neutral.backgroundColor!,
    ],
    extrapolate: "clamp",
  });

  const animatedBackgroundColor = scrollYAnim.interpolate({
    inputRange: [0, titleContainerHeight],
    outputRange: [
      styles.neutralLight.backgroundColor!,
      styles.neutralLightest.backgroundColor!,
    ],
    extrapolate: "clamp",
  });

  const setNavigationStyle = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: animatedBackgroundColor,
        shadowColor: "transparent",
      },
      headerTitle: () => (
        <AnimatedHeaderTitle
          title={title}
          style={{ opacity: animatedOpacity }}
        />
      ),
    });
  };

  useEffect(() => {
    setNavigationStyle();

    navigation.setOptions({
      headerRight: () => (
        <HeaderActions
          onAdd={onAdd}
          onEdit={onEdit}
          moreOptions={moreOptions}
          renderCustomAction={renderCustomHeaderAction}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNavigationStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYVal]);

  const onScrollToSection = (index: number) => {
    if (scrollYVal > titleContainerHeight) return;

    const sectionList = sectionListRef.current! as SectionList;
    sectionList.scrollToLocation({ sectionIndex: index, itemIndex: index });
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollYAnim } } }], {
      useNativeDriver: false,
    })(event);

    setScrollYVal(event.nativeEvent.contentOffset.y);
  };

  // here
  const FluidHeader = () => {
    return (
      <Animated.View
        style={[
          styles.blendedHeader,
          { backgroundColor: animatedBackgroundColor },
        ]}
      >
        <H1>{title}</H1>
      </Animated.View>
    );
  };

  const Content = () => {
    return <View>{children}</View>;
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
          {onSearch && (
            <View style={styles.inputSearch}>
              <InputSearch
                onFocus={() => onScrollToSection(1)}
                onBlur={() => onScrollToSection(0)}
                placeholder={"Search"}
                onChangeText={onSearch}
              />
            </View>
          )}

          {segmentedControlOptions && (
            <SegmentedControl
              style={onSearch && styles.segmentedControlWithSearch}
              options={segmentedControlOptions}
            />
          )}
        </Animated.View>
      )
    );
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

  const onRenderItem = ({ item }: { item: any }) => item.el();

  return useMemo(() => {
    return (
      <Screen>
        <AnimatedSectionList
          ref={sectionListRef}
          sections={sectionData}
          renderSectionHeader={StickyHeader}
          stickySectionHeadersEnabled={true}
          renderItem={onRenderItem}
          scrollEventThrottle={16}
          keyExtractor={(item: any, index: number) => `${item.key}-${index}`}
          onScroll={onScroll}
        />

        {outerChildren}
      </Screen>
    );
  }, [children]);
};
