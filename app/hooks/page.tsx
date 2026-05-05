import Link from "next/link";

const hooks = [
  { name: "useState", path: "/hooks/useState" },
  { name: "useEffect", path: "/hooks/useEffect" },
  { name: "useRef", path: "/hooks/useRef" },
  { name: "useMemo", path: "/hooks/useMemo" },
  { name: "useCallback", path: "/hooks/useCallback" },
];

export default function HooksMenu() {
  return (
    <div style={{ padding: 32 }}>
      <h1>React Hooks Menu</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {hooks.map((hook) => (
          <li key={hook.name} style={{ margin: "12px 0" }}>
            <Link href={hook.path} style={{ fontSize: 20, color: "#0070f3" }}>
              {hook.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
