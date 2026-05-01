import { Dock } from './components/Dock';
import { MenuBar } from './components/MenuBar';

function App() {

  return (
    <main className="h-screen w-screen relative overflow-hidden bg-surface">
      {/* Abstract Glass Background */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-400/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      </div> */}

      {/* Top Menu Bar */}
      <MenuBar />

      {/* Main Content Area */}
      <div className="relative w-fit z-10 h-[calc(100vh-28px)] m-auto flex items-center justify-center">

      </div>

      {/* Dock */}
      <Dock />
    </main>
  );
}

export default App;
