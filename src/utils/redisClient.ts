import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

async function redisFetch(command: string, ...args: string[]) {
  const url = `${process.env.UPSTASH_REDIS_REST_URL}/${command}/${args.join("/")}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
    },
  });

  return res.json();
}

const PREFIX = "taskApp:";

const redisClient = {
  async getAllTasks(): Promise<any[] | null> {
    const cached = await redisFetch("GET", `${PREFIX}tasks:all`);
    if (cached && typeof cached === "object" && "result" in cached) {
      return (cached as { result?: string }).result
        ? JSON.parse((cached as { result?: string }).result as string)
        : null;
    }
    return null;
  },
  async setAllTasks(tasks: any[], ttl: number = 3600): Promise<string> {
    const result = await redisFetch(
      "SETEX",
      `${PREFIX}tasks:all`,
      ttl.toString(),
      JSON.stringify(tasks)
    );
    return (result as { result: string }).result;
  }
};

export default redisClient;
