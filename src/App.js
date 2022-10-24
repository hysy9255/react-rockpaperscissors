import { useState } from "react";
import './App.css';
import Box from "./component/Box";


// 1. 박스 두개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼 
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 램덤하게 아이템 선택이 된다. 
// 5. 3번 4의 결과를 가지고 누가 이겼는지 승패를 따진다. 
// 6. 승패 결과의 따라 테두리 색깔이 바뀐다. (이기면-초록/ 지면-빨강/ 비기면-검정)

const data = {
  0: {
    name: "rock",
    img: "rock.jpg"
  },
  1: {
    name: "paper",
    img: "paper.jpeg"
  },
  2: {
    name: "scissors",
    img: "scissors.jpeg"
  }
}

function App() {
  const [myPick, setMyPick] = useState(data[0]);
  const [computerPick, setComputerPick] = useState(data[0]);

  const [myState, setMyState] = useState("draw");
  const [computerState, setComputerState] = useState("draw");

  const [myColor, setMyColor] = useState("black");
  const [computerColor, setComputerColor] = useState("black");

  const play = (input) => {
    setMyPick(data[input]);
    let rand_num = Math.floor(Math.random() * 3);
    setComputerPick(data[rand_num]);

    let user_choice = data[input].name;
    let computer_choice = data[rand_num].name;

    if (user_choice === "rock") {
      if (computer_choice === "rock") {
        setMyState("draw");
        setComputerState("draw");
        setMyColor("black")
        setComputerColor("black")
      }
      else if (computer_choice === "paper") {
        setMyState("lost");
        setComputerState("win");
        setMyColor("red")
        setComputerColor("green")
      }
      else {
        setMyState("win");
        setComputerState("lost");
        setMyColor("green")
        setComputerColor("red")
      };
    }
    else if (user_choice === "paper") {
      if (computer_choice === "rock") {
        setMyState("win");
        setComputerState("lost");
        setMyColor("green")
        setComputerColor("red")
      }
      else if (computer_choice === "paper") {
        setMyState("draw");
        setComputerState("draw");
        setMyColor("black")
        setComputerColor("black")
      }
      else {
        setMyState("lost");
        setComputerState("win");
        setMyColor("red")
        setComputerColor("green")
      };
    }
    else {
      if (computer_choice === "rock") {
        setMyState("lost");
        setComputerState("win");
        setMyColor("red")
        setComputerColor("green")
      }
      else if (computer_choice === "paper") {
        setMyState("win");
        setComputerState("lost");
        setMyColor("green")
        setComputerColor("red")
      }
      else {
        setMyState("draw");
        setComputerState("draw");
        setMyColor("black")
        setComputerColor("black")
      };
    }
  };

  return (
    <div>
      <div className="container">
        <Box title="User" data={myPick} status={myState} statusColor={myColor}/>
        <Box title="Computer" data={computerPick} status={computerState} statusColor={computerColor}/>
      </div>
      <div className="container_for_buttons">
        <button onClick={() => { play(0) }}>rock</button>
        <button onClick={() => { play(1) }}>paper</button>
        <button onClick={() => { play(2) }}>scissors</button>
      </div>
    </div>

  );
}

export default App;
