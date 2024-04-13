// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello from the API endpoint!" });
// }

export async function GET() {
  const res = await fetch(connectionString, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
