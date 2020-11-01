import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Section from "../Section";
import IForm, { IFieldType, Field } from "../../../interfaces/IForm";
import FieldText from "../../Atoms/FieldText";
import FieldRichText from "../../Atoms/FieldRichText";
import FieldSelect from "../../Atoms/FieldSelect";
import colors from "../../../values/colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export interface IFormData {
  [key: string]: any;
}

export interface Props {
  schema: IForm;
  data: IFormData;
  onSetData: any;
  onSave: any;
}

const components: {
  [fieldType in IFieldType]: any;
} = {
  string: ({ data, field, onSetData }: any) => {
    const initialValue = data[field.id];
    return (
      <FieldText
        initialValue={initialValue}
        key={field.id}
        placeholder={field.placeholder}
        onChangeText={(value: any) => {
          onSetData({ ...data, [field.id]: value });
        }}
      />
    );
  },
  textarea: ({ data, field, onSetData }: any) => {
    const initialValue = data[field.id];
    return (
      <FieldText
        initialValue={initialValue}
        isTextarea={true}
        key={field.id}
        placeholder={field.placeholder}
        onChangeText={(value: any) => {
          onSetData({ ...data, [field.id]: value });
        }}
      />
    );
  },
  select: ({ data, field, onSetData, navigation }: any) => {
    return (
      <FieldSelect
        labelKey={field.labelKey}
        labelValue={field.labelValue}
        onPress={() => {
          navigation.navigate(field.route, {
            ...field.params,
            onSelectValue: (value: any) => {
              onSetData({
                ...data,
                [field.id]: value,
              });
            },
          });
        }}
      />
    );
  },
  html: ({ data, field, onSetData }: any) => {
    const initialValue = data[field.id];
    return (
      <FieldRichText
        initialValue={initialValue}
        key={field.id}
        placeholder={field.placeholder}
        onChangeText={(value: any) => {
          onSetData({ ...data, [field.id]: value });
        }}
      />
    );
  },
};

const isFormValid = (schema: any, data: any) => {
  if (!schema.required) return true;

  return Object.entries(schema.required).every((entry) => {
    const [fieldId, isRequired] = entry;

    if (isRequired) return !!data[fieldId];
    return true;
  });
};

const Form = ({ schema, data, onSetData, onSave }: Props) => {
  const [filteredSchema, setFilteredSchema] = useState<IForm | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.buttonCancel}>
          <Button
            title="Cancel"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      ),

      headerRight: () => (
        <View style={styles.buttonSubmit}>
          <Button
            title="Save"
            disabled={!isFormValid(schema, data)}
            onPress={onSave}
          />
        </View>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!schema) return;

    const visibleSections = schema.sections.filter(
      (section) => !section.hidden
    );

    const visibleFields = visibleSections.map((section) => ({
      ...section,
      fields: section.fields.filter((field) => !field.hidden),
    }));

    setFilteredSchema({
      required: schema.required,
      sections: visibleFields,
    });
  }, [schema]);

  if (!filteredSchema) {
    return null;
  }

  return (
    <ScrollView>
      {filteredSchema.sections.map((section) => {
        return (
          <Section style={styles.formSection} key={section.id}>
            {section.fields.map((field, index) => {
              return (
                <>
                  {index > 0 && (
                    <View
                      key={`${field.id}-line`}
                      style={styles.separatorLine}
                    />
                  )}
                  {components[field.type]({
                    data,
                    field,
                    onSetData,
                    navigation,
                  })}
                </>
              );
            })}
          </Section>
        );
      })}
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  formSection: {
    paddingBottom: 10,
    paddingTop: 10,
  },

  separatorLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.light.neutral,
    flexShrink: 0,
    marginLeft: 20,
  },

  buttonCancel: {
    paddingLeft: 10,
  },

  buttonSubmit: {
    paddingRight: 10,
  },
});
