const data = [
  { num: "20+", text: "years of experience" },
  { num: "2018-2022", text: "Michelin Guide" },
  { num: "Top 50", text: "World Sushi Guide" },
  { num: "10+", text: "Specialties" },
];
export default function Numbers() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 mt-40">
      {data.map(({ text, num }, i) => (
        <div key={i} className="space-y-4 text-center">
          <h6 className="sm:text-4xl text-2xl font-semibold">{num}</h6>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
