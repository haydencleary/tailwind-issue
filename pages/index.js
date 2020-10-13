import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig({});

const gray = fullConfig.theme.textColor.gray["800"];

export default function Home() {
  return (
    <div className="text-red-400">
      hello world {gray}
    </div>
  )
}
