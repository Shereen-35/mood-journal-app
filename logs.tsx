import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";

export default function LogsScreen() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("logs") || "[]");
    setLogs(saved.reverse());
  }, []);

  return (
    <View className="flex-1 p-4">
      <Text className="text-xl font-bold mb-4">Mood Logs</Text>
      <FlatList
        data={logs}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View className="p-3 border-b border-gray-300">
            <Text className="text-lg">{item.mood} - {new Date(item.date).toLocaleDateString()}</Text>
            <Text className="text-gray-700">{item.note}</Text>
          </View>
        )}
      />
    </View>
  );
}
