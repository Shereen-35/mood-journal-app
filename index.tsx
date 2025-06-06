import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import MoodSelector from "../components/MoodSelector";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const router = useRouter();

  const saveEntry = () => {
    if (!mood || !note) return Alert.alert("Select a mood and write something.");
    const entry = { mood, note, date: new Date().toISOString() };
    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.push(entry);
    localStorage.setItem("logs", JSON.stringify(logs));
    Alert.alert("Saved!");
    setNote("");
    setMood("");
    router.push("/logs");
  };

  return (
    <View className="flex-1 p-4 bg-white dark:bg-black">
      <Text className="text-xl font-bold mb-2">How are you feeling?</Text>
      <MoodSelector selected={mood} onSelect={setMood} />
      <TextInput
        placeholder="Write about it..."
        className="border p-2 rounded my-4"
        multiline
        value={note}
        onChangeText={setNote}
      />
      <Button title="Save" onPress={saveEntry} />
    </View>
  );
}
