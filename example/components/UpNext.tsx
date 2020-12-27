import React, { useEffect, useState } from "react";
import { Section, Label, Row, useStyle } from "react-native-ios-ui";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";
import { addDays } from "date-fns/esm";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const SectionUpNext = ({ navigation }) => {
  const { themeSet } = useStyle();

  const EventContent = () => {
    return (
      <TouchableHighlight
        underlayColor={themeSet.tertiarySystemBackground}
        onPress={() => {}}
      >
        <>
          <View style={styles.content}>
            <Row between>
              <View>
                <Label lg>Tomorrow at 12:00</Label>

                <Row style={styles.title}>
                  <Label sm secondary lighter>
                    Event Name
                  </Label>
                </Row>
              </View>

              <FontAwesomeIcon
                icon={faChevronRight}
                color={themeSet.separator}
              />
            </Row>
          </View>

          {/* {shouldRenderMap && (
            <View style={styles.content}>
              <MapPreview latLng={locationLatLng} />
            </View>
          )} */}
        </>
      </TouchableHighlight>
    );
  };

  return (
    <Section
      title={"Up Next"}
      emptyStateMessage={"Your next booking will appear here."}
      //   shouldShowEmptyState={!upcomingEvent}
    >
      <EventContent />
    </Section>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: 5,
    backgroundColor: "blue",
  },
});
