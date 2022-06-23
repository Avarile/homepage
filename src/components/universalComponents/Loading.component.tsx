
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { ReactElement, ReactFragment, ReactHTML, ReactNode, useState } from "react";

const LoadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const LoadingSpinner: React.FC = (style?: Object) => {
  return (
    <>
      <Spin indicator={LoadingIcon} style={style} />
    </>
  );
};

export const LoadingContainer = (Child: JSX.Element | ReactNode | ReactFragment | ReactElement, style?: Object) => {
  return (
    <>
      <Spin indicator={LoadingIcon} style={style}>
        {Child}
      </Spin>
      ;
    </>
  );
};
