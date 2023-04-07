import { UserDisplay } from "./components/user-display";
import { User } from "./types";

function App() {
  const users: User[] = [
    {
      name: "ngimdock",
      messages: [{ body: "Hello world !" }, { body: "Je suis dev" }],
    },
  ];
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
