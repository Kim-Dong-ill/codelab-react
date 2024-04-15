import React from "react";

function Main({ listData, uData }) {
  //   console.log(listData);
  //   console.log(uData);

  let myData = uData.find(function (x) {
    return listData.userId == uData.id;
  });
  console.log(myData);
  return (
    <>
      <h3>blogList</h3>
      <hr />
      <ul>
        {listData.map((item, i) => {
          return (
            <li key={i}>
              {item.title} 이름 : {myData.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Main;
