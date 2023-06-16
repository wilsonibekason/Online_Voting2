import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Plugin.module.css";

export function Plugin({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "pricing-comparison")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "columns", "f2wf-columns")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "column-2")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "intro")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "image-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "pricing-1")}
                loading="lazy"
                width={80}
                height={80}
                src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/646882272f58d5dd85964ed2_pricing-1.png"
              />
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "name")} tag="div">
              <_Builtin.Block className={_utils.cx(_styles, "text")} tag="div">
                {"Startup"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-2")}
                tag="div"
              >
                {"Starting at"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "pricing")} tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "text-3")}
                tag="div"
              >
                {"$599/mo"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "description")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-4")}
                tag="div"
              >
                {"Lorem ipsum dolor"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "button-2")}
              button={false}
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-5")}
                tag="div"
              >
                {"TALK TO AN EXPERT"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "separator")}
            tag="div"
          />
          <_Builtin.Block className={_utils.cx(_styles, "features")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "icon")} tag="div">
                <_Builtin.Image
                  className={_utils.cx(_styles, "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/64688228b3a57bbf993b0144_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/64688228b3a57bbf993b0144_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "column-3")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "", "intro")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "", "image-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "", "pricing-1")}
                loading="lazy"
                width={80}
                height={80}
                src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/64688229041dd974551a5957_pricing-2.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "name")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text")}
                tag="div"
              >
                {"Growth"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-2")}
                tag="div"
              >
                {"Starting at"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-3")}
                tag="div"
              >
                {"$1,499/mo"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "description")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-4")}
                tag="div"
              >
                {"Lorem ipsum dolor"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "button-3")}
              button={false}
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-6")}
                tag="div"
              >
                {"TALK TO AN EXPERT"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "separator")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "features-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing-feature-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "icon-wrapper-2")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/64688228b3a57bbf993b0144_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Etiam sodales ac felis id interdum"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper-2")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/64688228b3a57bbf993b0144_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Etiam sodales ac felis id interdum"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper-2")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Etiam sodales ac felis id interdum"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper-2")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Etiam sodales ac felis id interdum"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper-2")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Etiam sodales ac felis id interdum"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper-2")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Etiam sodales ac felis id interdum"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "", "column-2")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "", "intro")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "", "image-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "", "pricing-1")}
                loading="lazy"
                width={80}
                height={80}
                src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/646882272f58d5dd85964ed2_pricing-1.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "name")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text")}
                tag="div"
              >
                {"Enterprise"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-2")}
                tag="div"
              >
                {"Starting at"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-3")}
                tag="div"
              >
                {"$2,499/mo"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "description")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-4")}
                tag="div"
              >
                {"Lorem ipsum dolor"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "", "button-2")}
              button={false}
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-5")}
                tag="div"
              >
                {"TALK TO AN EXPERT"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "separator")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "", "features")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/64688228b3a57bbf993b0144_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/64688228b3a57bbf993b0144_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pricing-feature")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "icon")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "", "icon-wrapper")}
                  loading="lazy"
                  width={24}
                  height={24}
                  src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6468822838e903e8d9b2ecc6_Icon-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "feature-item")}
                tag="div"
              >
                {"Lorem ipsum dolor sit amet"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
