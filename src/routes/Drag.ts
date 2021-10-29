import type { Writable } from "svelte/store";
import { gridSnap } from './GridSnap';
import { get } from "svelte/store";

interface IDraggableProps {
  left: Writable<number>;
  top: Writable<number>;
}

export const draggable = (node: HTMLElement | SVGElement, { left, top }: IDraggableProps) => {

  function handleMouseMove(e: MouseEvent) {
    const newTop = get(top) + e.movementY;
    const newLeft = get(left) + e.movementX;

    top.set(newTop);
    left.set(newLeft);

    node.style.transform = `translate(${gridSnap(newLeft)}px, ${gridSnap(newTop)}px)`;
  }

  const unRegistre = () => {
    window.removeEventListener('mouseup', unRegistre);
    window.removeEventListener('mousemove', handleMouseMove);
  };

  const registre = () => {
    window.addEventListener('mouseup', unRegistre);
    window.addEventListener('mousemove', handleMouseMove);
  };

  node.addEventListener('mousedown', registre);


  const subscriptionLeft = left.subscribe(value => {
    node.style.transform = `translate(${gridSnap(value)}px, ${gridSnap(get(top))}px)`;
  });

  const subscriptionTop = top.subscribe(value => {
    node.style.transform = `translate(${gridSnap(get(left))}px, ${gridSnap(value)}px)`;
  });

  return {
    destroy() {
      subscriptionTop();
      subscriptionLeft();
      node.removeEventListener('mousedown', registre);
    }
  }
}
