import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png " alt="dices image" />
      </div>
      <div className="content">
        <h1>Dice Game </h1>
        <Button onClick={toggle}>Play Now </Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content{
    h1{                          // we can write h1 inside also in 
        font-size: 96px;
        white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  height: 44px;
  border: none;
  font-size: 16px;
  transition: 0.5s background ease-in;
  cursor: pointer;

&:hover{    // used in styled components and & symbol refers to current component
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s background ease-in;

}

`;
