import React, { useState } from "react";

const WithLoading = (Component) => {
  const WrappedComponent = () => {
    const [loading, setLoading] = useState(false);
    return <Component loading={loading} setLoading={setLoading} />;
  };
  return WrappedComponent;
};

export default WithLoading;
