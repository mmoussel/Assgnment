import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useMemo } from 'react';
import { Note } from 'src/types/note.types';

import { useTheme } from '@react-navigation/native';
import { Spacer } from '../shared/spacer.component';
import { Divider } from '../shared/divider.component';
interface Props {
  notes: Note[];
}
export const NotesHistory: FC<Props> = ({ notes }) => {
  const { colors, font, spacing } = useTheme();
  const renderItems = useMemo(() => {
    return notes.map((note, index) => {
      const isLastItem = index === notes.length - 1;
      return (
        <View key={note.id}>
          <Text
            style={{
              fontFamily: font.family.semiBold,
              fontSize: font.size.md,
              color: colors.text,
            }}>
            {note.noteBy}
          </Text>
          <Text
            style={{
              fontFamily: font.family.italic,
              fontSize: font.size.xs,
              color: colors.text,
            }}>
            {note.createdAt}
          </Text>
          <Text
            style={{
              fontFamily: font.family.regular,
              fontSize: font.size.sm,
              color: colors.text,
            }}>
            {note.details}
          </Text>

          {!isLastItem && <Divider style={{ marginVertical: spacing(2) }} />}
        </View>
      );
    });
  }, [notes]);

  if (!notes.length) {
    return null;
  }

  return (
    <View>
      <Spacer size={2} />

      <Text
        style={{
          fontFamily: font.family.regular,
          fontSize: font.size.md,
          color: colors.text,
        }}>
        History Notes
      </Text>

      <Spacer size={2} />

      <View
        style={{
          padding: spacing(3),
          backgroundColor: colors.input,
          ...styles.card,
        }}>
        {renderItems}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 0,
    borderRadius: 25,
    shadowRadius: 2,
    shadowOpacity: 0.17,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 6,
  },
});
