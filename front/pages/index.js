import React from "react";
<<<<<<< HEAD
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
=======
import { Input, Form, Button, Card, Avatar } from "antd";
import {
  HeartOutlined,
  RetweetOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
>>>>>>> 52847910c8de65fcbfdd413066fcb2bc42fce16a

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

<<<<<<< HEAD
const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
=======
// const Home = () => {
//   return (
//     <>
//       <div>
//         {dummy.isLoggedIn && (
//           <Form encType="multipart/form-data">
//             <Input.TextArea maxLength={140} placeholder="뭐래니" />
//             <div>
//               <input type="file" multiple hidden />
//               <Button>이미지업로드</Button>
//               <Button
//                 type="primary"
//                 style={{ float: "right" }}
//                 htmlType="submit"
//               >
//                 짹
//               </Button>
//             </div>
//             <div>
//               {dummy.imagePaths.map((v, i) => {
//                 return (
//                   <div key={v} style={{ display: "inline-block" }}>
//                     <img
//                       src={"http://localhost:3065/" + v}
//                       style={{ width: "200px" }}
//                       alt={v}
//                     />
//                     <div>
//                       <Button>wprj</Button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </Form>}
//           {dummy.mainPosts.map((c)=>{
//               return(
//                   <Card
//                   key={+c.createdAt}
//                   cover={c.img && <img alt="example" src={c.img} />}
//                   actions ={[
//                       <Icon type ="retweet" key="retweet" />,
//                       <Icon type ="heart" key="heart" />,
//                       <Icon type ="message" key="message" />,
//                       <Icon type ="ellipsis" key="ellipsis" />,
//                   ]}
//                   extra={<Button>팔로우</Button>}
//                   >
//                   <Card.Meta
//                   avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
//                   title={dummy.User.nickname}
//                   description={c.content}
//                    />
//                   </Card>
//               );
//           })}
//         )
//       </div>
//     </>
//   );
// };

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form style={{ marginBottom: 20 }} encType="multipart/form-data">
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
      )}
      {dummy.mainPosts.map((c) => {
        return (
          <Card
            key={+c.createdAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              //   <Icon type="retweet" key="retweet" />,
              //   <HeartOutlined />,
              //   <Icon type="ellipsis" key="ellipsis" />,
              <RetweetOutlined />,
              <HeartOutlined />,
              <MessageOutlined />,
              <EllipsisOutlined />,
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        );
>>>>>>> 52847910c8de65fcbfdd413066fcb2bc42fce16a
      })}
    </div>
  );
};

export default Home;
