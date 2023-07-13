import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from '../shared/text-input.component';
import { SaveIcon } from 'src/assets/svgs';
import { useTheme } from '@react-navigation/native';
import { Spacer } from '../shared/spacer.component';
import { addNewNote } from 'src/services/note.service';

export const AddNoteInput = ({
  modelId,
  onSuccess,
}: {
  modelId: number;
  onSuccess: () => void;
}) => {
  const { colors, font, spacing } = useTheme();

  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => setValue(newValue);

  const handleSave = async () => {
    if (!value) {
      return;
    }

    try {
      await addNewNote({ details: value, model_id: modelId });
      setValue('');
      onSuccess();
    } catch (error) {
      console.log(
        '🚀 ~ file: add-note-input.component.tsx:29 ~ handleSave ~ error:',
        error,
      );
    }
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            paddingHorizontal: spacing(4),
            paddingVertical: spacing(1),
          }}
          onPress={handleSave}
          disabled={!value}>
          <SaveIcon />
          <Spacer dir="horizontal" size={1} />
          <Text
            style={{
              fontSize: font.size.sm,
              color: colors.text,
              fontFamily: font.family.regular,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Add a Note…"
        containerStyle={{ backgroundColor: colors.input, padding: spacing(2) }}
        style={{
          fontSize: font.size.md,
        }}
        value={value}
        onChangeText={handleChange}
        onSubmitEditing={handleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
