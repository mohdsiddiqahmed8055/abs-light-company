import capturedCSS from "../../styles/captured.css?raw";

export function CapturedStyles() {
  return (
    <style>
      {capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}
    </style>
  );
}
