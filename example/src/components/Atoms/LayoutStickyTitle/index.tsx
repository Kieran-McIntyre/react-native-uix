import React from "react";
import { StyleSheet, SectionList, View, Animated } from "react-native";

export interface Props {
  fluidSection: any;
  stickySection: any;
  contentSection: any;
}

enum contexts {
  FLUID_HEADER = "fluid",
  STICKY_HEADER = "sticky",
}

export default class LayoutStickyTitle extends React.Component<Props> {
  state = {
    scrollY: new Animated.Value(0),
    stickyHeaderHeight: 200,
  };

  onStickyHeaderLayout = event => {
    const { height } = event.nativeEvent.layout;
    this.setState({ stickyHeaderHeight: height });
  };

  renderStickyHeader = ({ section: { context } }) => {
    if (context !== contexts.STICKY_HEADER) {
      return null;
    }

    return (
      <View
        style={[styles.blendedHeader, styles.headerSticky]}
        onLayout={this.onStickyHeaderLayout}
      >
        {this.props.stickySection()}
      </View>
    );
  };

  renderFluidHeader = () => {
    return (
      <View style={[styles.blendedHeader, styles.headerFluid]}>
        {this.props.fluidSection()}
      </View>
    );
  };

  render = () => {
    const sectionData = [
      {
        context: contexts.FLUID_HEADER,
        data: [
          {
            key: 0,
            el: this.renderFluidHeader,
          },
        ],
      },
      {
        context: contexts.STICKY_HEADER,
        data: [
          {
            key: 1,
            el: () => this.props.contentSection(),
          },
        ],
      },
    ];

    return (
      <SectionList
        sections={sectionData}
        renderSectionHeader={this.renderStickyHeader as any}
        stickySectionHeadersEnabled={true}
        renderItem={({ item }) => item.el()}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${item.key}-${index}`}
      />
    );
  };
}

const styles = StyleSheet.create({
  blendedHeader: {
    backgroundColor: "black",
    width: "100%",
    paddingHorizontal: 20,
  },

  headerFluid: {
    backgroundColor: "blue",
  },

  headerSticky: {
    backgroundColor: "pink",
    paddingBottom: 10,
  },
});
