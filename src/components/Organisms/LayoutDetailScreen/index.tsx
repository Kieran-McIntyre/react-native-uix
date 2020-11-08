import * as React from "react";
import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Screen } from "../../atoms/Screen";
import { H2 } from "../../atoms/H2";
import { HeaderActions } from "../../molecules/HeaderActions";

import { H4 } from "../../atoms/H4";
import { DetailMeta } from "../../molecules/DetailMeta";
import { TableRow } from "../../molecules/TableRow";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { Row } from "../../atoms/Row";

import { LayoutDetailScreenProps } from "./types"
import { styles } from "./styles"

export const LayoutDetailScreen: React.FC<LayoutDetailScreenProps> = ({
  navigation,
  children,
  caption,
  title,
  onEdit,
  onAdd,
  meta,
  moreOptions,
  tableItems = [],
}) => {
  useEffect(() => {
    navigation.setOptions({
      backgroundColor: "red",
      shadowColor: "transparent",
      title: "",
      headerRight: () => (
        <HeaderActions
          onAdd={onAdd}
          onEdit={onEdit}
          moreOptions={moreOptions}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFilteredMeta = () => {
    if (!meta) return [];
    return meta.filter((item) => !!item.label);
  };

  const filteredMeta = getFilteredMeta();
  const hasMeta = filteredMeta.length > 0;

  const hasTableItems = !!tableItems && tableItems.length > 0;

  return (
    <Screen>
      <ScrollView>
        <View>
          <View style={[styles.container, styles.topContainer]}>
            <H4 style={styles.titleCaption}>{caption}</H4>
            <H2 numberOfLines={2} ellipsizeMode="middle">
              {title}
            </H2>

            {hasMeta && (
              <View style={styles.metaContainer}>
                {filteredMeta.map((item, i) => (
                  <DetailMeta key={item.id} meta={item} index={i} />
                ))}
              </View>
            )}

            <Row style={styles.actionsContainer}>
              <ButtonPrimary label={"Log Time"} index={0} numberOfButtons={2} />
              <ButtonPrimary
                label={"Mark Complete"}
                index={1}
                numberOfButtons={2}
              />
            </Row>
          </View>

          {hasTableItems && (
            <View style={[styles.container]}>
              {tableItems.map((item, index) => (
                <TableRow key={item.id} item={item} index={index} />
              ))}
            </View>
          )}
        </View>

        {children}
      </ScrollView>
    </Screen>
  );
};
