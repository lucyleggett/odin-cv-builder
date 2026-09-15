import { useState } from "react";
import Entry from "./Entry";

export default function Block({ heading }) {
  const storageKey = `fieldset-${heading}`;

  const [blocks, setBlocks] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved).sections;
    return [];
  });

  return (
    <div className="block">
      {blocks.map((block, index) => (
        <section className="entry" key={block.id + index}>
          <Entry key={block.id} values={block.values} heading={heading} />
        </section>
      ))}
    </div>
  );
}