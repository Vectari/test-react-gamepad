import { Gamepad } from "@/GamepadAPI/GamepadAPI";

export default function Home() {
  return (
    <>
      <h1 className="p-24">Hello world</h1>
      <div className="p-24">
        <Gamepad />
      </div>
    </>
  );
}
