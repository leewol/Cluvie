import styled from "@emotion/styled";

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InnerBox = styled(ContainerBox)`
  flex-direction: column;
  width: 600px;
  height: 700px;
  button {
    width: 100%;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  div {
    position: relative;
    width: 100%;
  }

  div > input {
    width: 100%;
  }

  .icon {
    position: absolute;
    top: 0;
    right: 1%;
    margin-top: 2px;
    width: 20px;
    height: 20px;
  }
  .icon-ok {
    color: #00a424;
  }
  .icon-no {
    color: #ff0000;
  }
`;

export { ContainerBox, InnerBox, InputBox };
