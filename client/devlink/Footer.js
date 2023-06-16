import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "footer-wrap")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "webflow-link")}
            button={false}
            options={{
              href: "https://webflow.com/",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "webflow-logo-tiny")}
              width={15}
              height="auto"
              loading="auto"
              src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6461d867abd174ddaaad789f_webflow-w-small%402x.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "paragraph-tiny")}
              tag="div"
            >
              {"Powered by Webflow"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
