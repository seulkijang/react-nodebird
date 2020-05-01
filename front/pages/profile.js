import React from "react";
import { Form, Button, List, Card, Input, Icon } from "antd";
import { StopOutlined } from "@ant-design/icons";

const Profile = () => {
  return (
    <div>
      <Form
        style={{
          marginBottom: "20px",
          border: "1px solid #red",
          padding: "20px",
        }}
      >
        <Input addonBefore="닉넴" />
        <Button type="primary">수정</Button>
      </Form>
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로잉목록</div>}
        loadMore={<Button style={{ width: "100%" }}> 더보기</Button>}
        bordered
        dataSource={["제로초", "슬", "dd"]}
        renderItem={(item) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />

      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로워목록</div>}
        loadMore={<Button style={{ width: "100%" }}> 더보기</Button>}
        bordered
        dataSource={["제로초", "슬", "dd"]}
        renderItem={(item) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Profile;
