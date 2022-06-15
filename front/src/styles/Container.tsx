import styled from "@emotion/styled";

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InnerBox = styled(ContainerBox)`
  flex-direction: column;
  width: 400px;
  height: 700px;
`;

export { ContainerBox, InnerBox };
