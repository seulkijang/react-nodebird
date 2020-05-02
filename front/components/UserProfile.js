import React from "react";
import { Card, Avatar } from "antd";

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹<br />
          {dummy.Post.length}
        </div>,
        <div key="followings">
          팔로잉
          <br />
          {dummy.Followings.length}
        </div>,
        <div key="follower">
          팔로어
          <br />
          {dummy.Follower.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

export default UserProfile;
