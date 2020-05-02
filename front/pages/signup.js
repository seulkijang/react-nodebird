import React, { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};
const Signup = () => {
  //   const [id, setId] = useState("");
  //   const [nick, setNick] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordCheck, setPasswordCheck] = useState("");
  //   const [term, setTerm] = useState(false);
  //   const [passwordError, setPasswordError] = useState(false);

  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (passwrord !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
    },
    [password, passwordCheck, term]
  );
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = (e) => {
    setTerm(e.target.checked);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} requried onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              value={nick}
              requried
              onChange={onChangeNick}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              requried
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-chk">비밀번호체크</label>
            <br />
            <Input
              name="user-password-chk"
              type="password"
              value={passwordCheck}
              requried
              onChange={onChangePasswordChk}
            />
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
              제로초 말을 잘 들을 것을 동의합니다.
            </Checkbox>
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
