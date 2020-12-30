import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  SectionList,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { InputSearch } from "../../molecules/InputSearch";
import { Screen } from "../../atoms/Screen";
import { Label } from "../../atoms/Label";
import { AnimatedHeaderTitle } from "../../atoms/AnimatedHeaderTitle";
import { HeaderActions } from "../../molecules/HeaderActions";
import { useStyle } from "../../../hooks/useStyle";
import { SegmentedControl } from "../../atoms/SegmentedControl";
import { LayoutTopLevelScreenProps, SectionData, contexts } from "./types";
import { dynamicStyles } from "./styles";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);
const titleContainerHeight = 44;

export const LayoutTopLevelScreen: React.FC<LayoutTopLevelScreenProps> = ({
  title,
  navigation,
  children,
  onSearch,
  segmentedControlOptions,
  onEdit,
  onAdd,
  moreOptions,
  renderCustomHeaderAction,
  ...otherProps
}) => {
  const [scrollYAnim] = useState(new Animated.Value(0));
  const [scrollYVal, setScrollYVal] = useState(0);
  const sectionListRef = useRef(null);
  const { styles, colorScheme, themeSet } = useStyle(dynamicStyles);

  const animatedOpacity = scrollYAnim.interpolate({
    inputRange: [30, 44],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const animatedBorderColor = scrollYAnim.interpolate({
    inputRange: [titleContainerHeight * 0.8, titleContainerHeight],
    outputRange: [themeSet.systemBackground, themeSet.tertiarySystemBackground],
    extrapolate: "clamp",
  });

  const animatedBackgroundColor = scrollYAnim.interpolate({
    inputRange: [0, titleContainerHeight],
    outputRange: [
      themeSet.systemBackground,
      themeSet.secondarySystemBackground,
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
    // setNavigationStyle();

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
  }, [colorScheme]);

  useEffect(() => {
    setNavigationStyle();
  }, [scrollYVal, colorScheme]);

  const onScrollToSection = (index: number) => {
    if (scrollYVal > titleContainerHeight) {
      return;
    }

    const sectionList = sectionListRef.current! as SectionList;
    sectionList.scrollToLocation({ sectionIndex: index, itemIndex: index });
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollYAnim } } }], {
      useNativeDriver: false,
    })(event);

    setScrollYVal(event.nativeEvent.contentOffset.y);
  };

  const FluidHeader = () => {
    return (
      <Animated.View
        style={[
          styles.blendedHeader,
          { backgroundColor: animatedBackgroundColor },
        ]}
      >
        <Label testID="title" xl semibold>
          {title}
        </Label>
      </Animated.View>
    );
  };

  const Content = () => <View>{children}</View>;

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
                testID="inputSearch"
                onFocus={() => onScrollToSection(1)}
                onBlur={() => onScrollToSection(0)}
                placeholder={"Search"}
                onChangeText={onSearch}
              />
            </View>
          )}

          {segmentedControlOptions && (
            <SegmentedControl
              testID="segmentedControl"
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
          testID="sectionList"
          {...otherProps}
          ref={sectionListRef}
          sections={sectionData}
          renderSectionHeader={StickyHeader}
          stickySectionHeadersEnabled={true}
          renderItem={onRenderItem}
          scrollEventThrottle={16}
          keyExtractor={(item: any, index: number) => `${item.key}-${index}`}
          onScroll={onScroll}
        />
      </Screen>
    );
  }, [children, colorScheme]);
};
