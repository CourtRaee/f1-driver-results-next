// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello from the API endpoint!" });
// }

export async function GET() {
  const res = await fetch(connectionString, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": "881e1277-d158-47a4-be2a-e41e97b054c8",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
