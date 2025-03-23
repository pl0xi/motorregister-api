import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("db", "routes/update_db.tsx"),
] satisfies RouteConfig;

