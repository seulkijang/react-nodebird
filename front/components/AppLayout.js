import React from "react";
import { Menu, Input, Card, Avatar, Row, Col } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
<<<<<<< HEAD
import UserProfile from "../components/UserProfile";
=======
>>>>>>> 52847910c8de65fcbfdd413066fcb2bc42fce16a

const dummy = {
  nickname: "seul",
  Post: [],
  Followings: [],
  Follower: [],
  isLoggedIn: false,
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드1</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>

<<<<<<< HEAD
      <Row gutter={8}>
        {/* 간격 띄워줌 거터 */}
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
=======
      <Row gutter={10}>
        {/* 간격 띄워줌 거터 */}
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? (
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
          ) : (
            <LoginForm />
          )}
>>>>>>> 52847910c8de65fcbfdd413066fcb2bc42fce16a
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
<<<<<<< HEAD
          <Link href="http://seulki.ca">
            <a>Made by seulki</a>
          </Link>
=======
          세번째
>>>>>>> 52847910c8de65fcbfdd413066fcb2bc42fce16a
        </Col>
      </Row>
    </div>
  );

  AppLayout.propTypes = {
    children: PropTypes.node,
  };
};

export default AppLayout;
