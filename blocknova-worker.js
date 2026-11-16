export default {
  async fetch(request, env) {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };

    const reply = (data, status = 200) =>
      new Response(JSON.stringify(data), { status, headers });

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (!env.SERVERS) {
      return reply({
        error: "KV_NOT_CONFIGURED",
        message: "فضای ذخیره‌سازی هنوز تنظیم نشده است."
      }, 503);
    }

    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return reply({ status: "online", project: "BlockNova API" });
    }

    if (url.pathname === "/servers" && request.method === "GET") {
      const list = await env.SERVERS.list();
      const servers = [];

      for (const key of list.keys) {
        const value = await env.SERVERS.get(key.name);
        if (value) servers.push(JSON.parse(value));
      }

      return reply({ servers });
    }

    if (request.method === "POST" || request.method === "DELETE") {
      const token = request.headers.get("Authorization");

      if (!env.ADMIN_TOKEN || token !== `Bearer ${env.ADMIN_TOKEN}`) {
        return reply({ error: "دسترسی غیرمجاز" }, 401);
      }
    }

    if (url.pathname === "/servers" && request.method === "POST") {
      let data;

      try {
        data = await request.json();
      } catch {
        return reply({ error: "اطلاعات ارسالی نامعتبر است." }, 400);
      }

      if (!data.name || !data.edition || !data.version) {
        return reply({ error: "اطلاعات سرور ناقص است." }, 400);
      }

      const id = crypto.randomUUID();

      const server = {
        id,
        name: String(data.name).slice(0, 40),
        edition: String(data.edition),
        version: String(data.version),
        software: String(data.software || "Vanilla"),
        status: "not_created",
        createdAt: new Date().toISOString()
      };

      await env.SERVERS.put(id, JSON.stringify(server));

      return reply({ success: true, server }, 201);
    }

    const match = url.pathname.match(/^\/servers\/([a-zA-Z0-9-]+)$/);

    if (match && request.method === "DELETE") {
      await env.SERVERS.delete(match[1]);
      return reply({ success: true, message: "اطلاعات حذف شد." });
    }

    return reply({ error: "مسیر پیدا نشد." }, 404);
  }
};
