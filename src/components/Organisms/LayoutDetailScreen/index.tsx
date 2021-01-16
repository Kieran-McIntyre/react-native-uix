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
  primaryActions,
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

  const hasMeta = !!filteredMeta?.length;
  const hasTableItems = !!tableItems?.length;
  const hasPrimaryActions = !!primaryActions?.length;

  return (
    <Screen {...otherProps}>
      <ScrollView>
        <View>
          <View style={[styles.container, styles.topContainer]}>
            {caption && (
              <Label
                style={styles.titleCaption}
                sm
                secondary
                testID="layoutDetail__caption"
              >
                {caption}
              </Label>
            )}

            <Label
              lg
              numberOfLines={2}
              ellipsizeMode="middle"
              testID="layoutDetail__title"
            >
              {title}
            </Label>

            {hasMeta && (
              <View testID="layoutDetail__meta" style={styles.metaContainer}>
                {filteredMeta.map((item, i) => (
                  <DetailMeta key={item.id} meta={item} index={i} />
                ))}
              </View>
            )}

            {hasPrimaryActions && (
              <Row
                testID="layoutDetail__primaryActions"
                style={styles.actionsContainer}
              >
                {primaryActions?.map((action, i) => (
                  <ButtonPrimary
                    label={action.label}
                    index={i}
                    numberOfButtons={primaryActions.length}
                    onPress={action.onPress}
                    key={`${action.label}-${i}`}
                  />
                ))}
              </Row>
            )}
          </View>

          {hasTableItems && (
            <View testID="layoutDetail__table" style={[styles.container]}>
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
