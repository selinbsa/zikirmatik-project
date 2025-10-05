import { useEffect, useState } from "react";
import SplashScreen from "./pages/SplashScreen.jsx";
import NameSetup from "./pages/NameSetup.jsx";
import ZikirList from "./pages/ZikirList.jsx";
import AddZikir from "./pages/AddZikir.jsx";
import ZikirDetail from "./pages/ZikirDetail.jsx";

export default function App() {
  const [stage, setStage] = useState("splash"); // splash | name | home | add | detail
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (stage !== "splash") return;
    const t = setTimeout(() => setStage("name"), 3000);
    return () => clearTimeout(t);
  }, [stage]);

  if (stage === "splash") return <SplashScreen />;
  if (stage === "name") return <NameSetup onStart={() => setStage("home")} />;
  if (stage === "add")
    return (
      <AddZikir
        onSave={() => setStage("home")}
        onCancel={() => setStage("home")}
      />
    );
  if (stage === "detail")
    return <ZikirDetail id={selectedId} onBack={() => setStage("home")} />;

  // home (liste)
  return (
    <ZikirList
      onAddClick={() => setStage("add")}
      onSelect={(id) => {
        setSelectedId(id);
        setStage("detail");
      }}
    />
  );
}
