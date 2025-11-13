import { getAllTransports } from "@/app/lib/queries";

export default async function TransportsPage() {
  try {
    const transports = getAllTransports();

    return (
      <div>
        {transports.map((transport) => (
          <div key={transport.id}>{transport.name}</div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error rendering TransportsPage:", error);
  }
}
