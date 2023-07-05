import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { todos_id } from "../redux/modules/todo";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo); //// 갑자기 왜 되지?
  const { id } = useParams();
  console.log(todos);
  useEffect(() => {
    dispatch(todos_id(id));
  }, [dispatch, id]);

  return (
    <Background>
      <DetailCard>
        <DetailHeader>
          <Id>ID:{id}</Id>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </Button>
        </DetailHeader>
        <Wrapdetail>
          <Title>{todos.title}</Title>
          <Body>{todos.body}</Body>
        </Wrapdetail>
      </DetailCard>
    </Background>
  );
};

export default Detail;

const Background = styled.div`
  border: 2px solid #eeeeee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailCard = styled.div`
  width: 600px;
  height: 400px;
  border: dashed gray 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: aliceblue;
  background-image: url("https://i.namu.wiki/i/Uymut0CpE-aZqD8nAd-ydKs9SvBI5tqfEskjNDGFETdUIEtu2zOM84VP_33AuBHYyok4w7WTM-beIgRDT_qL55XCqHrN4OPtDl8YREGiEyE6ixAC8U_Xu8UaEHV1nTJCVDE9jVrXeFPhgXqPeY0A2Q.svg");
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: right bottom;
`;
const DetailHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;
const Id = styled.h2`
  font-family: "Nanum Gothic", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
  color: #345c84;
`;
const Wrapdetail = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Title = styled.h1`
  padding: 0 24px;
  color: #2f2a6c;
  font-family: "Nanum Gothic", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
`;
const Body = styled.h2`
  padding: 0 24px;
  display: block;
  color: #5750c2;
  font-family: "Nanum Gothic", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
`;
const Button = styled.button`
  border: 1px aliceblue solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: aliceblue;
  border-radius: 12px;
  cursor: pointer;
`;
