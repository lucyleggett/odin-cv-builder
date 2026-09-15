import Entry from "./Entry";

export default function Block({ heading, sections }) {
  return (
    <div className="block">
      {sections.map((block, index) => (
        <section className="entry" key={block.id + index}>
          <Entry key={block.id} values={block.values} heading={heading} />
        </section>
      ))}
    </div>
  );
}
