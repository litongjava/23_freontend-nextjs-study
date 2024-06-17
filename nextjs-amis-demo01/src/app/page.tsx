import Image from "next/image";
import {render as renderAmis} from "amis";


export default function Home() {
  return (
    <div>
      {renderAmis({
        type: "button",
        label: "保存",
        level: "primary",
        onClick: function () {
          console.log("TEST");
        },
      })}
    </div>
  );
}
