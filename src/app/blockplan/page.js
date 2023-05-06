function createData(name, start, end) {
  return { name, start, end };
}

const rows = [
  createData('TIF21A', 'Oktober 2021', 'September 2024'),
  createData('TIF21B', 'Oktober 2021', 'September 2024'),
  createData('TIF22A', 'Oktober 2022', 'September 2025'),
  createData('TIF22B', 'Oktober 2022', 'September 2025'),
  createData('WWI22A', 'Oktober 2022', 'September 2025'),
  createData('WWI23A', 'Oktober 2023', 'September 2026'),
];

// Table build with daisyUI (plugin tailwind adding some components)
// https://daisyui.com/components/table/

export default function Blockplans() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl">Blockpläne</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Kurs</th>
              <th>Start</th>
              <th>Ende</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.start}</td>
                <td>{row.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
