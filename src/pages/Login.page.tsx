import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Notification } from "components/universalComponents/Notification.component";
import { useNavigate } from "react-router";
import RequestService from "data/Request.service";
import LocalStorageService from "data/LocalStorage.service";

const Login = () => {
  const navigate = useNavigate(); // 获取路由
  const [loginSuspense, setLoginSuspense] = useState(false); // 初始化登录等待
  // debugger;
  const fakeLoginApi = (payload: { username: string; password: string }) => {
    // 暂时用来顶替后端严证的API
    setLoginSuspense(true);
    setTimeout(() => {
      if (payload.username === "Avarile" && payload.password === "000000") {
        LocalStorageService.setCachedData("USER", payload.username);
        navigate("/mainentrance/dashboardindex");
        setLoginSuspense(false);
        Notification({
          type: "success",
          message: "Login Success",
        });
      } else {
        Notification({
          type: "error",
          message: `Credential denied`,
        });
        setLoginSuspense(false);
      }
    }, 3000);
  };
  const onFinish = (values: any) => {
    // 提交页面内容 触发器
    const payload = { username: values.username, password: values.password };
    fakeLoginApi(payload); // 触发假的验证功能
  };

  const onFinishFailed = (errorInfo: any) => {
    Notification({
      type: "error",
      message: "Wrong username or password!",
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#ccccc",
        // backgroundImage: `url(${Background})`,
      }}>
      <div
        style={{
          width: "30%",
          height: "35%",
          backgroundColor: "#d8d8d8da",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            filter: "blur(10px)",
          }}></div>
        <Form
          name="login"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{
            minWidth: "20rem",
            maxWidth: "60rem",
          }}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              // {
              //   min: 8,
              //   message: "password must be at least 8 digit.",
              // },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button
              block
              type="primary"
              htmlType="submit"
              disabled={loginSuspense}
              loading={loginSuspense}
              // onClick={() => {
              //   setLoginSuspense(true)
              //   setTimeout(() => {
              //     setLoginSuspense(false)
              //   }, 3000)
              // }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
