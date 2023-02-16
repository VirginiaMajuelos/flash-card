import { useState } from "react";

function Button() {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <button
      onClick={() => setSubscribe(!subscribe)}
      class="py-2 px-8 rounded bg-amber-300 text-black my-4"
    >
      {subscribe ? "Ya estás subscrito!!" : "Click para suscribirte"}
    </button>
  );
}

export default Button;
