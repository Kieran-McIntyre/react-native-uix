import React  from "react";	
import { Section, Label, Row, useStyle } from "react-native-uix";	
import { StyleSheet, View } from "react-native";	
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";	
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";	

export const SectionUpNext = () => {	
  const { themeSet } = useStyle();	

  return (	
    <Section title="Coming Up">
      <Row style={styles.content}
        between>	
        <View>	
          <Label lg>
            Tomorrow at 12:00
          </Label>	

          <Row style={styles.title}>	
            <Label 
              sm
              secondary
              lighter
            >	
              Hever Castle and Gardens
            </Label>	
          </Row>	
        </View>	

        <FontAwesomeIcon	
          icon={faChevronRight}	
          color={themeSet.separator}	
        />	
      </Row> 
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
});