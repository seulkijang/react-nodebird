import React from "react";
import { Menu, Input, Card, Avatar, Row, Col } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import UserProfile from "../components/UserProfile";

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

      <Row gutter={8}>
        {/* 간격 띄워줌 거터 */}
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="http://seulki.ca">
            <a>Made by seulki</a>
          </Link>
        </Col>
      </Row>
    </div>
  );

  AppLayout.propTypes = {
    children: PropTypes.node,
  };
};

export default AppLayout;
