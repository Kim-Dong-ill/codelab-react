import React from "react";
import { useParams } from "react-router-dom";

function ViewPost(props) {
  //   console.log(props.listData);
  const { id } = useParams();

  console.log(id); //id는 자료형이 String으로 나오기때문에 그냥 쓰면 에러가 난다.
  const postId = parseInt(id);

  let myData = props.listData.find(function (x) {
    return x.id == postId;
  });
  console.log(myData);
  return (
    <div>
      <h3>{props.listData[id].title}</h3>
      <hr />
      <p>{props.listData[id].body}</p>
    </div>
  );
}

export default ViewPost;
