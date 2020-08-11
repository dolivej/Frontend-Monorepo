import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Collection } from "./index";
import { PostPreview } from "../postPreview/index";

let tagsConst = [
  {
    tagName: "React",
    tagLink:
      "https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element",

    icon: "https://www.drupal.org/files/project-images/react.png",
    size: 2,
    tagColor: "#00bae3",
    textColor: "white",
  },
  {
    tagName: "Gatsby",
    tagLink:
      "https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element",

    icon:
      "data:image/png;base64,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",
    size: 2,
    tagColor: "#860ac9",
    textColor: "white",
  },
];

const Template = (props: any) => {
  return (
    <div style={{ gridArea: props.gridId, width: "100%", height: "100%" }}>
      <PostPreview {...props.data} />
    </div>
  );
};

const Example = () => {
  return (
    <div
      style={{
        width: number("width", 90) + "%",
        height: number("height", 1300) + "px",
        backgroundColor: "lightgray",
      }}
    >
      <Collection
        sizemap="'a b' 'a b' 'c c'"
        minMobileHeight="520px"
        data={[
          {
            data: {
              tags: tagsConst,
              image:
                "https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/750-X-400-2x.jpg",
              brief: "Brief Description",
              title: "Project Name",
              about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
              links: [
                { text: "Read More", link: "link" },
                { text: "Github", link: "link" },
              ],
            },
            gridId: "a",
          },
          {
            data: {
              tags: tagsConst,
              image:
                "https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/750-X-400-2x.jpg",
              brief: "Brief Description",
              title: "Project Name",
              about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
              links: [
                { text: "Read More", link: "link" },
                { text: "Github", link: "link" },
              ],
            },
            gridId: "b",
          },
          {
            data: {
              tags: tagsConst,
              image:
                "https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/750-X-400-2x.jpg",
              brief: "Brief Description",
              title: "Project Name",
              about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
              links: [
                { text: "Read More", link: "link" },
                { text: "Github", link: "link" },
              ],
            },
            gridId: "c",
          },
        ]}
        template={Template}
        spacing={number("spacing", 20) + "px"}
      />
    </div>
  );
};

storiesOf("Content/Collection", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
