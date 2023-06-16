import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MakemakerServices.module.css";

export function MakemakerServices({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "section-heading-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "", "label", "cc-light")}
            tag="div"
          >
            {"What we are best at"}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "", "heading-5")}
            tag="h2"
          >
            {"Our Services"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Grid
          className={_utils.cx(_styles, "our-services-grid")}
          tag="div"
        >
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-fce0d081-74e2-1a2e-028b-3c2f4708b361-4708b359"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "service-icon")}
              width="50"
              height="auto"
              loading="auto"
              src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/646f6fc17936bca6f5ab578f_product%20design.jpg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "paragraph-bigger")}
              tag="div"
            >
              {"Product Design"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "paragraph-light")}
              tag="div"
            >
              {
                "We offer product design services including CAD modeling, PCB design, Drawing files, Rendering, and Animation."
              }
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-fce0d081-74e2-1a2e-028b-3c2f4708b367-4708b359"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "service-icon")}
              width={50}
              height="auto"
              loading="auto"
              src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/646f71e7c49942bb62b66f5a_printing%203d.jpg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "paragraph-bigger")}
              tag="div"
            >
              {"3D Printing"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "paragraph-light")}
              tag="div"
            >
              {
                "We offer 3D printing services. We print the following materials PLA, ABS, TPU, ASA, and FLEX."
              }
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-fce0d081-74e2-1a2e-028b-3c2f4708b36d-4708b359"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "service-icon")}
              width={50}
              height="auto"
              loading="auto"
              src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/646f6fbf981a10d55899f73f_Laser%20Cutting.jpg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "paragraph-bigger")}
              tag="div"
            >
              {"Laser Cutting"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "paragraph-light")}
              tag="div"
            >
              {
                "We offer Laser cutting services for paper, acrylic sheets, and wood."
              }
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
