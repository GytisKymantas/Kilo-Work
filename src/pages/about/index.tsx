import React from "react";
import { Box } from "components";
import { useState, useEffect } from "react";
import axios from "axios";

const About: React.FC = () => {
  //   const pazadas = new Promise((resolve, reject) => {
  //     const studentaiMokysisGerai = true;
  //     if (studentaiMokysisGerai) {
  //       resolve("valio!");
  //     } else {
  //       reject("pazadukai");
  //     }
  //   });

  //   pazadas
  //     .then((message) => console.log(message))
  //     .catch((err) => console.log(err));

  // jeigu vienu metu daug reikia ir suhandlinti daug promisu
  // const pirmas1 = new Promise((resolve,reject)=> resolve('pirmas')); //setTimeOut(()=>resolve('pirmas),5000)
  // const pirmas2 = new Promise((resolve,reject)=> resolve('antras'));
  // const pirmas3 = new Promise((resolve,reject)=> resolve('trecias'));
  // // pirmas kuris ivyksta, jeigu uzdetas delay ant kazkurio
  // Promise.race([pirmas1,pirmas2,pirmas3]).then((message)=>console.log(message));

  // https://reqres.in/api/users
  const [data, setData] = useState();

  const cancelToken = axios.CancelToken.source();
  const url = "https://reqres.in/api/users";
  // all crud methods

  interface Student {
    name: string;
    job: string;
    belenka: string;
  }

  const student: Student = {
    name: "studentas",
    job: "dev",
    belenka: "fsd",
  };

  const createUser = (student: Student) => {
    axios({
      method: "post",
      url: url,
      data: student,
    })
      .then((res) => console.log(res))
      .catch((err) => err);
  };

  useEffect(() => {
    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    // axios
    //   .get(url)
    //   .then((resp) => console.log(resp))
    //   .catch((err) => err);
    // jiegu tokenas besikreipiant papuola tada canceliina
    axios
      .get(url, { cancelToken: cancelToken.token })
      .then((resp) => console.log(resp))
      .catch((err) => err);
  }, []);
  // above ivyko vieksmas bet joks response negrizo
  cancelToken.cancel("banned");

  return (
    <Box
      width="22rem"
      backgroundColor="accent"
      onClick={() => createUser(student)}
    >
      about
    </Box>
  );
};

export default About;
