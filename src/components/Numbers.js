const data = [
  { num: "20+", text: "years of experience" },
  { num: "2018-2022", text: "Michelin Guide" },
  { num: "Top 50", text: "World Sushi Guide" },
  { num: "10+", text: "Specialties" },
];
export default function Numbers() {
  return (
    <div className="grid grid-cols-4 mt-40">
      {data.map(({ text, num }, i) => (
        <div key={i} className="space-y-4 text-center">
          <h6 className="text-4xl font-semibold">{num}</h6>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
