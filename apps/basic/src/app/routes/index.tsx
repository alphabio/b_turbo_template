// b_path:: apps/basic/src/app/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useStore } from "@/lib";

export const Route = createFileRoute("/(public)/")({
  component: Index,
});

function Index() {
  // Get the click action from our store
  const { click } = useStore((state) => state.actions);
  console.log(click);

  return (
    <div>
      HELLO!
    </div>
  );
}
