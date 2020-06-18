import { storiesOf } from "@storybook/react";
import React from "react";
import Thumbnail from "../components/thumbnail/Thumbnail";
import Provider from "./decorators/decorators";
import { MemoryRouter } from "react-router-dom";

storiesOf("Thumbnail", module)
  .addDecorator((story) => <Provider story={story()} />)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "Article thumbnail with title, image and description",
    () => {
      const article = {
        title: "My article",
        urlToImage:
          "https://i.dailymail.co.uk/1s/2020/06/17/16/29719992-0-image-a-23_1592408042536.jpg",
        description: "My title decs",
      };
      return <Thumbnail article={article} />;
    },
    {
      notes: "This is sample of Thumbnail component.",
    }
  );
