import React from "react";
import * as _Builtin from "./_Builtin";
import { SparkSocialCollection } from "./SparkSocialCollection";
import * as _utils from "./utils";
import _styles from "./SparkFooter.module.css";

export function SparkFooter({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "spark-footer")} tag="footer">
      <_Builtin.Block
        className={_utils.cx(_styles, "spark-section", "spark-shortened")}
        tag="footer"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "spark-container",
            "spark-centered-content"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "spark-brand",
              "spark-margin-bottom-32px"
            )}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6463b00a64cdb69da2adf195_Make_Maker_Resized_logo_for_website-removebg-preview.png"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "spark-description")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-light")}
            >
              {
                "Make Maker is a groundbreaking startup that uses product design and development to create innovative, practical, and relevant tools and products that drive Manufacturing and Education. We are boosting students academic performance and transforming Manufacturing in Africa."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "spark-flexed-row-of-links",
              "spark-centered-row"
            )}
            id={_utils.cx(
              _styles,
              "w-node-ce62354d-4c99-0c8f-4dc8-74df24792cd6-24792cd1"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "spark-button",
                "spark-light-button"
              )}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"About"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "spark-button",
                "spark-light-button"
              )}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Services"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "spark-button",
                "spark-light-button"
              )}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Projects"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "spark-button",
                "spark-light-button"
              )}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Gallery"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "spark-button",
                "spark-light-button"
              )}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Blog"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "spark-button",
                "spark-light-button"
              )}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "spark-button",
                "spark-light-button"
              )}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Products"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "spark-footer-bottom",
          "spark-top-border"
        )}
        tag="div"
      >
        <_Builtin.Container
          className={_utils.cx(_styles, "spark-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "spark-flex-row",
              "spark-24px-row-spacing"
            )}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "spark-footer-text",
                "spark-foreground-secondary"
              )}
            >
              {"Copyright © 2023— Designed by "}
              <_Builtin.Emphasized>{"wilsonibekason"}</_Builtin.Emphasized>
            </_Builtin.Paragraph>
            <SparkSocialCollection />
          </_Builtin.Block>
        </_Builtin.Container>
      </_Builtin.Block>
    </_Component>
  );
}
