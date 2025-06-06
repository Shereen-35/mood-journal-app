import { View, Text, TouchableOpacity } from "react-native";

const moods = ["😊", "😐", "😢", "😡", "😴"];

export default function MoodSelector({ selected, onSelect }: { selected: string; onSelect: (m: string) => void }) {
  return (
    <View className="flex-row space-x-4">
      {moods.map((m) => (
        <TouchableOpacity
          key={m}
          onPress={() => onSelect(m)}
          className={`p-2 rounded-full ${selected === m ? "bg-blue-200" : "bg-gray-200"}`}
        >
          <Text className="text-2xl">{m}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
