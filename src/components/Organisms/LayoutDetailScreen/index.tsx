import * as React from "react";
import { useEffect, useMemo } from "react";
import { View, ScrollView } from "react-native";
import { Screen } from "../../atoms/Screen";
import { HeaderActions } from "../../molecules/HeaderActions";
import { Label } from "../../atoms/Label";
import { DetailMeta } from "../../molecules/DetailMeta";
import { TableRow } from "../../molecules/TableRow";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { Row } from "../../atoms/Row";
import { LayoutDetailScreenProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

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
  ...otherProps
}) => {
  const { styles } = useStyle(dynamicStyles);

  useEffect(() => {
    navigation.setOptions({
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
  }, []);

  const filteredMeta = useMemo(() => {
    if (!meta) {
      return [];
    }

    return meta.filter((item) => !!item.label);
  }, [meta]);

  const hasMeta = filteredMeta.length > 0;
  const hasTableItems = !!tableItems && tableItems.length > 0;

  return (
    <Screen {...otherProps}>
      <ScrollView>
        <View>
          <View style={[styles.container, styles.topContainer]}>
            <Label style={styles.titleCaption} sm secondary>
              {caption}
            </Label>

            <Label lg numberOfLines={2} ellipsizeMode="middle">
              {title}
            </Label>

            {hasMeta && (
              <View style={styles.metaContainer}>
                {filteredMeta.map((item, i) => (
                  <DetailMeta key={item.id} meta={item} index={i} />
                ))}
              </View>
            )}

            <Row style={styles.actionsContainer}>
              <ButtonPrimary
                label={"Log Time"}
                index={0}
                numberOfButtons={2}
                onPress={() => {
                  console.warn("PRESS 1");
                }}
              />
              <ButtonPrimary
                label={"Mark Complete"}
                index={1}
                numberOfButtons={2}
                onPress={() => {
                  console.warn("PRESS 1");
                }}
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
