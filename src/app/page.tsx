import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import fs from "fs";
import path from "path";

async function getData() {
  const filePath = path.join(process.cwd(), "src/app", "data.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

export default async function Home() {
  const data = await getData();
  console.log("data", data);

  return (
    <div className="container mx-auto my-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
