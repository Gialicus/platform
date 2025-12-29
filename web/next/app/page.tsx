import { getAgentsConfigs } from "../client/api.mjs";


export default async function Home() {
  const response = await getAgentsConfigs({query: { limit: 10}});
  const data = response.body;
  return (
    <AgentConfigList data={data} />
  );
}

function AgentConfigList({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item: any) => (
        <div key={item.id} className="border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.instructions}</p>
          <p className="text-sm text-gray-500">{item.model}</p>
        </div>
      ))}
    </div>
  );
}
