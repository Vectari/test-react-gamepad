"use client";
// navigator.getGamepads()
import { useEffect, useState } from "react";

export function Gamepad() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [aPressed, setAPressed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const controller = navigator.getGamepads()[0];
      if (controller) {
        setX(controller.axes[0]);
        setY(controller.axes[1]);
        setAPressed(controller.buttons[0].pressed);
      }
    }, 100);
  }, []);

  return (
    <>
      <div>X {x}</div>
      <div>Y {y}</div>
      {aPressed && <div>A</div>}
    </>
  );
}
