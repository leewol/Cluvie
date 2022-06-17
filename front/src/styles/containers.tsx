import styled from "@emotion/styled";

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    margin-bottom: 70px;
  }
`;

const InnerBox = styled(ContainerBox)`
  flex-direction: column;
  width: 400px;
  height: 700px;
`;

const ColumnContainerBox = styled(ContainerBox)`
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-left: 10%;
  margin-right: 10%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  margin-bottom: 8px;
  border-radius: 7px;
  border: 1px solid #d3d3d3;
  outline: none;
  padding-left: 10px;
  font-family: inherit;
  ::placeholder {
    font-size: 14px;
  }
  :focus {
    animation: 0.7s linear forwards border-focus;
  }
  @keyframes border-focus {
    from {
      border: 1px solid #d3d3d3;
    }
    to {
      border: 1px solid #ffc300;
    }
`;

export { ContainerBox, InnerBox, ColumnContainerBox, StyledInput };
