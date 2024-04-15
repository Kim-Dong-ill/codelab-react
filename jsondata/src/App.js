import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./page/Main";
import ViewPost from "./page/ViewPost";

import { SiAlby } from "react-icons/si";
import axios from "axios";

function App() {
  // pagenation
  const [totalRecord, setTotalRecord] = useState(0); //전체 레코드수
  const [listCnt, setListCnt] = useState(10);
  const [page, setPage] = useState(1); //현재 페이지
  const totalPage = Math.ceil(totalRecord / listCnt); //전체 페이지 수
  const pagerCnt = 3; //보여질 페이저 그룹
  const startPage = Math.floor((page - 1) / pagerCnt) * pagerCnt + 1;
  const endPage = startPage + pagerCnt - 1;

  const mainMenu = [
    { name: "홈으로", url: "/" },
    { name: "회사소개", url: "#" },
    { name: "제품소개", url: "#" },
    { name: "온라인문의", url: "#" },
    { name: "커뮤니티", url: "/posts/1" },
  ];

  const [userData, setUserData] = useState([]);
  const [uData, setUData] = useState([]); //userId 찾으려고
  const [loding, setLoding] = useState(true); //loding

  useEffect(() => {
    async function mergeData() {
      const postsResponse = axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${listCnt}`
        )
        .then((posts) => {
          setTotalRecord(posts.headers[`x-total-count`]);
          return posts;
        })
        .catch((error) => {
          console.log(error);
        });
      const usersResponse = axios
        .get("https://jsonplaceholder.typicode.com/users?_page=1&_limit=10")
        .then((users) => {
          return users;
        })
        .catch((error) => {
          console.log(error);
        });

      const [posts, users] = await Promise.all([postsResponse, usersResponse]);
      console.log(posts.data);
      console.log(users.data);
      const combinedData = posts.data.map((item) => {
        const user = users.data.find(function (x) {
          return x.id == item.userId;
        });
        return {
          postId: item.Id,
          title: item.title,
          body: item.body,
          user: { user },
        };
      });
      setUserData(combinedData);
    }
    mergeData();
  }, [page]);

  // useEffect(() => {
  //   async function viewData() {
  //     try {
  //       await axios
  //         .get(
  //           `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${listCnt}`
  //         )
  //         .then((v) => {
  //           console.log(v);
  //           setUserData(v.data);
  //           setTotalRecord(v.headers[`x-total-count`]);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //       setTimeout(() => {
  //         setLoding(false);
  //       }, 500);
  //     } catch (error) {
  //       console.log(error);
  //       setLoding(false);
  //     }
  //   }
  //   viewData();
  // }, [page]);

  // // userId 찾으려고
  // useEffect(() => {
  //   async function viewData() {
  //     try {
  //       await axios
  //         .get("https://jsonplaceholder.typicode.com/users?_page=1&_limit=10")
  //         .then((v) => {
  //           setUData(v.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //       setTimeout(() => {
  //         setLoding(false);
  //       }, 500);
  //     } catch (error) {
  //       console.log(error);
  //       setLoding(false);
  //     }
  //   }
  //   viewData();
  // }, []);

  //pagenation
  function pagenation() {
    let pageNum = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNum.push(
        <li
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pageNum;
  }

  function preview() {
    if (startPage > 1) {
      setPage(startPage - 1);
    } else {
      alert("첫페이지 입니다.");
    }
  }
  function nextView() {
    if (endPage < totalPage) {
      setPage(endPage + 1);
    } else {
      alert("마지막 페이지 입니다.");
    }
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <h1>Logo</h1>
          <nav>
            <ul>
              {mainMenu.map((itme, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to={itme.url}>{itme.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div>
            <ul>
              <li>
                <SiAlby />
              </li>
              <li>
                <SiAlby />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {loding ? (
        <div className="loding">로딩중</div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Main listData={userData} uData={uData} />}
          />
          <Route path="/posts/:id" element={<ViewPost listData={userData} />} />
        </Routes>
      )}
      {/* pagenation */}
      <div className="pagenation">
        <div className="pre" onClick={preview}>
          이전 페이지
        </div>
        <ul>{pagenation()}</ul>
        <div className="next" onClick={nextView}>
          다음 페이지
        </div>
      </div>
    </>
  );
}

export default App;
