import React from "react";
import { Input, Form, Button } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "zero",
      },
      content: "슬픔",
    },
  ],
};
const PostForm = () => {
  return (
    <Form style={{ margin: "10px 10px 30px" }} encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="뭐래" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          쨱쨱
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map((v, i) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
